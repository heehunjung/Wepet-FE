import React, { useEffect } from "react";
import { Grid, GridItem, Box, Flex, Divider } from "@chakra-ui/react";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import Header from '../global/Header';
import TimeDisplay from '../global/TimeDisplay';
import "../style/App.css";

// 사용자 정의 테마 설정
const { theme, style } = buildTheme({
  botMessageBubble: {
    borderRadius: "12px",
    backgroundColor: "#e0f7fa", // 봇 메시지 배경색
  },
  userMessageBubble: {
    borderRadius: "12px",
    backgroundColor: "#c8e6c9", // 사용자 메시지 배경색
  },
});

// Botpress 설정
const clientId = "fd6baa55-c1a2-45be-a5bb-630ae7406434";  // 올바른 clientId로 대체
const botId = "d206594d-b69d-4b62-ae01-ddf2ddb16cce";  // 올바른 botId로 대체

const Assistant = ({ initialData = { species: "", age: "", condition: "" } }) => {
  const client = getClient({ clientId, botId });

  useEffect(() => {
    // 초기 메시지 전송
    const sendInitialMessage = async () => {
      if (initialData.species && initialData.age && initialData.condition) {
        const initialMessage = `반려동물 정보: 종 - ${initialData.species}, 나이 - ${initialData.age}, 상태 - "${initialData.condition}". 어떤 도움이 필요하신가요?`;

        setTimeout(() => {
          client.sendEvent({
            type: "text",
            payload: {
              text: initialMessage
            }
          });
        }, 1000); // 1초 지연
      }
    };

    sendInitialMessage();
  }, [initialData, client]);

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} p={4} height="100vh">
      <GridItem colSpan={12}>
        <Flex justifyContent="space-between" alignItems="center" padding="10px" bg="#ffffff" color="#123456">
          <Header title="Puppy Doc" />
          <TimeDisplay />
        </Flex>
      </GridItem>

      <GridItem colSpan={12}>
        <Divider my={4} />
      </GridItem>

      <GridItem colSpan={12}>
        <Box border="1px solid #ccc" borderRadius="md" height="calc(100vh - 140px)">
          {/* 사용자 정의 스타일 적용 */}
          <style>{style}</style>
          <WebchatProvider
            theme={theme}
            client={client}
            botId={botId}
            botName="PuppyDoc" // 봇 이름 설정
            avatarUrl="https://files.bpcontent.cloud/2024/10/28/15/20241028155018-SG5G1AUX.webp" // 봇 아바타 URL 설정
          >
            <Box h="100%" p={4}>
              <Webchat />
            </Box>
          </WebchatProvider>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Assistant;
