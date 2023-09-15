import React from 'react';
import {Heading, Stack, VStack,Text,Link,Button,Image, Box} from '@chakra-ui/react';
import "./Home.css";
import vg from "../../assets/images/homepage.webp";


function Home() {
  return (
    <section className='home'>
        <div className="container">
           <Stack
               direction = {["column","row"]}
               height = "100%"
               justifyContent = {["center","space-between"]}
               alignItems = "center"
               spacing = {['16','56']}
               >
                <VStack width={"full"} alignItems={["center", 'flex-start']}>
                     <Heading children="LearnX" size={"2xl"}/>
                     <Text children="Empowering young minds to know and stand for their rights."/>
                     <Link to="/courses">
                        <Button size={"lg"} colorScheme='purple' >
                            Explore Now!
                        </Button>
                     </Link>
                </VStack>

                <Image boxSize={"md"} src={vg} objectFit={'contain'}/>
           </Stack>

           <Box>
            <Heading></Heading>
           </Box>
        </div>
    </section>
  )
}

export default Home
