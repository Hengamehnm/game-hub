import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/2.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';


const NavBar = () => {
  return (
    <HStack alignItems='center'>
        <Image src={logo} boxSize='60px' borderRadius="full" border='2px solid'/>
          <SearchInput />
            <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar