import React, { PropsWithChildren } from "react";
import { FC } from "react";

export type FileTreeNodeProps = PropsWithChildren<{
  icon?: string | undefined;
  label: string | React.ReactNode;
}>;

const FileTreeNode: FC = () => {
  return <></>;
};

export default FileTreeNode;

export const isFileTreeNode = (
  child: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>,
): child is React.ReactElement<typeof FileTreeNode> => {
  return child.type === FileTreeNode;
};
