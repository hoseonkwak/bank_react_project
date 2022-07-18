import request from "./request";

const BASE_URL =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup";

const getLogin = async () => {
  // const data = {};
  const result = await request();
  console.log(result);
  return result;
};

export default getLogin;
