import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../types/game.interface";

interface Props {
  selectedPlatform: Platform | null;
  handleOnSelectedPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({
  selectedPlatform,
  handleOnSelectedPlatform,
}: Props) => {
  const { data: parrent_platforms, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>

        <MenuItem hidden={selectedPlatform == null} color={"red"} onClick={() => handleOnSelectedPlatform(null)}>CLEAR</MenuItem>
        {parrent_platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handleOnSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
