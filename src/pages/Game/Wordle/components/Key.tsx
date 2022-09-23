import { Box } from "@chakra-ui/react";
import { theme } from "../../../../config/theme.config";

const Key = (props: any) => {
  const shadow = `0px -4px 0px 4px ${theme.fgColor}, 0px 0px 0px 4px ${theme.secondaryColor}`;
  const highLightShadow = `0px 0px 0px 0px ${theme.bgColor}, 0px 0px 0px 0px ${theme.fgColor}`;

  return (
    <Box
      onClick={() => props.onKeyPress(props.letter)}
      display={"flex"}
      fontSize={{ base: "12" }}
      fontWeight="bolder"
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
      height={{ base: "5", sm: "8", md: "12" }}
      width={{ base: "5", sm: "8", md: "12" }}
      bg={theme.fgColor}
      borderRadius={{ base: props.gotHit ? "lg" : "sm" }}
      border={props.gotHit ? `3px solid ${theme.secondaryColor}` : "none"}
      color={theme.highLightColor}
      boxShadow={props.gotHit ? highLightShadow : shadow}
      _active={{
        boxShadow: highLightShadow,
        border: `3px solid ${theme.secondaryColor}`,
        borderRadius: "lg",
      }}
    >
      {props.letter}
    </Box>
  );
};

export default Key;
