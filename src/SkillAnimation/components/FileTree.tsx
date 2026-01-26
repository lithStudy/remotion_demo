import React from "react";

export interface FileTreeProps {
  highlightPath?: string;
  highlightOpacity?: number;
  scale?: number;
  opacity?: number;
}

interface FileNode {
  name: string;
  type: "file" | "folder";
  path: string;
  children?: FileNode[];
}

const fileStructure: FileNode = {
  name: "project",
  type: "folder",
  path: "",
  children: [
    {
      name: ".cursor",
      type: "folder",
      path: ".cursor",
      children: [
        {
          name: "skills",
          type: "folder",
          path: ".cursor/skills",
          children: [
            {
              name: "remotion",
              type: "folder",
              path: ".cursor/skills/remotion",
              children: [
                {
                  name: "SKILL.md",
                  type: "file",
                  path: ".cursor/skills/remotion/SKILL.md",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const FileIcon: React.FC<{ type: "file" | "folder" }> = ({ type }) => {
  if (type === "folder") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M2 4C2 3.44772 2.44772 3 3 3H8L10 5H17C17.5523 5 18 5.44772 18 6V16C18 16.5523 17.5523 17 17 17H3C2.44772 17 2 16.5523 2 16V4Z"
          fill="#79c0ff"
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 2C3.44772 2 3 2.44772 3 3V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V6L12 1H4Z"
        fill="#64ffda"
        stroke="#64ffda"
        strokeWidth="1"
      />
      <path d="M12 1V6H17" stroke="#64ffda" strokeWidth="1" />
    </svg>
  );
};

const renderNode = (
  node: FileNode,
  level: number,
  highlightPath: string | undefined,
  highlightOpacity: number
): React.ReactNode => {
  const isHighlighted = highlightPath === node.path;
  const indent = level * 24;

  return (
    <div key={node.path} style={{ marginLeft: indent }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "4px 8px",
          borderRadius: 4,
          backgroundColor: isHighlighted
            ? `rgba(100, 255, 218, ${highlightOpacity * 0.2})`
            : "transparent",
          border: isHighlighted
            ? `2px solid rgba(100, 255, 218, ${highlightOpacity})`
            : "2px solid transparent",
          transition: "all 0.2s",
        }}
      >
        <FileIcon type={node.type} />
        <span
          style={{
            color: isHighlighted ? "#64ffda" : "#c9d1d9",
            fontSize: 20,
            fontFamily: "monospace",
            fontWeight: isHighlighted ? "bold" : "normal",
          }}
        >
          {node.name}
        </span>
      </div>
      {node.children &&
        node.children.map((child) =>
          renderNode(child, level + 1, highlightPath, highlightOpacity)
        )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({
  highlightPath,
  highlightOpacity = 1,
  scale = 1,
  opacity = 1,
}) => {
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        backgroundColor: "#0d1117",
        borderRadius: 12,
        border: "2px solid #30363d",
        padding: "20px",
        fontFamily: "monospace",
        minWidth: 400,
      }}
    >
      <div
        style={{
          color: "#8b949e",
          fontSize: 18,
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        文件系统
      </div>
      {renderNode(fileStructure, 0, highlightPath, highlightOpacity)}
    </div>
  );
};
