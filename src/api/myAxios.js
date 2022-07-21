import axios from "axios";

let myAxios = axios.create({
  headers: {
    "content-type": "application/json",
    apikey: "FcKdtJs202204",
    username: "TeamTest_KwakHoSeon",
  },
});

export default myAxios;
