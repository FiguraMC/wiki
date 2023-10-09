import React, { FC, PropsWithChildren, useMemo } from "react";
import Emoji from "../Emoji";
import FileTreeNode, { FileTreeNodeProps, isFileTreeNode } from "./Node";

interface Node extends Omit<FileTreeNodeProps, "children"> {
  children?: Node[];
}

const resolveFileTree = (children: React.ReactNode): Node[] => {
  const resolved = React.Children.map(children, (child): Node | null => {
    if (!React.isValidElement(child)) return null;

    if (child.props.originalType === FileTreeNode) {
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

const flattenFileTree = (tree: Node[], depth = 0): FlattenedNode[] => {
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

  return flattened;
};

const FileTreeRoot: FC<PropsWithChildren> = ({ children }) => {
  const flattenedTree = useMemo(() => {
    const tree = resolveFileTree(children);

    return flattenFileTree(tree);
  }, [children]);

  return (
    <pre>
      {flattenedTree.map((node, index, all) => {
        const useEndJoiner = (node.end && node.depth > 1) || index === all.length - 1;

        const start = node.depth > 0 ? "│  ".repeat(node.depth - 1) + (useEndJoiner ? "└─" : "├─") + " " : "";

        return (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "-0.15rem" }}>{start}</div>
            <Emoji icon={node.icon ?? "file/folder"} />
            <div style={{ marginLeft: "0.25rem" }}>{node.label}</div>
          </div>
        );
      })}
    </pre>
  );
};

export default FileTreeRoot;
