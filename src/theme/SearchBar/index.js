import React, {useEffect, useRef, useState} from "react";
import Link from "@docusaurus/Link";

import "./styles.css"

let pagefindPromise = null;

async function getPagefind() {
    if (!pagefindPromise) {
        // i know this is absolutely terrible but i cant get webpack to not bundle it before runtime without doing this (when it does that it fails to find the pagefind/ directory in build and crashes)
        pagefindPromise = new Function(
            "return import('/pagefind/pagefind.js')"
        )();
    }

    return pagefindPromise;
}

async function searchPagefind(query) {
    const pagefind = await getPagefind();

    await pagefind.options({
        excerptLength: 25,

        ranking: { // see https://pagefind.app/docs/ranking/#configuring-term-frequency
            termFrequency: 0.15,
            termSimilarity: 1.0,
            termSaturation: 1.0,
            pageLength: 0.25,

            metaWeights: {
                title: 10.0
            }
        }
    });

    return pagefind.debouncedSearch(query, {}, 250);
}

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [resultCount, setResultCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const [selected, setSelected] = useState(-1);

    const inputRef = useRef(null);
    const containerRef = useRef(null);

    // ctrl+k or cmd+k to focus search bar
    useEffect(() => {
        function onKeyDown(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                inputRef.current?.focus();
                setFocused(true);
            }

            if (e.key === "Escape") {
                inputRef.current?.blur();
                setFocused(false);
                setSelected(-1);
            }
        }

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    // close dropdown when clicking off
    useEffect(() => {
        function onClick(e) {
            if (!containerRef.current?.contains(e.target)) {
                setFocused(false);
                setSelected(-1);
            }
        }

        document.addEventListener("pointerdown", onClick);
        return () => document.removeEventListener("pointerdown", onClick);
    }, []);

    // search when query changes
    useEffect(() => {
        const trimmed = query.trim();

        if (!trimmed) {
            setResults([]);
            setResultCount(0);
            setLoading(false);
            setSelected(-1);
            return;
        }

        let cancelled = false;

        setLoading(true);
        setSelected(-1);

        searchPagefind(trimmed)
            .then(async (search) => {
                if (cancelled || !search) return;

                setResultCount(search.results.length);

                // we load only the first 8 results for the navbar, pagefind itself has all results
                const visibleResults = await Promise.all(
                    search.results.slice(0, 8).map(result => result.data())
                );

                if (!cancelled) setResults(visibleResults);
            })
            .catch((error) => {
                if (!cancelled) {
                    console.error("Error searching with Pagefind:", error);
                    setResults([]);
                    setResultCount(0);
                }
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

            return () => {
                cancelled = true;
            };
    }, [query]);

    function onInputKeyDown(e) {
        if (!results.length) {
            if (e.key === "Enter" && query.trim())
                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
            return;
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelected((prev) => Math.min(prev + 1, results.length - 1));
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelected((prev) => Math.max(prev - 1, 0));
        }

        if (e.key === "Enter") {
            e.preventDefault();

            if (selected >= 0)
                window.location.href = results[selected].url;
            else
                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
        }
    }

    return (
        // some of this indentation is cursed as hell but i cant find a nicer way without squishing stuff into one line
        <div ref={containerRef} className="figura-search">
            <div 
                className={[
                    "figura-search-input-wrapper",
                    focused ? "figura-search-focused" : ""
                ].join(" ")}
            >
                <svg
                    className="figura-search-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>

                <input
                    ref={inputRef}
                    type="search"
                    value={query}
                    placeholder="Search..."
                    aria-label="Search"
                    aria-expanded={focused && Boolean(query.trim())}
                    onFocus={() => setFocused(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={onInputKeyDown}
                />

                {!query && (<kbd className="figura-search-shortcut">Ctrl+K</kbd>)}

                {query && (
                    <button
                        className="figura-search-clear"
                        aria-label="Clear search"
                        onClick={() => {
                            setQuery("");
                            inputRef.current?.focus();
                        }}
                    >
                        ×
                    </button>
                )}
            </div>

            {focused && query.trim() && (
                <div className="figura-search-dropdown">
                    {loading && (
                        <div className="figura-search-status">
                            <span className="figura-search-spinner" />
                            Searching...
                        </div>
                    )}

                    {!loading && resultCount === 0 && (
                        <div className="figura-search-status">
                            <strong>No results</strong>
                            <span> 
                                Nothing matched{" "}<code>{query}</code>
                            </span>
                        </div>
                    )}

                    {!loading && results.length > 0 && (
                        <>
                            <div className="figura-search-results">
                                {results.map((result, index) => (
                                    <SearchResult
                                        key={result.url}
                                        result={result}
                                        index={index}
                                        selected={selected === index}
                                        onMouseEnter={() => setSelected(index)}
                                    />
                                ))}
                            </div>

                            <div className="figura-search-footer">
                                <Link
                                    to={`/search?q=${encodeURIComponent(query.trim())}`}
                                    onClick={() => setFocused(false)}
                                >
                                    <span>
                                        View all{" "}
                                        <strong>{resultCount}</strong>{" "}
                                        results
                                    </span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

function SearchResult({ result , selected, onMouseEnter }) {
    // pagefind returns sub_results for individual headings that matched the query
    // first sub_result seems to usually be the page itself, so we use first actual heading match
    const section = result.sub_results?.find((sub) => sub.url !== result.url);
    const title = section?.title || result.meta?.title || "Untitled";
    const url = section?.url || result.url;
    const excerpt = section?.excerpt || result.excerpt;
    return (
        <Link
            to={url}
            className={[
                "figura-search-result",
                selected ? "figura-search-result-selected" : ""
            ].join(" ")}
            onMouseEnter={onMouseEnter}
        >
            
            {section && (
                <div className="figura-search-result-page">
                    {result.meta?.title}
                </div>
            )}

            <div className="figura-search-result-title">{title}</div>

            {excerpt && (
                <div
                    className="figura-search-result-excerpt"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            )}
        </Link>
    );
}
