import http from "@shirtiny/utils/src/lib/http";
import logger from "common/logger";
import { apiUrls } from "./var";

const url = async (...ids: string[]) => {
  const res = await http.get(
    `${apiUrls.netease()}/song/url/v1?id=${ids.join(
      ","
    )}&level=standard`
  );
  logger.log(res);
  if (Array.isArray(res?.data)) {
    return res.data.map((d: any) => d.url);
  }
};

const pickOne = async () => {
  const res = await http.get(
    `${apiUrls.netease()}/cloudsearch?keywords=miku`
  );
  logger.log(res);
  if (res?.result) {
    return res.result.songs.filter((s: any) => !s.fee)[1];
  }
};

const songApi = {
  url,
  pickOne,
};

export default songApi;
