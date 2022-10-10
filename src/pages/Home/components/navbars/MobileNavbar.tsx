import { Box, Flex, Button, Image } from "@chakra-ui/react";
import { theme } from "../../../../config/theme.config";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai/index";
import { useState } from "react";
import Logo from "../../../../assets/home/logos/logo.png";
import IsLoggedIn from "../../../../config/isLoggedIn";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const signout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Box
      width={"100%"}
      display={{ base: "flex", lg: "none" }}
      flexDirection="column"
      fontFamily={"quicksand"}
      boxShadow="dark-lg"
    >
      <Box
        display={"flex"}
        color={theme.highLightColor}
        fontWeight="bold"
        fontSize={"3xl"}
        width="100%"
        justifyContent={"space-between"}
        px={{ base: "8" }}
        py={{ base: "4" }}
        alignItems={"center"}
      >
        <Flex alignItems={"center"} columnGap=".5rem">
          <Image maxH={"6vh"} src={Logo}></Image>
        </Flex>
        <Box
          onClick={() => setOpen(!open)}
          _hover={{
            transform: "scale(1.05)",
            transition: "200ms all ease-in",
          }}
        >
          {open ? (
            <AiOutlineClose
              style={{
                transform: "scale(1.05)",
                transition: "100ms all ease-in",
              }}
              color={theme.highLightColor}
              size={32}
            />
          ) : (
            <AiOutlineMenu
              style={{
                transform: "scale(1.05)",
                transition: "100ms all ease-in",
              }}
              color={theme.highLightColor}
              size={32}
            />
          )}
        </Box>
      </Box>

      <Box
        width={"100%"}
        transition={"all ease 500ms"}
        opacity={open ? 1 : 0}
        fontFamily={"quicksand"}
        fontWeight="bold"
        color={theme.highLightColor}
        visibility={open ? "visible" : "hidden"}
        height={open ? "90vh" : "0"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
        boxShadow="dark-lg"
      >
        <Flex
          bg={theme.fgColor}
          m={"8"}
          width={"80%"}
          p={"8"}
          borderRadius="2xl"
          direction={"column"}
          alignItems="flex-start"
          justifyContent="center"
          rowGap={"1rem"}
        >
          <Button
            variant={"ghost"}
            _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
          >
            Home
          </Button>
          <Button
            variant={"ghost"}
            _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
          >
            Rewards
          </Button>
          <Button
            variant={"ghost"}
            _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
          >
            Referral
          </Button>
          <Button
            variant={"ghost"}
            _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
          >
            Profile
          </Button>
          <IsLoggedIn>
            <Button
              onClick={signout}
              variant={"ghost"}
              _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
            >
              Logout
            </Button>
          </IsLoggedIn>
        </Flex>

        <Flex
          bg={theme.fgColor}
          width={"80%"}
          p={"8"}
          m={"8"}
          borderRadius="2xl"
          direction={"column"}
          alignItems="flex-start"
          justifyContent="center"
          rowGap={"1rem"}
        >
          <Button
            variant={"ghost"}
            _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
          >
            AxleVerse
          </Button>
          <Button
            variant={"ghost"}
            _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
          >
            Market Place
          </Button>
          <a
            href="https://axlegames.s3.ap-south-1.amazonaws.com/Axlegames.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"ghost"}
              _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
            >
              Pitch-Deck
            </Button>
          </a>
          <Button
            variant={"ghost"}
            _hover={{ color: theme.bgColor, bg: theme.highLightColor }}
          >
            About Us
          </Button>
        </Flex>
        <Flex></Flex>
      </Box>
    </Box>
  );
};

export default MobileNavbar;
