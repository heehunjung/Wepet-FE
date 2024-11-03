//동물 병원 지도 페이지
import React from 'react';
import {
    Box,
    Flex,
    Divider,
    GridItem,
    Heading,
} from '@chakra-ui/react';
import Header from '../global/Header';
import TimeDisplay from '../global/TimeDisplay'
import Map from '../maps/Map'

const Hospital = () => {
    return (    
        <Box p ={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Header title=" Puppy Doc" />
                <TimeDisplay />
            </Flex>
            <Divider my={4} />
            <GridItem colSpan={12}>
                <Heading as='h4' size='md' p={4}>
                    주변 동물 병원
                </Heading>
            </GridItem>
            <GridItem colSpan={12}>
                <Map/>
            </GridItem>
        </Box>
    );
}

export default Hospital;