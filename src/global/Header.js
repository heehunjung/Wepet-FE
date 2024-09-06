import React from 'react';
import "../style/App.css";
import { Heading, Box, VStack, Image } from "@chakra-ui/react"; 
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
    const navigate = useNavigate();

    return (
        <Box display="flex" alignItems="center">
            <VStack spacing={1}>
                <Box boxSize="70px" borderRadius="full" overflow="hidden" onClick={() => navigate('/home')} cursor="pointer">
                    <Image src="/icons/wepet-logo-icon.webp" boxSize="100px" alt="WePet Logo" /> 
                </Box>
            </VStack>
            <Heading as='h2' size='2xl'>{title}</Heading>
        </Box>
    );
};

export default Header;
