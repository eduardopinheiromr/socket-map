import { BoxProps, Flex, Text } from "@chakra-ui/layout";

type Props = {
  message: TMessage;
} & BoxProps;

export default function Message({ message }: Props) {
  const messageDate = new Date(message.sendedAt).toLocaleTimeString();
  return (
    <Flex
      justify="space-between"
      as="li"
      listStyleType="none"
      bg="#e3e3e3"
      p="4px"
      borderRadius="4px"
      mb="4px"
    >
      <Text>
        <Text fontWeight="bold">{message.user.name}: </Text>
        {message.content}
      </Text>
      <Text mt="auto">{messageDate}</Text>
    </Flex>
  );
}
