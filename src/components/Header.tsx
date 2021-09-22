import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import useSocket from "../context/SocketContext";

export default function Header() {
  const { user, message } = useSocket();

  const loggedAt = new Date(user?.handShakeDate);

  const timeString = `${loggedAt.toLocaleTimeString()} - ${loggedAt.toLocaleDateString()}`;
  return (
    <>
      <Heading as="h1">{message}</Heading>
      <Flex justify="space-between">
        <Flex align="center">
          <Box
            h="20px"
            minW="20px"
            borderRadius="100%"
            bg="lightgreen"
            mr="10px"
          />
          <Heading as="h5" fontSize="20px">
            Nickname: {user?.name}
          </Heading>
        </Flex>

        <Text>
          Logged at:{" "}
          <Text as="span" color="purple">
            {timeString}
          </Text>
        </Text>
      </Flex>
    </>
  );
}
