import { Box, Flex, Text } from "@chakra-ui/layout";
import Message from "./Message";
import useSocket from "../context/SocketContext";
import UsersOnline from "./UsersOnline";
import { useState } from "react";
import { user } from "../@initialStates/data";

const initialState = {
  currentUser: user,
  user,
  history: [],
};

export default function MessageDisplay() {
  const { users, history } = useSocket();

  const [privateChat, setPrivateChat] = useState<TPrivateChat>(initialState);
  const [privateChatActive, setPrivateChatActive] = useState(false);

  const handlePrivateChat = (user) => {
    setPrivateChatActive(true);
    setPrivateChat({ ...privateChat, user });
    console.log(user);
  };

  return (
    <Flex my="10px">
      <UsersOnline
        isPrivateChatActive={privateChatActive}
        backToGlobalChat={() => setPrivateChatActive(false)}
        users={users}
        onSelectUser={handlePrivateChat}
      />

      {privateChatActive ? (
        <Box
          p="10px"
          border="1px solid lightgreen"
          w="full"
          bg="black"
          borderRightRadius="8px"
        >
          <Box as="ul" h="500" w="full">
            <Box as="li" listStyleType="none">
              <Text color="white">
                Private chat with{" "}
                <Text as="span" fontWeight="bold" color="lightgreen">
                  {privateChat.user.name}
                </Text>
              </Text>
            </Box>
            {history.map((message, key) => (
              <Message key={key} message={message} />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          p="10px"
          border="1px solid lightgray"
          w="full"
          borderRightRadius="8px"
        >
          <Box as="ul" h="500" w="full">
            {history.map((message, key) => (
              <Message key={key} message={message} />
            ))}
          </Box>
        </Box>
      )}
    </Flex>
  );
}
