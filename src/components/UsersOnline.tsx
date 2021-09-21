import { Box } from "@chakra-ui/layout";
import React from "react";

type Props = {
  users: TUser[];
};

export default function UsersOnline({ users }: Props) {
  console.log("pq isso não tá indo mano", users);
  console.log({ users });
  return (
    <Box as="ul">
      {/* {users?.map((user, key) => (
        <Box as="li" listStyleType="none" key={key}>
          {user.name}
        </Box>
      ))} */}
    </Box>
  );
}
