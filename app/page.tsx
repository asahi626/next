"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [newStaffName, setNewStaffName] = useState("");
  const [staffList, setStaffList] = useState(["鈴木", "佐藤", "田中", "高橋"]);

  const handleAddStaff = () => {
    const name = newStaffName.trim();
    if (!name) return;
    setStaffList((prev) => [...prev, name]);
    setNewStaffName("");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top right, #2d1f6f 0%, #111827 45%, #030712 100%)",
        padding: "56px 20px",
        color: "#e5e7eb",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <header style={{ marginBottom: "24px" }}>
          <p style={{ margin: 0, color: "#c4b5fd", fontWeight: 700, letterSpacing: "0.08em", fontSize: "12px" }}>
            SHIFT MANAGEMENT
          </p>
          <h1 style={{ margin: "8px 0 0", fontSize: "42px", lineHeight: 1.1, color: "#ffffff" }}>
            スタッフ管理ダッシュボード
          </h1>
          <p style={{ margin: "12px 0 0", color: "#cbd5e1", fontSize: "16px" }}>
            直感的に操作できる、モダンなシフトアプリのデモ画面
          </p>
        </header>

        <section
          style={{
            marginBottom: "20px",
            padding: "24px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.22), rgba(15, 23, 42, 0.64))",
            boxShadow: "0 20px 50px rgba(8, 47, 73, 0.35)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2 style={{ margin: "0 0 12px", color: "#ffffff", fontSize: "22px" }}>カウントアクション</h2>
          <p style={{ marginTop: 0, color: "#cbd5e1" }}>
            現在のカウント: <strong style={{ fontSize: "32px", color: "#22d3ee", marginLeft: "6px" }}>{count}</strong>
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() => setCount(count + 1)}
              style={{
                padding: "11px 18px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                color: "#ffffff",
                background: "linear-gradient(135deg, #22d3ee, #2563eb)",
              }}
            >
              +1 追加する
            </button>
            <button
              onClick={() => setCount(0)}
              style={{
                padding: "11px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(248, 113, 113, 0.6)",
                cursor: "pointer",
                fontWeight: 700,
                color: "#fecaca",
                background: "rgba(127, 29, 29, 0.3)",
              }}
            >
              リセット
            </button>
          </div>
        </section>

        <section
          style={{
            marginBottom: "20px",
            padding: "24px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(15, 23, 42, 0.64))",
            boxShadow: "0 20px 50px rgba(2, 132, 199, 0.22)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2 style={{ margin: "0 0 12px", color: "#ffffff", fontSize: "22px" }}>リアルタイム入力</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="ここに入力..."
            style={{
              padding: "12px 14px",
              width: "100%",
              borderRadius: "12px",
              border: "1px solid rgba(148, 163, 184, 0.4)",
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              color: "#f8fafc",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <p style={{ margin: "14px 0 0", color: "#cbd5e1" }}>
            入力中の文字:
            <span style={{ color: "#67e8f9", fontWeight: 800, fontSize: "22px", marginLeft: "8px" }}>
              {text || "（未入力）"}
            </span>
          </p>
        </section>

        <section
          style={{
            padding: "24px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(15, 23, 42, 0.64))",
            boxShadow: "0 20px 50px rgba(76, 29, 149, 0.25)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2 style={{ margin: "0 0 8px", color: "#ffffff", fontSize: "22px" }}>スタッフ一覧</h2>
          <p style={{ margin: "0 0 16px", color: "#cbd5e1" }}>スタッフを追加して、リストをリアルタイム更新できます。</p>
          <div style={{ marginBottom: "16px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="text"
              value={newStaffName}
              onChange={(e) => setNewStaffName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddStaff();
              }}
              placeholder="追加するスタッフ名"
              style={{
                padding: "12px 14px",
                borderRadius: "12px",
                border: "1px solid rgba(148, 163, 184, 0.4)",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                color: "#f8fafc",
                fontSize: "16px",
                outline: "none",
                flex: 1,
                minWidth: "220px",
              }}
            />
            <button
              onClick={handleAddStaff}
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                color: "#ffffff",
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                whiteSpace: "nowrap",
              }}
            >
              スタッフを追加する
            </button>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
            {staffList.map((name, index) => (
              <li
                key={index}
                style={{
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                  backgroundColor: "rgba(30, 41, 59, 0.55)",
                }}
              >
                <span style={{ color: "#cbd5e1" }}>スタッフ:</span>{" "}
                <strong style={{ color: "#f8fafc", fontSize: "17px" }}>{name}</strong>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}