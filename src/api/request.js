// import axios from "axios";
import myAxios from "./myAxios";

// api 받기
const request = async (url, param) => {
  let data = JSON.stringify({
    email: "hoseon2864@naver.com",
    password: "test1234",
  });
  let config = {
    method: "post",
    url: url,
    data: data,
  };
  try {
    const response = await myAxios(config);
    // console.log(response);
    if (response.status === 200) {
      const result = await response;
      console.log(result);
      return result;
    }
  } catch (e) {
    console.log(e);
  }
};

export default request;
