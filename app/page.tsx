"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#FAF8F4] text-[#3B2F2F]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to AI Time Capsule</h1>
        <a href="/write" className="bg-[#D6A85A] text-white px-4 py-2 rounded-xl">Begin</a>
      </div>
    </main>
  );
}
