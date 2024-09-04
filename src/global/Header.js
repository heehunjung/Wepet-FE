import React from 'react';
import "../style/App.css";
import { Heading, Box, VStack, Image } from "@chakra-ui/react"; 

const Header = ({ title }) => (
    <Box display="flex" alignItems="center">
        <VStack spacing={1}>
            <Box boxSize="70px" borderRadius="full" overflow="hidden">
                <Image src="/icons/wepet-logo-icon.webp" boxSize="100px" /> 
            </Box>
        </VStack>
        <Heading as='h2' size='2xl'>{title}</Heading>
    </Box>
);

export default Header;
