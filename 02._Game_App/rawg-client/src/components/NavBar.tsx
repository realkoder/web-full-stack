import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack spacing="24px">
        <Image src={logo} boxSize={"60px"} />
        <Text>NavBar</Text>
        <ColorModeSwitch/>
      </HStack>
    </div>
  );
};

export default NavBar;
