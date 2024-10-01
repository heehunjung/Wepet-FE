import React, { useState } from 'react';
import {
    Box,
    Flex,
    Divider,
    Grid,
    GridItem,
    Heading,
    FormControl,
    Input,
    Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 추가
import Header from '../global/Header';
import TimeDisplay from '../global/TimeDisplay';

const Supplement = () => {
    // 각 입력 필드의 상태를 관리하기 위한 useState 훅
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [condition, setCondition] = useState('');

    const navigate = useNavigate();  // 페이지 이동을 위한 useNavigate 훅

    // 폼 제출 처리 함수
    const handleSubmit = () => {
        // 입력된 데이터를 콘솔에 출력
        console.log('종:', species);
        console.log('나이:', age);
        console.log('애완동물의 현재 상태:', condition);
        
        // 입력 데이터를 Assistant 페이지로 전달하며 페이지 이동
        navigate('/assistant', { state: { species, age, condition } });
    };

    return (
        <Box p={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Header title=" Puppy Doc" />
                <TimeDisplay />
            </Flex>
            <Divider my={4} />
            <Heading as='h4' size='md' p={4} mb={6}>
                영양제 추천을 위한 정보 입력
            </Heading>
            
            {/* 반응형 그리드 설정 */}
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} mb={6}>
                {/* 종 입력 */}
                <GridItem colSpan={1}>
                    <Heading as='h5' size='sm'>종</Heading>
                    <FormControl isRequired>
                        <Input
                            placeholder='종을 입력하세요.'
                            value={species}
                            onChange={(e) => setSpecies(e.target.value)}
                        />
                    </FormControl>
                </GridItem>

                {/* 나이 입력 */}
                <GridItem colSpan={1}>
                    <Heading as='h5' size='sm'>나이</Heading>
                    <FormControl isRequired>
                        <Input
                            placeholder='나이를 입력하세요.'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </FormControl>
                </GridItem>

                {/* 현재 상태 입력 */}
                <GridItem colSpan={2}>
                    <Heading as='h5' size='sm'>애완동물의 현재 상태</Heading>
                    <FormControl isRequired>
                        <Input
                            placeholder='애완동물의 상태를 입력하세요.'
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        />
                    </FormControl>
                </GridItem>
            </Grid>

            {/* 제출 버튼 */}
            <Box textAlign="center">
                <Button colorScheme='teal' onClick={handleSubmit}>
                    제출
                </Button>
            </Box>
        </Box>
    );
};

export default Supplement;
