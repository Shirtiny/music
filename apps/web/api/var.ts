/*
 * @Author: Shirtiny
 * @Date: 2021-06-29 10:02:46
 * @LastEditTime: 2021-12-22 14:54:51
 * @Description:
 */

export interface IResData {
  code: number;
  data?: any;
  msg: string;
}

interface IApiRoute {
  prefix: string;
  path: string;
}

interface IApiRoutes {
  netease: IApiRoute;
  manager: IApiRoute;
}

const API_ROUTES: IApiRoutes = {
  netease: {
    prefix: "https://netease.music-api.anror.com",
    path: "",
  },
  manager: {
    prefix: "https://manager.anror.com",
    path: "/ap1/v1",
  },
};

const getApiURL = (targetApiRoute: keyof IApiRoutes): string => {
  const route = API_ROUTES[targetApiRoute];
  return route.prefix + route.path;
};

const setApiPrefix = (targetApiRoute: keyof IApiRoutes, prefix?: string) => {
  const route = API_ROUTES[targetApiRoute];
  route.prefix = prefix || "";
  return getApiURL(targetApiRoute);
};

export const apiUrls = {
  setApiPrefix,
  getApiURL,
  manager: () => getApiURL("manager"),
  netease: () => getApiURL("netease"),
};

const apiVar = {
  apiUrls,
};

export default apiVar;
