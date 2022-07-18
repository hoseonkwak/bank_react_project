import axios from "axios";

let myAxios = axios.create({
  headers: {
    "content-type": "application/json",
    apikey: "FcKdtJs202204",
    username: "STFE4_10_KwakHoSeon",
  },
});

export default myAxios;
