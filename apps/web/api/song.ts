import http from "@shirtiny/utils/src/lib/http";
import logger from "common/logger";
import { apiUrls } from "./var";

const url = async (...ids: string[]) => {
  // return ids.map(
  //   (id) => `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  // );
  const res = await http.get(
    `${apiUrls.netease()}/song/url/v1?id=${ids.join(",")}&level=standard`
  );
  logger.log(res);
  if (Array.isArray(res?.data)) {
    return res.data.map((d: any) => String(d.url).replace("http", "https"));
  }
};

const pickOne = async () => {
  const res = await http.get(`${apiUrls.netease()}/cloudsearch?keywords=miku`);
  logger.log(res);
  if (res?.result) {
    const list = res.result.songs.filter((s: any) => !s.fee);
    logger.debug("free list: ", list);
    return list[1];
  }
};

const songApi = {
  url,
  pickOne,
};

export default songApi;
