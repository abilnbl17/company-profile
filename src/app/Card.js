"use client";

import React from 'react';
import { Card, CardBody, Image, Link, Stack, Text } from '@chakra-ui/react'

export default function AboutEnergyOur (){

    return (
        <>

            <Card 
                direction={{ base: 'column', sm: "row" }}
                overflow='hidden'
                variant='inline'
                position='relative'
                color='black'
                marginTop={1}
                marginLeft={10}
            >

                <Image 
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '300px' }}
                    src='./tyler-nix-energy drinks.jpg'
                    alt='Energy Drinks'
                
                />

                <Stack>
                    <CardBody>
                            <Text justifyContent='flex-start' >
                                Energy drinks are specially formulated beverages designed to provide an extra boost of energy, enhance alertness, 
                                and improve overall endurance. They typically contain active ingredients such as caffeine, taurine, and vitamins. 
                                Known for their refreshing taste and a variety of flavors, energy drinks have become a popular choice for combating fatigue and maintaining concentration. 
                                The moderate caffeine content helps improve focus without causing... {' '}
                                    <Link color='teal.500' href='/About'>
                                        see more
                                       </Link>
                            </Text>
                    </CardBody>
                </Stack>    
            </Card>


        <Card
        direction='row'
        overflow='hidden'
        variant='inline'
        position='relative'
        color='black'
        marginTop={4}
            marginLeft={10}

            >
                <Image 
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '300px' }}
                    src='./shipman-northcutt-owner.jpg'
                    alt='Owner'
                
                />
                <Stack>
                    <CardBody>
                        <Text> 

                                The Energy Drink Company, established in 1985, emerged as a result of the vision of Thomas Green. 
                                From its inception, the company committed itself to bringing ...
                            <Link color='teal.500' href='/About'>
                                see more
                              
                            </Link>
                        </Text>

                    </CardBody>
                </Stack>  

            </Card>
        </>
        );
    }