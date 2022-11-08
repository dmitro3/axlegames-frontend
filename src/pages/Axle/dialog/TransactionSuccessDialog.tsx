import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Success from "../../../assets/gamein/checked.png";
import NeuButton from "../component/NeuButton";

const TransactionSuccessDialog = (props: any) => {
  return (
    <Box display={"flex"} py={16} px={0} flexDirection="column" rowGap={"1rem"}>
      <Flex
        direction={"column"}
        justifyContent="center"
        rowGap={"1rem"}
        alignItems={"center"}
      >
        <Image width={"50%"} src={Success} />
        <Text fontSize={"xl"}>Congrats, you purchased {props.fee}</Text>
        <a
          href={`https://testnet.bscscan.com/tx/` + props.hash}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            cursor={"pointer"}
            transition={`100ms all ease-in`}
            textAlign="center"
          >
            <Text as="u" textUnderlineOffset={"unset"}>
              check transaction on blockchain
            </Text>
          </Box>
        </a>
      </Flex>
      <Flex justifyContent={"center"}>
        <NeuButton
          bg={"#40464F"}
          shadow={"#535A65"}
          onClick={props.close}
          label="close"
        ></NeuButton>
      </Flex>
    </Box>
  );
};
export default TransactionSuccessDialog;
