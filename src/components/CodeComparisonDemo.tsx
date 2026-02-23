"use client";

import React from "react";

export default function CodeComparisonDemo() {
  const highlights = [
    {
      title: "FeedMe — Frontend • Next.js + Node.js",
      points: [
        "Improved user engagement by 25% via highly responsive UI and modern architecture.",
        "Reduced initial page load by 15% and improved Lighthouse scores by 20% through image and cache optimizations.",
        "Built end‑to‑end subscription features and payment flows with robust testing.",
      ],
      tag: "Product Impact",
    },
    {
      title: "ibrolink — Frontend Developer",
      points: [
        "Cut page load time by 20% and improved Lighthouse score by 30% using code optimization.",
        "Collaborated with backend + QA to ship high‑quality features quickly.",
        "Developed and maintained front-end for electricity, cable TV, airtime, and internet data services.",
      ],
      tag: "Performance",
    },
    {
      title: "WinGage & Quizard — Full‑Stack (Next.js, TypeScript, PostgreSQL)",
      points: [
        "Built WinGage, a gamification platform with a custom game engine editor for no-code campaigns, integrating Stripe for multi-tier pricing.",
        "Developed dynamic Quizard application with custom question generation based on topic and difficulty.",
        "Designed PostgreSQL database for user data, quiz results, and game configurations.",
        "Delivered responsive UI with TailwindCSS and Next.js for scalable, high-traffic experiences.",
      ],
      tag: "Full‑Stack",
    },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_0_40px_0_rgba(255,126,95,0.1)]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#feb47b]">Resume Highlights</div>
          <div className="text-[11px] text-gray-400">Selected wins aligned to product, performance, and DX</div>
        </div>
        <span className="text-[10px] px-2 py-1 rounded-full bg-[#ff7e5f1a] text-[#ff7e5f] border border-[#ff7e5f33]">Highlights</span>
      </div>
      <div className="space-y-4">
        {highlights.map((h, idx) => (
          <div key={idx} className="rounded-lg border border-white/10 bg-black/30 p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm text-white font-semibold">{h.title}</h4>
              <span className="text-[10px] px-2 py-1 rounded-full bg-[#ff7e5f1a] text-[#ff7e5f] border border-[#ff7e5f33]">{h.tag}</span>
            </div>
            <ul className="list-disc list-inside text-[13px] text-gray-300 leading-6">
              {h.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
