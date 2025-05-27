import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/2.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}: Props) => {
  return (
    <HStack alignItems='center'>
        <Image src={logo} boxSize='60px' borderRadius="full" border='2px solid'/>
          <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar