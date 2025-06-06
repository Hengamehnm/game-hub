import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";



interface Props{
  onSelectPlatfrom : (platform :Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({onSelectPlatfrom, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms();

    if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
      {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem onClick={()=>onSelectPlatfrom(platform)} key={platform.id}>{platform.name}</MenuItem>)}   
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
