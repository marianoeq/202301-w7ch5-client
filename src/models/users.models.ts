export type UserStructure = {
  name: string;
  email: string;
  password?: string;
  friends?: UserStructure[];
  enemies?: UserStructure[];
  token?: string;
};

export type ServerResp = {
  results: UserStructure[];
};
