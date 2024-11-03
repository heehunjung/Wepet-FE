import React, { useState, useEffect } from 'react';
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { Box, Grid, GridItem, Heading, Input, Button, Text, Stack, Flex, Divider, Image } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import Header from '../global/Header';
import TimeDisplay from '../global/TimeDisplay';

// Botpress Webchat 설정
const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#2563eb",
  botAvatarUrl: "/icons/wepet-logo-icon.webp" // Puppy Doc 사진으로 변경
});

// Botpress Client ID 설정
const clientId = "fd6baa55-c1a2-45be-a5bb-630ae7406434";

const Assistant = () => {
    const client = getClient({ clientId });
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const { species, age, condition } = location.state || {};

    useEffect(() => {
        const connectClient = async () => {
            try {
                await client.connect();
                setIsConnected(true);

                // 초기 메시지 보내기
                if (species && age && condition) {
                    const initialMessage = `안녕하세요! 저희는 ${species}(${age}세)의 현재 상태(${condition})를 기반으로 영양제를 추천해드리기 위해 준비하고 있습니다.`;
                    setMessages((prevMessages) => [...prevMessages, { user: 'bot', text: initialMessage }]);
                    await client.sendMessage({ type: 'text', text: initialMessage });
                }
            } catch (error) {
                console.error("Botpress 클라이언트 연결 실패:", error);
            }
        };
        connectClient();

        return () => {
            client.disconnect();
        };
    }, []);

    const pageTitle = species && age && condition ? "영양제 추천" : "AI 수의사";

    const sendMessage = async () => {
        if (input.trim() === '') return;
        const newMessage = { user: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');

        try {
            await client.sendMessage({ type: 'text', text: input });
        } catch (error) {
            console.error("메시지 전송 실패:", error);
        }
    };

    return (
        <Box p={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Header title="Puppy Doc" />
                <TimeDisplay />
            </Flex>
            <Divider my={4} />
            <Heading as='h4' size='md' p={4} mb={6}>
                {pageTitle}
            </Heading>
            <Box border="1px solid #ccc" borderRadius="md" p={4} h="700px" position="relative" mb={4}>
                <style>{style}</style>
                <WebchatProvider theme={theme} client={client}>
                    {isConnected ? <Webchat /> : <Text>연결 중...</Text>}
                </WebchatProvider>
            </Box>

        </Box>
    );
};

export default Assistant;
