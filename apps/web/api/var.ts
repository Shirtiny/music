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
  path: string;
  prefix: string;
}

interface IApiRoutes {
  BVCSP_V1: IApiRoute;
}

const API_ROUTES: IApiRoutes = {
  BVCSP_V1: {
    path: "/bvcsp/v1",
    prefix: "",
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
  bvscpV1: () => getApiURL("BVCSP_V1"),
};

export const setBvcspV1ApiPrefix = (prefix?: string) => {
  apiUrls.setApiPrefix("BVCSP_V1", prefix);
};

const apiVar = {
  apiUrls,
};

export default apiVar;
