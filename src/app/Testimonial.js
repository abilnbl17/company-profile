"use client";

import { Card, CardBody, CardHeader, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function CultureCard (){

    return (
        
    <>
        <SimpleGrid spacing={2} mb={10} templateColumns='repeat(auto-fill, minmax(500px, 1fr))' marginTop={1}>
            <Card
                boxShadow='2xl'
            >
                <CardHeader>
                    <Heading size='md' marginTop={2}> Joel Muniz</Heading>
                </CardHeader>
                <CardBody >
                    <Image 
                        src='./joel-muniz-.jpg'
                        alt='Joel Muniz'
                        
                    />
                    <Text>
                        After consuming an energy drink, the experience of playing basketball becomes more energized and focused. 
                        The caffeine and taurine content in the energy drink provide an extra boost to enhance physical endurance and concentration. 
                        Players feel sustained energy, enabling them to tackle challenges in the game with greater confidence. 
                        The refreshing taste also offers a revitalizing sensation, making the energy drink an ideal companion for peak performance in basketball. 
                        For sports enthusiasts, energy drinks become a practical solution to maintain stamina and focus throughout the game.
                    </Text>
                </CardBody>
            </Card>

            <Card
            boxShadow='2xl'
            >
                <CardHeader>
                    <Heading size='md' marginTop={2}> Ryoji Iwata </Heading>
                </CardHeader>
                <CardBody >
                    <Image 
                        src='./ryoji-iwata-.jpg'
                        alt='Ryoji Iwata'
                    />
                    <Text>
                        After consuming an energy drink, the running experience becomes more dynamic and energetic. The combination of caffeine and taurine in the energy drink provides an additional boost to enhance endurance and focus during running activities. 
                        The sustained energy helps runners to undergo training or long-distance runs more optimally. 
                        The refreshing sensation from the energy drink also adds to the excitement, making it an ideal companion for running sessions. 
                        For running enthusiasts, energy drinks provide a quick and effective solution to maintain high performance and overcome fatigue during running activities.
                    </Text>
                </CardBody>
            </Card>

            <Card
            boxShadow='2xl'
            >
                <CardHeader>
                    <Heading size='md' marginTop={2}> James Junior </Heading>
                </CardHeader>
                <CardBody >
                    <Image 
                        src='./chuttersnap-.jpg'
                        alt='Chuttersnap'
                    />
                    <Text>
                        After drinking an energy drink, the swimming experience becomes more refreshing and energized. 
                        The caffeine and taurine content in the energy drink provide an extra boost to enhance stamina and alertness in the water. 
                        The long-lasting energy sensation helps swimmers face challenges in the pool with greater confidence. 
                        The refreshing taste of the energy drink also offers a revitalizing advantage, making it an ideal companion for swimming sessions. 
                        For water sports enthusiasts, energy drinks provide a quick and practical solution to maintain vitality and focus during water activities.
                    </Text>
                </CardBody>
            </Card>
        </SimpleGrid>
    </>

    );
}