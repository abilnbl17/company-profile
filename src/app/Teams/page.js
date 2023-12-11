"use client";

import { Box } from '@chakra-ui/react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Teams from '../Fetch/getData';
import { Providers } from '../provider';

export default function products() {

    return (
        <Providers>

            <Box>

                <Navbar />
            
        <Teams />
                <Footer />
        
            </Box>
        </Providers>
    );
}