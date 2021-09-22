import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

type Props = {
  users?: TUser[];
  onSelectUser?: (user: TUser) => void;
  isPrivateChatActive: boolean;
  backToGlobalChat: () => void;
};

export default function UsersOnline({
  users,
  onSelectUser,
  isPrivateChatActive,
  backToGlobalChat,
}: Props) {
  return (
    <Box
      as="ul"
      bg="lightgray"
      w="300px"
      p="8px"
      maxH="522px"
      borderLeftRadius="8px"
      overflowY="scroll"
    >
      {isPrivateChatActive && (
        <Flex
          as="li"
          listStyleType="none"
          align="center"
          justify="center"
          cursor="pointer"
          onClick={backToGlobalChat}
          p="4px"
          borderRadius="4px"
          color="white"
          fontWeight="bold"
          bg="purple"
          _hover={{ filter: "brightness(115%)" }}
        >
          Back to global chat
        </Flex>
      )}
      {users?.map((user, key) => (
        <Flex
          as="li"
          listStyleType="none"
          key={key}
          align="center"
          cursor="pointer"
          onClick={() => onSelectUser(user)}
          p="4px"
          borderRadius="4px"
          _hover={{ filter: "brightness(115%)", bg: "lightgray" }}
          title={"Go to private room with " + user.name}
        >
          <Box
            minH="20px"
            minW="20px"
            borderRadius="100%"
            bg="lightgreen"
            mr="10px"
          />{" "}
          {user.name}
        </Flex>
      ))}
    </Box>
  );
}
