import { Box, Heading, Text, Image, SimpleGrid, Grid, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

async function getData() {
    const seed = Math.random().toString(36).substring(7);
    const res = await fetch(`https://randomuser.me/api/?results=5&seed=${seed}`); // Perbaikan URL
    const data = await res.json();

    return data.results;
}

export default function Teams() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setUsers(data);
        }
        fetchData();
    }, []);

    return (
        <Box>
            <Heading align='center' mt={10} mb={10}>Energy Team</Heading>
            <Text align='center' mr={10} ml={10}> At energy Drink Group, our diverse and skilled team is the driving force behind our creative endeavors. Committed to excellence and innovation, each member brings a unique set of talents to the table. Get to know the faces behind our projects. </Text>
            {users && users.map((user, index) => (
                <Box key={index} mt={4}>
                    <Box> 
                        <SimpleGrid columns={5} minChildWidth={'400px'}>
                            <Grid align='center' mb={10}>
                                <Center>

                                <Image 
                                    src={user.picture.large}
                                    alt={`Foto ${user.name.first} ${user.name.last}`}
                                    borderRadius='full'
                                    boxSize='100px'
                                    />    
                                    </Center>
                                <Text> Nama: {user.name.first} {user.name.last} </Text>
                                <Text> Email: {user.email} </Text>
                                {/* <Text> Skill:  </Text> */}
                            </Grid>
                        </SimpleGrid>
                       
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
