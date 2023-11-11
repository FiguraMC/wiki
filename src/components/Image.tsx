import mediumZoom, { Zoom } from "medium-zoom";
import React, { FC, PropsWithChildren } from "react";

export type ImageProps = PropsWithChildren<{
  src: string;
  alt?: string;

  width?: string | number;

  className?: string;
}>;

const Image: FC<ImageProps> = ({ src, alt, className, width, children }) => {
  const path: string | undefined = src.startsWith("/") ? require("@site/static" + src)?.default : src;
  const zoomRef = React.useRef<Zoom | null>(null);

  const getZoom = () => {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom({
        background: "rgba(0, 0, 0, 0.65)",
      });
    }

    return zoomRef.current;
  };

  const attachZoom = (image: HTMLImageElement | null) => {
    const zoom = getZoom();

    if (image) {
      zoom.attach(image);
    } else {
      zoom.detach();
    }
  };

  return (
    <figure
      className={
        "flex flex-col mx-0 mt-0 mb-[var(--ifm-leading)] overflow-hidden rounded-md shadow-sm dark:shadow-none w-fit " +
        (className ?? "")
      }
    >
      <div className="flex bg-gray-100 dark:bg-slate-900">
        <img src={path} alt={alt} width={width} ref={attachZoom} />
      </div>
      {children && (
        <figcaption className="px-2 py-1.5 overflow-hidden text-sm rounded-b-md bg-gray-50 dark:bg-zinc-800 border border-gray-200 border-solid dark:border-transparent border-t-0">
          {children}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
