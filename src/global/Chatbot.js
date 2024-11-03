import React, { useState, useEffect } from 'react';
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import "../style/App.css";

// Botpress Webchat 설정
const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#2563eb", // Webchat 색상
});

// Add your Client ID here ⬇️
const clientId = "fd6baa55-c1a2-45be-a5bb-630ae7406434"; // Botpress Client ID

export default function Chatbot() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const connectClient = async () => {
      try {
        await client.connect(); // 클라이언트 연결
        setIsConnected(true);  // 연결 성공 시 상태 업데이트
      } catch (error) {
        console.error("Botpress 클라이언트 연결 실패:", error);
      }
    };
    connectClient();

    return () => {
      client.disconnect(); // 컴포넌트가 언마운트될 때 클라이언트 연결 해제
    };
  }, [client]);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client}>
        <Fab onClick={toggleWebchat} />
        <div style={{ display: isWebchatOpen && isConnected ? "block" : "none" }}>
          <Webchat />
        </div>
      </WebchatProvider>
      {!isConnected && <p>연결 중...</p>}
    </div>
  );
}
