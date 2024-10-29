import React from "react";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import "../style/App.css";

// 사용자 정의 테마 설정
const { theme, style } = buildTheme({
  themeName: "custom",
  themeColor: "#123456", // 원하는 색상 코드로 변경
  botMessageColor: "#634433", // 봇 메시지 색상
  userMessageColor: "#123abc", // 사용자 메시지 색상
  backgroundColor: "#f4f4f9", // 웹채팅 배경 색상
  botMessageBubble: {
    borderRadius: "12px",
    color: "#ffffff"
  },
  userMessageBubble: {
    borderRadius: "12px",
    color: "#ffffff"
  }
});

// Botpress 설정
const clientId = "fd6baa55-c1a2-45be-a5bb-630ae7406434";  // 올바른 clientId로 대체
const botId = "d206594d-b69d-4b62-ae01-ddf2ddb16cce";  // 올바른 botId로 대체

const Chatbot = () => {
  const client = getClient({ clientId, botId });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* 사용자 정의 스타일 적용 */}
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client}>
        {/* Webchat 컴포넌트를 항상 열려 있도록 설정 */}
        <Webchat />
      </WebchatProvider>
    </div>
  );
};

export default Chatbot;
