import axios from "axios";
import apiHost from "../config/index";

export const fetchAllData = async () => {
  const res = await axios({
    url: `${apiHost}/data`,
    method: "get"
  });
  return res.data;
};
