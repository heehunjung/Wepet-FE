import React, { useState, useEffect } from 'react';
import {
    Box,
    Heading,
    Flex,
    Image,
    VStack,
    SimpleGrid,
    Text,
    Input,
    Wrap,
    WrapItem,
    Button,
    FormControl,
    Stack, Divider, CardFooter, ButtonGroup, Card, CardBody
} from '@chakra-ui/react';
import { FaDog, FaBatteryFull } from 'react-icons/fa';

const Home = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setCurrentTime(timeString);
        };
        const timerId = setInterval(updateTime, 1000);  // 1초마다 시간 업데이트

        // 초기 시간을 설정
        updateTime();

        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearInterval(timerId);
    }, []);

    return (
        <>
            <Flex position="relative" justifyContent="flex-end" flex="1" alignItems="center">
                <Box mr={4} display="flex" alignItems="center">
                    <FaBatteryFull style={{marginRight: '8px'}}/>
                    <Heading as='h4' size='md'>{currentTime}</Heading>
                </Box>
            </Flex>
            <hr/>

            <Heading as='h2' size='2xl' display="flex" alignItems="center">
                <FaDog style={{marginRight: '8px'}}/>
                Puppy Doc
            </Heading>
            <br/>
            <hr/>

            <Box mb={6} p={4} border="1px solid transparent">
                <Heading as='h4' size='md'>
                    반려동물 건강 관리
                </Heading>
            </Box>
            <Box mb={6} p={4} border="1px solid transparent">
            <Stack direction='row' >
                <Button colorScheme='teal' variant='ghost'>
                    <VStack spacing={1}>
                        <Box boxSize="100px" borderRadius="full" overflow="hidden">
                            <Image src="./icons/ai-assistant-icon.png" boxSize="100px"/>
                        </Box>
                        <Heading as='h4' size='xs'>AI Assistant</Heading>
                    </VStack>
                </Button>
                <Button colorScheme='teal' variant='ghost'>
                    <VStack spacing={1}>
                        <Box boxSize="100px" borderRadius="full" overflow="hidden">
                            <Image src="./icons/hospital-icon.webp" boxSize="100px"/>
                        </Box>
                        <Heading as='h4' size='xs'>Hospital</Heading>
                    </VStack>
                </Button>
                <Button colorScheme='teal' variant='ghost'>
                    <VStack spacing={1}>
                        <Box boxSize="100px" borderRadius="full" overflow="hidden">
                            <Image src="./icons/metric-icon.webp" boxSize="100px"/>
                        </Box>
                        <Heading as='h4' size='xs'>Health Metrics</Heading>
                    </VStack>
                </Button>
            </Stack>
            </Box>


            <Box pl={4} pr={4} pt={3}>
                <Heading as='h4' size='md' mb={4}>
                    실시간 건강 데이터
                </Heading>
            </Box>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Box border="1px solid rgba(0, 0, 0, 0.1)" borderRadius="md" p={4}>
                    <Heading size='s'>Heart Rate </Heading>
                    <Heading as='h4' size='xs'>78 bpm</Heading>
                </Box>
                <Box border="1px solid rgba(0, 0, 0, 0.1)" borderRadius="md" p={4}>
                    <Heading size='s'>Activity Level</Heading>
                    <Heading as='h4' size='xs'>Moderate</Heading>
                </Box>
                <Box border="1px solid rgba(0, 0, 0, 0.1)" borderRadius="md" p={4}>
                    <Heading size='s'>Sleep</Heading>
                    <Heading as='h4' size='xs'>8 hours</Heading>
                </Box>
            </SimpleGrid>

            <Box pl={4} pr={4} pt={3}>
                <Heading as='h4' size='md' mb={4}>
                    AI 수의사
                </Heading>
            </Box>
            <FormControl isRequired>
                <Input placeholder='내용을 입력하세요.' width="50%"/>
            </FormControl>

            <Box pl={4} pr={4} pt={3}>
                <Heading as='h4' size='md' mb={4}>
                    긴급 동작
                </Heading>
            </Box>
            <Wrap spacing={2}>
                <WrapItem>
                    <Button colorScheme='gray'>수의사 연결</Button>
                </WrapItem>
                <WrapItem>
                    <Button colorScheme='gray'>영양제 처방</Button>
                </WrapItem>
                <WrapItem>
                    <Button colorScheme='gray'>응급 전화</Button>
                </WrapItem>
            </Wrap>

            <Box pl={4} pr={4} pt={3}>
                <Heading as='h4' size='md' mb={4}>
                    영양제 추천
                </Heading>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                <Card maxW='xs' width="100%">
                    <CardBody>
                        <Image
                            src='https://cdn.ownerclan.com/WfcMwAI7F9Ku5IC0OYnHEGaOpJ8s2Op1e_z84alAeqk/marketize/auto/as/v1.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='xs'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading size='sm'>피모영양제</Heading>
                            <Text fontSize='sm'>
                                피부병
                            </Text>
                            <Text color='blue.600' fontSize='lg'>
                                48,320 원
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' size='sm'>
                            구매
                        </Button>
                    </CardFooter>
                </Card>
                <Card maxW='xs' width="100%">
                    <CardBody>
                        <Image
                            src='https://bff-images.bemypet.kr/media/medias/product/473-fafedbf95ee62e50b6afa288625ba21f5696c5e4b740ad5d58819ed2c8c3.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='xs'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading size='sm'>침향 심장 튼튼</Heading>
                            <Text fontSize='sm'>
                                심장병
                            </Text>
                            <Text color='blue.600' fontSize='lg'>
                                30,000원
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' size='sm'>
                            구매
                        </Button>
                    </CardFooter>
                </Card>
                <Card maxW='xs' width="100%">
                    <CardBody>
                        <Image
                            src='https://img.dogpre.com/mobile/dogpre/product/85/84980_detail_04511455.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='xs'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading size='sm'>멍냥이랑 덴탈스타</Heading>
                            <Text fontSize='sm'>
                                구강 영양제
                            </Text>
                            <Text color='blue.600' fontSize='lg'>
                                12,500원
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' size='sm'>
                            구매
                        </Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <br/>
            <Image
                src='/icons/map-example.png'
                alt='지도 이미지'
            />
        </>
    );
}

export default Home;
