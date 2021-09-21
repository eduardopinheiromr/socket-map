type TUser = {
  id: string;
  name: string;
  handShakeDate: string;
  socket_id: string;
};

type TUsers = TUser[];

type TMessage = {
  user: TUser;
  message: string;
};

type THistory = TMessage[];

type TData = {
  message: string;
  user: TUser;
  history: THistory;
  users: TUser[];
};
