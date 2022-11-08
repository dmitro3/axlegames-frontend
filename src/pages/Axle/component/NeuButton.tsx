import { Button } from "@chakra-ui/react";
import { theme } from "../../../config/theme.config";
interface Props {
  shadow: string;
  bg: string;
  onClick: Function;
  label: string;
  width?: string;
}

const NeuButton = (props: Props) => {
  const normalEffect = `4px 4px 8px ${theme.bgColor}, -2px -2px 4px ${props.shadow}`;
  const pushedEffect = `2px 2px 4px ${props.shadow}, -4px -4px 8px ${theme.bgColor}`;

  return (
    <Button
      boxShadow={normalEffect}
      width={props.width || "auto"}
      bg={props.bg}
      color={theme.secondaryTextColor}
      onClick={() => props.onClick()}
      _hover={{
        boxShadow: pushedEffect,
        transform: `scale(0.95)`,
        transition: "200ms all ",
      }}
      _active={{
        boxShadow: pushedEffect,
        transform: `scale(0.95)`,
        transition: "200ms all ",
      }}
    >
      {props.label}
    </Button>
  );
};

export default NeuButton;
