import React from "react";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import Header from '../global/Header';
import TimeDisplay from '../global/TimeDisplay';
import "../style/App.css";

// 사용자 정의 테마 설정
const { theme, style } = buildTheme({

  botMessageBubble: {
    borderRadius: "12px"
  },
  userMessageBubble: {
    borderRadius: "12px"
  }
});

// Botpress 설정
const clientId = "fd6baa55-c1a2-45be-a5bb-630ae7406434";  // 올바른 clientId로 대체
const botId = "d206594d-b69d-4b62-ae01-ddf2ddb16cce";  // 올바른 botId로 대체

const Chatbot = () => {
  const client = getClient({ clientId, botId });

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 헤더와 타임디스플레이 추가 */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#123456", color: "#ffffff" }}>
        <Header title="Puppy Doc" />
        <TimeDisplay />
      </div>

      <div style={{ flex: 0.5 }}>
        {/* 사용자 정의 스타일 적용 */}
        <style>{style}</style>
        <WebchatProvider theme={theme} client={client}>
          <Webchat />
        </WebchatProvider>
      </div>
    </div>
  );
};

export default Chatbot;
