import { Box } from "@chakra-ui/layout";

type Props = {
  message: TMessage;
};

export default function Message({ message }: Props) {
  return (
    <Box as="li" listStyleType="none">
      <Box fontWeight="strong">{message.user}</Box>: &nbsp;{message.message}
    </Box>
  );
}
