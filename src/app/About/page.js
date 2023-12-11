"us client";

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Grid, GridItem, Heading, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import React from '@chakra-ui/react'

export default function AboutPage(){

    return (
        <Box>
            <Navbar />
            <Box bgColor='black' color='white' paddingTop={10}>
                <Heading align='center'>
                    <Text mt={10}>
                        Feel the Power with Energy
                    </Text>
                </Heading>
                    <Text justifyContent='flex-start' mt={20} align='center' fontSize='lg' ml={10} mr={10} mb={10}>
                                Energy drinks are specially formulated beverages designed to provide an extra boost of energy, enhance alertness, 
                                and improve overall endurance. They typically contain active ingredients such as caffeine, taurine, and vitamins. 
                                Known for their refreshing taste and a variety of flavors, energy drinks have become a popular choice for combating fatigue and maintaining concentration. 
                                The moderate caffeine content helps improve focus without causing jitteriness or excessive fatigue. Some energy drinks also include vitamins and electrolytes, 
                                contributing to body balance and supporting metabolic functions. Popular among those engaged in sports, these drinks aid in performance enhancement and post-exercise recovery. 
                                Conveniently packaged, energy drinks offer an efficient solution for sustaining stamina throughout the day. Responsible consumption is emphasized to enjoy the positive benefits without compromising health and well-being.
                    </Text>
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(295px, 1fr))'>
                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> Riot Mango </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                src='/public/tyler-nix-energy drinks.jpg'
                                alt='Tyler Nix Drink'
                                />
                                <Text> The flavor can provide a refreshing and sweet touch to the beverage </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='/Products'>
                                    <Button> View Here </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> Nocco Orange </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                    src='/public/filip-baotic-drink.jpg'
                                    alt='Filip Baotic Drink'
                                />
                                <Text> NOCCO Blood Orange, as the name suggests, has the flavor of blood orange. Blood orange is a fruit rich in antioxidants and has a distinctive and refreshing taste. </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='/Products'>
                                    <Button> View Here </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> RedBull </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                    src='/public/jan-kopriva-drink.jpg'
                                    alt='Jan Kopriva'
                                />
                                <Text> Red Bull contains a combination of active ingredients such as caffeine, taurine, and vitamin B that work together to boost energy levels and alertness. Caffeine, as a stimulant, helps reduce drowsiness and enhances focus. </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='/Products'>
                                    <Button> View Here </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> Monsters Energy </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                    src='/public/tord-romundstad-.jpg'
                                    alt='Tord Romundstad Drink'
                                    />
                                <Text> Monster Juiced offers a variety of different flavors, often featuring a blend of exotic fruits and refreshing tastes. Its strong aroma and distinctive flavor make it an enticing choice for those seeking a unique drinking experience. </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='/Products'>
                                    <Button> View Here </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                <Box>
                        <Heading align='center' mt={20}> The Owner Energy </Heading>
                    <Text mt={20} align='center' mr={5} ml={5} mb={5}>
                    The Energy Drink Company, established in 1985, emerged as a result of the vision of Thomas Green. 
                                From its inception, the company committed itself to bringing
                                innovation to the energy drink industry by offering 
                                high-quality products that are not only refreshing but also provide an unparalleled energy boost. 
                                Over the years, the company has experienced rapid growth and has become one of the leaders in the energy drink industry.
                    </Text>
                </Box>
                <Image 
                    src='./shipman-northcutt-owner.jpg'
                    alt='Owner Energy Drink Group'
                />

            </Box>
            <Box>
                <Grid templateColumns='repeat(3, 1fr)' >
                    <GridItem w='100%' h='100%' bg='black' color='white'>
                        <Heading align='center'> 350+ </Heading>
                        <Text align='center'> Countries </Text>
                    </GridItem>

                    <GridItem  w='100%' h='100%' bg='black' color='white'>
                        <Heading align='center' > 121,000+ </Heading>
                        <Text align='center'> Customers in </Text>
                    </GridItem>

                    <GridItem  w='100%' h='100%' bg='black' color='white'>
                        <Heading align='center' > 26,000+ </Heading>
                        <Text align='center'> Inbound Marketing </Text>
                    </GridItem>
                </Grid>
                <Box bgColor='black'color='white' pt={10}>
                    <Heading align='center' mb={10}>
                        Teams
                    </Heading>
                    <Text ml={10} mr={50} align='center' fontSize='xl'>
                        The company is led by an experienced management team committed to advancing the energy drink industry. 
                        Under the leadership of Thomas Green Junior, the management team consists of talented professionals with expertise in marketing, production, finance, and research. 
                        Each team member is highly dedicated to creating innovative products and ensuring the long-term success of the company.
                    </Text>

                </Box>
            
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
                            src='./ali-morshedlou-CEO.jpg'
                            alt='CTO'
                            mb={10}
                
                        />
                    <Stack>
                        <CardBody>
                            
                            <Text position='static'>
                                Name: Ali Morshedlou
                                As: CTO
                                Experience Description: 
                                As CTO, Ali Morshedlou brings over 10 years of experience in software development and technology. 
                                Before joining Energy Drink Group, Ali Morshedlou led the technology team at a leading technology company, 
                                focusing on innovation and implementing cutting-edge technological solutions.
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
                            src='./jakob-rosen-.jpg'
                            alt='COO'
                            mb={10}
                
                        />
                    <Stack>
                        <CardBody>
                            
                            <Text position='static'>
                                Name: Jakob Rosen
                                As: COO
                                Experience Description: 
                                With a strong background in operational management, Jakob Rosen has worked in the Harley Davidson Company sector for over 12 years. 
                                Before joining Energy Drink Group, 
                                Jakob Rosen served as COO at Harley Davidson Company, overseeing operational efficiency and scalability.
                            </Text>
                            </CardBody>
                        </Stack>  
                    </Card>
                    <Box align='center' bgColor='black' color='white'>
                        <Heading pt={10}> Culture </Heading>
                        <Text mt={5} mr={10} ml={10}>
                            We, at Energy Drink Group, embrace a culture that is passionate, innovative, and achievement-oriented. We build our foundation on the following values:
                        </Text>

                        <Heading pt={10}> Courage and Innovation: </Heading> 
                        <Text  mt={5} mr={10} ml={10}>  
                            Courage and Innovation: We encourage our team to think outside the box and take calculated risks. Innovation is at the heart of what we do, and we believe that by maintaining a spirit of courage, we can continue to create revolutionary energy drinks that meet the needs of consumers.
                        </Text>

                        <Heading pt={10}> Commitment to Health and Fitness: </Heading> 
                        <Text  mt={5} mr={10} ml={10}>  
                            We value health and fitness, and our energy drinks are designed to support an active lifestyle. We are committed to providing products that empower our customers to reach their maximum potential.
                        </Text>

                        <Heading pt={10}> Team Collaboration: </Heading> 
                        <Text mt={5} mr={10} ml={10}>  
                            We view every team member as an integral part of our success. In our culture, teamwork, mutual support, and sharing ideas are key to achieving common goals.
                        </Text>

                        <Heading pt={10}> Individual Empowerment: </Heading> 
                        <Text mt={5} mr={10} ml={10}> 
                            We believe that every individual has the power to make a difference. We empower our employees to take initiative, grow, and achieve their personal and professional goals.
                        </Text>

                        <Heading pt={10}> Transparency and Openness: </Heading> 
                        <Text mt={5} mr={10} ml={10}>  
                            We create an environment that supports openness and honest communication. We encourage the exchange of ideas and feedback, building a strong foundation for sustainable growth and continuous innovation.
                        </Text>
                    </Box>

            </Box>
            <Footer />
        </Box>
    );
}