// home 화면 
import React from 'react';
import {
    Box,
    Flex,
    Divider,
    Grid,
    Button,
    VStack,
    Image,
    SimpleGrid,
    Heading,
    FormControl,
    Input,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../global/Header';
import TimeDisplay from '../global/TimeDisplay'

const Home = () => {
    return (
        <Box p={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Header title=" Puppy Doc" />
                <TimeDisplay />
            </Flex>

            <Divider my={4} />

            <Box mb={6} p={4}>
                <Heading as='h4' size='md'>
                    반려동물 건강 관리
                </Heading>
            </Box>

            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}>
                <Link to="/assistant">
                    <Button colorScheme='teal' variant='ghost' width="100%" height="100%">
                        <VStack spacing={1}>
                            <Box boxSize="100px" borderRadius="full" overflow="hidden">
                                <Image src="./icons/ai-assistant-icon.png" boxSize="100px" />
                            </Box>
                            <Heading as='h4' size='xs'>AI Assistant</Heading>
                        </VStack>
                    </Button>
                </Link>
                <Link to="/Hospital">
                    <Button colorScheme='teal' variant='ghost' width="100%" height="100%">
                        <VStack spacing={1}>
                            <Box boxSize="100px" borderRadius="full" overflow="hidden">
                                <Image src="./icons/hospital-icon.webp" boxSize="100px"/>
                            </Box>
                            <Heading as='h4' size='xs'>Hospital</Heading>
                        </VStack>
                    </Button>
                </Link>
                <Link to= "/Supplement">
                    <Button colorScheme='teal' variant='ghost' width="100%" height="100%">
                        <VStack spacing={1}>
                            <Box boxSize="100px" borderRadius="full" overflow="hidden">
                                <Image src="./icons/metric-icon.webp" boxSize="100px"/>
                            </Box>
                            <Heading as='h4' size='xs'>Supplement</Heading>
                        </VStack>
                    </Button>
                </Link>
            </Grid>

            <Box mb={6}>
                <Heading as='h4' size='md' mb={4}>
                    실시간 건강 데이터
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                    <Box border="1px solid rgba(0, 0, 0, 0.1)" borderRadius="md" p={4}>
                        <Heading size='s'>Heart Rate</Heading>
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
            </Box>

            <Box mb={6}>
                <Heading as='h4' size='md' mb={4}>
                    AI 수의사
                </Heading>
                <FormControl isRequired>
                    <Input placeholder='내용을 입력하세요.' width="50%"/>
                </FormControl>
            </Box>

            <Box mb={6}>
                <Heading as='h4' size='md' mb={4}>
                    긴급 동작
                </Heading>
                <Wrap spacing={2}>
                    <WrapItem>
                        <Button colorScheme='gray'>수의사 연결</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='gray'>응급 전화</Button>
                    </WrapItem>
                    <Link to="/Supplement">
                        <WrapItem>
                            <Button colorScheme='gray'>영양제 처방</Button>
                    </WrapItem>
        </Link>  {/* 닫는 태그 수정 */}
    </Wrap>
</Box>


            <Box mb={6}>
                <Heading as='h4' size='md' mb={4}>
                    영양제 추천
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                    {/* Example of Card Component */}
                </SimpleGrid>
            </Box>

            <Box>
                <Image
                    src='/icons/map-example.png'
                    alt='지도 이미지'
                />
            </Box>
        </Box>
    );
}

export default Home;
