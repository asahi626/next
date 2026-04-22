"use client";

import { type CSSProperties, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [newStaffName, setNewStaffName] = useState("");
  const [staffList, setStaffList] = useState(["鈴木", "佐藤", "田中", "高橋"]);
  const filledTextLength = text.trim().length;

  const handleAddStaff = () => {
    const name = newStaffName.trim();
    if (!name) return;
    setStaffList((prev) => [...prev, name]);
    setNewStaffName("");
  };

  const panelBaseStyle: CSSProperties = {
    padding: "24px",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    backdropFilter: "blur(12px)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 10% 15%, rgba(45, 212, 191, 0.18) 0%, rgba(6, 182, 212, 0) 38%), radial-gradient(circle at 88% 0%, rgba(99, 102, 241, 0.36) 0%, rgba(99, 102, 241, 0) 42%), linear-gradient(145deg, #020617 0%, #0b1120 45%, #020617 100%)",
        padding: "56px 20px",
        color: "#dbe7ff",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <header style={{ marginBottom: "24px" }}>
          <p style={{ margin: 0, color: "#93c5fd", fontWeight: 700, letterSpacing: "0.1em", fontSize: "12px" }}>
            SHIFT MANAGEMENT
          </p>
          <h1 style={{ margin: "8px 0 0", fontSize: "42px", lineHeight: 1.05, color: "#ffffff" }}>
            スタッフ管理ダッシュボード（branchお試し中！！！）
          </h1>
          <p style={{ margin: "12px 0 0", color: "#9fb6d8", fontSize: "16px" }}>
            直感的に操作できる、モダンなシフトアプリのデモ画面
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "16px" }}>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(56, 189, 248, 0.45)",
                background: "rgba(14, 116, 144, 0.25)",
                color: "#7dd3fc",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              STAFF {staffList.length}
            </span>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(167, 139, 250, 0.45)",
                background: "rgba(76, 29, 149, 0.25)",
                color: "#c4b5fd",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              COUNT {count}
            </span>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(45, 212, 191, 0.42)",
                background: "rgba(6, 95, 70, 0.24)",
                color: "#5eead4",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              TEXT {filledTextLength}
            </span>
          </div>
        </header>

        <section
          style={{
            ...panelBaseStyle,
            marginBottom: "20px",
            background: "linear-gradient(140deg, rgba(37, 99, 235, 0.26), rgba(10, 18, 40, 0.74))",
            boxShadow: "0 18px 45px rgba(8, 47, 73, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2 style={{ margin: "0 0 12px", color: "#ffffff", fontSize: "22px" }}>カウントアクション</h2>
          <p style={{ marginTop: 0, color: "#b3c6e4" }}>
            現在のカウント: <strong style={{ fontSize: "34px", color: "#67e8f9", marginLeft: "6px" }}>{count}</strong>
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
                background: "linear-gradient(135deg, #06b6d4, #2563eb)",
                boxShadow: "0 8px 24px rgba(37, 99, 235, 0.5)",
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
                background: "rgba(127, 29, 29, 0.38)",
              }}
            >
              リセット
            </button>
          </div>
        </section>

        <section
          style={{
            ...panelBaseStyle,
            marginBottom: "20px",
            background: "linear-gradient(145deg, rgba(16, 185, 129, 0.2), rgba(7, 23, 44, 0.72))",
            boxShadow: "0 18px 45px rgba(2, 132, 199, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
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
              backgroundColor: "rgba(3, 10, 28, 0.78)",
              color: "#f8fafc",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <p style={{ margin: "14px 0 0", color: "#b3c6e4" }}>
            入力中の文字:
            <span style={{ color: "#5eead4", fontWeight: 800, fontSize: "22px", marginLeft: "8px" }}>
              {text || "（未入力）"}
            </span>
          </p>
        </section>

        <section
          style={{
            ...panelBaseStyle,
            background: "linear-gradient(145deg, rgba(168, 85, 247, 0.2), rgba(9, 20, 41, 0.75))",
            boxShadow: "0 18px 45px rgba(76, 29, 149, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2 style={{ margin: "0 0 8px", color: "#ffffff", fontSize: "22px" }}>スタッフ一覧</h2>
          <p style={{ margin: "0 0 16px", color: "#b3c6e4" }}>スタッフを追加して、リストをリアルタイム更新できます。</p>
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
                backgroundColor: "rgba(3, 10, 28, 0.78)",
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
                boxShadow: "0 8px 24px rgba(168, 85, 247, 0.45)",
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
                  background:
                    "linear-gradient(135deg, rgba(30, 41, 59, 0.62), rgba(15, 23, 42, 0.76))",
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