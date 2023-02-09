import http from "@shirtiny/utils/src/lib/http";

// import logger from "common/logger";

const pickOne = async () => {
  const list = await http.get(
    "https://netease.music-api.shirtiny.cn/cloudsearch?keywords=miku"
  );
};

const musicApi = {
  pickOne,
};

export default musicApi;
