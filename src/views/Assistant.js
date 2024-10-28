import React, { useState, useEffect } from 'react';
import { Box, Grid, GridItem, Heading, Input, Button, Text, Stack, Flex, Divider } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import Header from '../global/Header';
import TimeDisplay from '../global/TimeDisplay';

const Assistant = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태 추가

    const location = useLocation();
    const { species, age, condition } = location.state || {};

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

    // OpenAI API 호출 함수
    const fetchAIResponse = async (prompt) => {
        setLoading(true); // 로딩 시작
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.8,
                max_tokens: 1024,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0.5
            })
        };

        try {
            const response = await fetch(apiEndpoint, requestOptions);
            const data = await response.json();
            setLoading(false); // 로딩 끝
            return data.choices[0].message.content;
        } catch (error) {
            console.error('OpenAI API 호출 중 오류 발생:', error);
            setLoading(false); // 로딩 끝
            return 'API 호출 중 오류가 발생했습니다.';
        }
    };

    // 컴포넌트가 마운트될 때 전달된 데이터가 있으면 질문 생성 후 메시지 전송
    useEffect(() => {
        const sendInitialMessage = async () => {
            if (species && age && condition) {
                const initialMessage = `반려동물은 ${species}이고, 나이는 ${age}살이며 현재 상태는 "${condition}" 야. 이런 상황에서 어떤 영양제를 먹으면 좋을까?`;

                // 사용자 메시지 업데이트 (한 번만)
                setMessages([{ user: 'user', text: initialMessage }]);

                // AI 응답 받기
                const gptResponse = await fetchAIResponse(initialMessage);

                // AI 메시지 업데이트
                setMessages((prevMessages) => [...prevMessages, { user: 'gpt', text: gptResponse }]);
            }
        };

        sendInitialMessage();
    }, [species, age, condition]);

    // 메시지 전송 및 처리 함수
    const sendMessage = async (message = input) => {
        if (message.trim() === '') return;

        // 사용자 메시지를 즉시 업데이트
        const newMessage = { user: 'user', text: message };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        setInput('');  // 입력 필드 비우기

        // ChatGPT API에 메시지를 보내고 응답 받기
        const gptResponse = await fetchAIResponse(message);

        const gptMessage = { user: 'gpt', text: gptResponse };

        // GPT의 응답을 업데이트
        setMessages((prevMessages) => [...prevMessages, gptMessage]);
    };

    // 페이지 제목을 조건에 따라 동적으로 변경
    const pageTitle = species && age && condition ? "영양제 추천" : "AI 수의사";

    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={4} p={4}>
            <GridItem colSpan={12}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Header title="Puppy Doc" />
                    <TimeDisplay />
                </Flex>
            </GridItem>
            <Divider my={4} />
            <GridItem colSpan={12}>
                <Heading as='h4' size='md' p={4}>
                    {pageTitle} {/* 페이지 제목을 동적으로 렌더링 */}
                </Heading>
            </GridItem>
            <GridItem colSpan={12}>
                <Box border="1px solid #ccc" borderRadius="md" p={4}>
                    <Box h="300px" overflowY="auto" p={4} border="1px solid #ccc" borderRadius="md">
                        {messages.map((msg, index) => (
                            <Stack key={index} direction={msg.user === 'user' ? 'row-reverse' : 'row'} spacing={4} mb={2}>
                                <Box
                                    bg={msg.user === 'user' ? 'teal.500' : 'gray.300'}
                                    color={msg.user === 'user' ? 'white' : 'black'}
                                    p={2}
                                    borderRadius="md"
                                >
                                    <Text>{msg.text}</Text>
                                </Box>
                            </Stack>
                        ))}
                        {loading && (
                            <Text color="gray.500">응답을 기다리는 중...</Text> // 로딩 상태 표시
                        )}
                    </Box>

                    <Grid templateColumns="repeat(12, 1fr)" gap={4} mt={4}>
                        <GridItem colSpan={10}>
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => { // 여기에 추가
                                    if (e.key === 'Enter' && !loading) { // 엔터 키가 눌리고 로딩 중이 아닐 때
                                        sendMessage(); // 메시지 전송 함수 호출
                                    }
                                }}
                                placeholder="메시지를 입력하세요..."
                            />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Button onClick={() => sendMessage()} colorScheme="teal" width="100%" isDisabled={loading}>
                                {loading ? "전송 중..." : "전송"}
                            </Button>
                        </GridItem>
                    </Grid>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Assistant;
