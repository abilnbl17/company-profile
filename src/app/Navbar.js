"use client";

import { Box, ButtonGroup, Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Providers } from './provider';
import { Link } from '@chakra-ui/react';

export default function Navbar() {

  return (
    <Providers>
        <Box
          bgColor='black'
          align='center'
          paddingBottom={5}
          paddingTop={5}
          position='relative'
          
          >

        <Box boxSize={12} position='absolute'>
          <Link href='/'>
            <Image
              src='./logo.jpg'
              alt='Logo'
              paddingBottom='100px'
              bgSize='20%'
            />
          </Link>
        </Box>

        <ButtonGroup align='center'>
            <Box >
              <Link href='/'>
                <Button colorScheme='whiteAlpha' borderRadius={90}>
                  Home
                </Button> 
              </Link>
            </Box>

            <Box>
              <Link href='/About'>
                <Button colorScheme='whiteAlpha' borderRadius={90}>
                  About Us
                </Button>
              </Link>
            </Box>

            <Box>
              <Link href='/Products'>
              <Button colorScheme='whiteAlpha' borderRadius={90}>
                Products
              </Button>
              </Link>
            </Box>

            <Box>
              <Link href='/Teams'>
              <Button colorScheme='whiteAlpha' borderRadius={90}>
                Teams 
              </Button>
              </Link>
            </Box>

          </ButtonGroup>
        </Box>
    </Providers>
  );
}