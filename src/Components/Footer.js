import React from 'react'
import { Container, Flex} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <Container as='footer' maxWidth='8xl' bg='black' h={{base:'8vh', md:'8vh', lg:'8vh'}} color='white'>
      <Flex justifyContent='center' alignItems='center' p='8px' gap={1}>
      Copyright {<FontAwesomeIcon icon={faCopyright}/>} 2023
      </Flex>
    </Container>
  )
}

