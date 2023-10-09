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
