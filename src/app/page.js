// import global from './globals.css'
// import { Providers } from './provider';
// import styles from './page.module.css';

import { Box, Container, Text, Center, Heading, Divider, CardFooter } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Navbar from '/src/app/Navbar';
import SomethingEnergyOur from './Card';
import CultureCard from './Testimonial';
import Footer from './Footer';
import AboutEnergyOur from './Card';

export default function CompanyPage() {

  return (
    <>

      <Navbar />
        <Box>

          <Box>
            <Center>
              <Text fontSize='6xl' position='absolute' marginTop='50%' color='white'> 
                <Container as='B' align='center' >
                  EnergyOurs
                </Container>
              </Text>
              
            </Center>
          </Box>

          <Image
            src='./chris-kendall-.png'
            alt='Chris Kendall'
            width={'100%'}

            /> 
            
            <Box   
            marginBottom='2%'
            position='relative'

            >
            <Container as='B'>
              <Heading fontSize='4xl' ml={10} align='center' >
                Feel The Power
              </Heading>
            </Container>

            <AboutEnergyOur />  

            <Divider marginTop={5} orientation='horizontal' height='10px' />

            <Box marginTop='1%'>
              <Heading fontSize='4xl' mb={2} align='center'> Management Team of Energy Ours </Heading>
              <Text ml={10} mr={50} align='center'>
                The company is led by an experienced management team committed to advancing the energy drink industry. 
                Under the leadership of Thomas Green Junior, the management team consists of talented professionals with expertise in marketing, production, finance, and research. 
                Each team member is highly dedicated to creating innovative products and ensuring the long-term success of the company.
              </Text>

            <Image
            src='./christina-.jpg'
            alt='Company Teams'
            maxWeight='100%'
            marginTop='2%'

            /> 

            <Box>
              <Center>
                <Heading fontSize='4xl' mt={20} mb={18}> Culture of Energy Ours </Heading> 
              </Center>

                <Text align='center' ml={5} mr={5} mt={5} mb={10}>
                  The corporate culture of Energy Drink reflects a spirit of innovation, courage, and perseverance. 
                  Employees are empowered to think creatively, take measured risks, and continually seek ways to enhance products and services. 
                  Collaboration is highly valued, and the inclusive work environment encourages dynamic exchange of ideas. 
                  Moreover, this corporate culture is strongly centered on quality and sustainability, with a commitment to producing energy drinks that not only benefit consumers but are also environmentally friendly.
                </Text>

            </Box>

              <Box>
                  <Heading align='center' mb={8} mt={20}> Testimonials </Heading>

                <CultureCard />

                </Box>
              </Box>
            </Box>

          <Footer />
        
        </Box>
    </>
    ); 
  };