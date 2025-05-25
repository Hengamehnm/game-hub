import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/2.webp'
import ColorModeSwitch from './ColorModeSwitch';


const NavBar = () => {
  return (
    <HStack justifyContent='space-between' alignItems='center' padding='10px'>
        <Image src={logo} boxSize='60px' borderRadius="full" border='2px solid'/>
            <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar