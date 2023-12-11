"use client";
import { Box, SimpleGrid, Text, Card, Heading, CardBody, Image, CardHeader, CardFooter, Link, Button, Divider } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CultureCard from "../Testimonial";




export default function products() {

    return (
        <Box>
            <Navbar />
                
            <Heading align='center' mt={10} mb={10}> Products energy </Heading>

            <SimpleGrid spacing={4} mb={10} templateColumns='repeat(auto-fill, minmax(295px, 1fr))'>
                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> Riot Mango </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                src='./tyler-nix-energy-drinks.jpg'
                                alt='Tyler Nix Drink'
                                />
                                <Text> The flavor can provide a refreshing and sweet touch to the beverage </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $5
                                </Text>

                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href='#'>
                                    <Button> Buy </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> Nocco Orange </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                    src='./filip-baotic-drink.jpg'
                                    alt='Filip Baotic Drink'
                                />
                                <Text> NOCCO Blood Orange, as the name suggests, has the flavor of blood orange. Blood orange is a fruit rich in antioxidants and has a distinctive and refreshing taste. </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $8
                                </Text>

                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href='#'>
                                    <Button> Buy </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> RedBull </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                    src='./jan-kopriva-drink.jpg'
                                    alt='Jan Kopriva'
                                />
                                <Text> Red Bull contains a combination of active ingredients such as caffeine, taurine, and vitamin B that work together to boost energy levels and alertness. Caffeine, as a stimulant, helps reduce drowsiness and enhances focus. </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $10
                                </Text>

                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href='#'>
                                    <Button> Buy </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size={'md'}> Monsters Energy </Heading>
                            </CardHeader>
                            <CardBody>
                                <Image 
                                    src='./tord-romundstad-.jpg'
                                    alt='Tord Romundstad Drink'
                                    />
                                <Text> Monster Juiced offers a variety of different flavors, often featuring a blend of exotic fruits and refreshing tastes. Its strong aroma and distinctive flavor make it an enticing choice for those seeking a unique drinking experience. </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $13
                                </Text>

                            </CardBody>
                                    <Divider />
                            <CardFooter>
                                <Link href='#'>
                                    <Button> Buy </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                    <Heading mb={10} align='center'> Testimonials </Heading>
                    <CultureCard />
            <Footer />
        </Box>
    );
}