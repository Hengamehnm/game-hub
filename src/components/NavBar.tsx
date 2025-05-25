import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/2.webp'


const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' borderRadius="full" border='2px solid' margin='.5rem'/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar