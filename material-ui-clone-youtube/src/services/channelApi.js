import axios from "axios";

export function channelApi(idChannel) {
  return axios.create({
    baseURL:
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=" +
      idChannel +
      "&key=AIzaSyDi4JkjcD1B42eaof_0S5Bh8s6um4U9xQI",
  });
}
