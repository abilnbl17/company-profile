'use client';

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Text } from "@chakra-ui/react";


export default function Footer() {

    return (
        <Box
        bgColor='black'
          align='center'
          paddingBottom={5}
          paddingTop={5}
          position='relative'
          
          >

          <Box>
              <Text color="grey" fontSize='sm' align='right' mr={5}>
              Copyright &copy; 2023 EnergyOurs

              </Text>
        </Box>
            <Box color='white' position='' marginLeft={600}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'> Home </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/About'> About Us </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem> 
                        <BreadcrumbLink href='/Products'> Products </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/Teams'> Teams </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>


        </Box>
    );
}