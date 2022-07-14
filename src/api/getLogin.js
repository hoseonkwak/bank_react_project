import request from "./request";

const BASE_URL =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login";

const getLogin = async () => {
  const result = await request();
  console.log(result);
  return result;
};

export default getLogin;
