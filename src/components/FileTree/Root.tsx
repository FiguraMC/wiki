import React, { FC, PropsWithChildren, useMemo } from "react";
import Emoji from "../Emoji";
import FileTreeNode, { FileTreeNodeProps } from "./Node";

interface Node extends Omit<FileTreeNodeProps, "children"> {
  children?: Node[];
}

const resolveFileTree = (children: React.ReactNode): Node[] => {
  const resolved = React.Children.map(children, (child): Node | null => {
    if (!React.isValidElement(child)) return null;

    if (child.type === FileTreeNode) {
      const nodeProps = child.props as unknown as FileTreeNodeProps;

      return {
        icon: nodeProps.icon,
        label: nodeProps.label,
        children: nodeProps.children ? resolveFileTree(nodeProps.children) : [],
      };
    } else {
      return null;
    }
  });

  return resolved?.filter((node): node is Node => node !== null) ?? [];
};

interface FlattenedNode extends Omit<Node, "children"> {
  depth: number;
  end: boolean;
}

enum Joiner {
  VERTICAL = "│  ",
  RIGHT = "├─ ",
  END = "└─ ",
  EMPTY = "   ",
}

const transposeJoiners = (matrix: Joiner[][]): Joiner[][] => {
  const rows = matrix.length;
  if (rows === 0) return matrix;

  const cols = matrix[0]!.length;
  const result: Joiner[][] = Array.from({ length: cols }, () => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j]![i] = matrix[i]![j]!;
    }
  }

  return result;
};

const flattenFileTree = (tree: Node[], depth = 0) => {
  const flattened: FlattenedNode[] = [];

  for (let index = 0; index < tree.length; index++) {
    const node = tree[index]!;

    flattened.push({
      label: node.label,
      icon: node.icon,
      depth,
      end: index === tree.length - 1,
    });

    if (node.children) {
      flattened.push(...flattenFileTree(node.children, depth + 1));
    }
  }

  const maxDepth = flattened.reduce((max, node) => Math.max(max, node.depth), 0);

  let joiners = flattened.map((node): Joiner[] =>
    Array(node.depth)
      .fill(Joiner.VERTICAL)
      .concat(node.end ? Joiner.END : Joiner.RIGHT, Array(maxDepth - node.depth).fill(Joiner.EMPTY)),
  );

  joiners = transposeJoiners(joiners);

  joiners = joiners.map((row) => {
    let foundEnd = false;

    return row.map((joiner) => {
      if (foundEnd) {
        if (joiner === Joiner.EMPTY) {
          foundEnd = false;
        } else {
          return Joiner.EMPTY;
        }
      } else if (joiner === Joiner.END) {
        foundEnd = true;
      }

      return joiner;
    });
  });

  if (joiners[0]?.[0] === Joiner.END) {
    joiners.shift();
  }

  joiners = transposeJoiners(joiners);

  joiners = joiners.map((row) => {
    let lastNonEmpty = row.length - 1;

    while (row[lastNonEmpty] === Joiner.EMPTY) {
      lastNonEmpty--;
    }

    return row.slice(0, lastNonEmpty + 1);
  });

  return flattened.map((node, index) => {
    const joiner = joiners[index]!;

    return {
      ...node,
      start: joiner.join(""),
    };
  });
};

const FileTreeRoot: FC<PropsWithChildren> = ({ children }) => {
  const flattenedTree = useMemo(() => {
    const tree = resolveFileTree(children);

    return flattenFileTree(tree);
  }, [children]);

  return (
    <pre>
      {flattenedTree.map((node, index) => {
        return (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "-0.15rem" }}>{node.start}</div>
            <Emoji icon={node.icon ?? "file/folder"} />
            <div style={{ marginLeft: "0.25rem" }}>{node.label}</div>
          </div>
        );
      })}
    </pre>
  );
};

export default FileTreeRoot;
