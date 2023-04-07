import React from 'react'
import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import Card from './Card';
export default function ProjectSection() {
  const projects = [ 
    { 
      title: "React Space", 
      description: 
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
      getImageSrc: () => require("../assets/images/photo1.jpg"), 
    }, 
    { 
      title: "React Infinite Scroll", 
      description: 
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️", 
      getImageSrc: () => require("../assets/images/photo2.jpg"), 
    }, 
    { 
      title: "Photo Gallery", 
      description: 
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
      getImageSrc: () => require("../assets/images/photo3.jpg"), 
    }, 
    { 
      title: "Event planner", 
      description: 
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
      getImageSrc: () => require("../assets/images/photo4.jpg"), 
    }, 
  ];
  return (
    <Container  id='projects-section' as='section' maxWidth='8xl' bg='green.800' minH='140vh'>
    <Container  as='div' maxWidth='6xl' bg='green.800' minH='140vh'>
      <Heading as="h1" id="projects-section" color='white' pt='5px'> 
        Featured Projects 
      </Heading> 
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg:2 }}
      p='20px'
      textAlign='center'
      rounded='xl'
      minChildWidth={{sm:'250px', md:'300px', lg:'350px'}}
      bg='transparent'
      spacingX='4'
      spacingY='8'
    >
        {projects.map((project) => ( 
          <Card 
            key={project.title} 
            title={project.title} 
            description={project.description} 
            imageSrc={project.getImageSrc()} 
          /> 
        ))} 
  </SimpleGrid>
      </Container>
    </Container>
    )
  }
