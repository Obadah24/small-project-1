import React, {useEffect, useState} from 'react'
import { Container, Flex, Box, Link} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faCcMastercard, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import {Link as Linked} from "react-scroll";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      const scrollDifference = Math.abs(scrollY - lastScrollY)
      
      if (direction !== scrollDirection && scrollDifference > 10) {
        setScrollDirection(direction)
      } 
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}


export default function Header() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const scrollDirection = useScrollDirection()
  return (
    <Container 
    scrollBehavior='smooth'
    as='nav'
    maxWidth='8xl'
    bg='black'
    h='52.55px'
    color='white'
    position='sticky'
    top='0'
    transform={scrollDirection === 'down' ? 'translateY(-52.55px)' : ''}
    zIndex='100'
    transition='0.3s'
    duration='200ms'
    >
      <Flex minWidth='max-content' alignItems='center' justifyContent='space-around'>
        <Flex p='4' w='fit-content'  gap='4'  >
        <Link href='https://google.com' isExternal>
          <FontAwesomeIcon icon={faEnvelope}  size='xl'/>
        </Link>
        <Link href='https://github.com/Obadah24' isExternal>
        <FontAwesomeIcon  icon={faGithub}  size='xl' />
        </Link>
        <Link href='https://linkedin.com' isExternal>
        <FontAwesomeIcon  icon={faLinkedinIn}  size='xl' />
        </Link>
        <Link href='https://ccMastercard.com' isExternal>
        <FontAwesomeIcon  icon={faCcMastercard}  size='xl' />
        </Link>
        <Link href='https://faStackOverflow.com' isExternal>
        <FontAwesomeIcon  icon={faStackOverflow}  size='xl' />
        </Link>
        </Flex>
        <Box display='flex' minWidth='150px' justifyContent='space-between' alignItems='center'>
          <Linked to='projects-section' spy={true} smooth={true} offset={0} duration={1000}  style={{cursor:'pointer'}} onClick={handleClick}>Projects</Linked>
          <Linked to='contact-me' spy={true} smooth={true} offset={0} duration={1000}  style={{cursor:'pointer'}} onClick={handleClick}>Contact Me</Linked>
        </Box>
      </Flex>
    </Container>
        ) 
        }
