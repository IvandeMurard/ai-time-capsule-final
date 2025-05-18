"use client";

import { useState } from "react";

export default function WritePage() {
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Write your letter</h1>
      <textarea
        className="w-full p-4 border rounded"
        rows={8}
        placeholder="Dear future me..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </main>
  );
}
