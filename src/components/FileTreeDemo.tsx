"use client";

import React from "react";

type TreeNode = { id: string; name: string; children?: TreeNode[] };

const DATA: TreeNode = {
  id: "1",
  name: "about",
  children: [
    {
      id: "2",
      name: "profile",
      children: [
        { id: "3", name: "name: Jeremiah" },
        { id: "4", name: "role: Full-Stack Dev" },
        { id: "5", name: "location: Lagos, Nigeria" },
      ],
    },
    {
      id: "6",
      name: "experience",
      children: [
        { id: "7", name: "5+ yrs • Web Dev" },
        { id: "8", name: "4+ yrs • React/Next" },
        { id: "9", name: "3+ yrs • Full-Stack" },
      ],
    },
    {
      id: "10",
      name: "skills",
      children: [
        { id: "11", name: "TS • React • Node" },
        { id: "12", name: "DB • APIs • Cloud" },
        { id: "13", name: "Docker • Git • Testing" },
        { id: "18", name: "Claude • AI • Copilot" },
      ],
    },
    {
      id: "19",
      name: "tools",
      children: [
        { id: "20", name: "Slack • Teams • Discord" },
        { id: "21", name: "ClickUp • Jira • Notion" },
        { id: "22", name: "GitHub • Vercel • Docker" },
        { id: "23", name: "Postman • Figma • Swagger" },
      ],
    },
    {
      id: "14",
      name: "interests",
      children: [
        { id: "15", name: "⚽ Football fanatic" },
        { id: "16", name: "🎮 CODM player" },
        { id: "17", name: "💻 Code enthusiast" },
      ],
    },
  ],
};

function Node({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const isFolder = !!node.children?.length;
  return (
    <div className="text-sm">
      <div className="flex items-center gap-2" style={{ paddingLeft: depth * 16 }}>
        <span className="inline-flex h-4 w-4 items-center justify-center text-[#feb47b]">
          {isFolder ? "▾" : "•"}
        </span>
        <span className={isFolder ? "text-white" : "text-gray-300 font-mono"}>
          {node.name}
        </span>
      </div>
      {isFolder && (
        <div className="ml-4 border-l border-white/10">
          {node.children!.map((child) => (
            <div key={child.id} className="mt-1">
              <Node node={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTreeDemo() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_0_40px_0_rgba(255,126,95,0.15)]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#feb47b]">
            About Snapshot
          </div>
          <div className="text-[11px] text-gray-400">
            Quick peek into who I am & what I do
          </div>
        </div>
        <span className="text-[10px] px-2 py-1 rounded-full bg-[#ff7e5f1a] text-[#ff7e5f] border border-[#ff7e5f33] transition-transform duration-200 hover:scale-105">
          about
        </span>
      </div>
      <Node node={DATA} />
    </div>
  );
}
