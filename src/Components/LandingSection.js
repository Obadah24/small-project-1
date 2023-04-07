import React from 'react'
import { Avatar, Box, Container, Flex, Text } from '@chakra-ui/react'
export default function LandingSection() {
  return (
    <Container  as='section' maxWidth='8xl' bg='blue.800' minH='92vh'>
      <Flex  direction='column' justify='center' alignItems='center' gap='20'>
      <Box w='200px' h='fit-content' marginTop='4rem'>
      <Avatar
        src= {require("../assets/images/person.png")}
        alt='OBADAH ALMAJZOUB'
        objectFit='cover'
        boxSize='150px'
        borderRadius='full'/>
      <Text fontSize='sm' color='white' mt='4px'>OBADAH ALMAJZOUB</Text>
      </Box>
      <Box maxW={{base:'250px', md:'500px'}}>
      <Text fontSize={{base:'2xl', md:'5xl'}} color='white' fontWeight='bold' textAlign='center'>Eg.Obadah Almajzoub React.Js Developer</Text>
      </Box>
      </Flex>
  </Container>
  )
}
