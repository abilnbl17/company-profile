"use client";

import { Box, Text, Image } from '@chakra-ui/react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Teams from '../Fetch/getData';
import { Providers } from '../provider';
import users from '@chakra-ui/react';

export default function products() {

    return (
        <Providers>

            <Box>

                <Navbar />
            
        <Teams />
        {/* <Image src={users ? users[0].picture.large : './jakob-rosen-.jpg'}  alt='Johns Casper' width={300} height={300} /> */}
                <Footer />
        
            </Box>
        </Providers>
    );
}