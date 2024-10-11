import React, { useEffect } from 'react';
import "../style/App.css";
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.botpressWebChat && typeof window.botpressWebChat.init === 'function') {
        window.botpressWebChat.init({
          botId: 'd206594d-b69d-4b62-ae01-ddf2ddb16cce',  // 올바른 botId로 대체
          hostUrl: 'https://cdn.botpress.cloud/webchat/v2.1',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: 'your-client-id',  // 올바른 clientId로 대체
        });
      } else {
        console.error("Botpress WebChat is not initialized properly.");
      }
    };

    script.onerror = () => {
      console.error("Failed to load the Botpress WebChat script.");
    };
  }, []);

  return <div id="webchat" />;
}

export default Chatbot;
