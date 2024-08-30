import React from 'react';
import { Heading, Box } from "@chakra-ui/react";
import { FaDog } from "react-icons/fa";

const Header = ({ title }) => (
    <Box display="flex" alignItems="center">
        <Box as={FaDog} boxSize="40px" mr="8px" />
        <Heading as='h2' size='2xl'>{title}</Heading>
    </Box>
);

export default Header;