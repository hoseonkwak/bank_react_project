import request from "./request";

const BASE_URL =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login";

const getLogin = async (param) => {
  console.log(param);
  const result = await request(BASE_URL, param);
  // console.log(result);
  return result;
};

export default getLogin;
