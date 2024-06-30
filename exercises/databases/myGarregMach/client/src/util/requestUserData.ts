import { AxiosResponse } from "axios";
import { getAxios } from "./axios";

export async function requestUserData(route: '/staffDetails' | '/studentDetails', gID: string) : Promise<AxiosResponse> {
  return await getAxios().get(route, { params: { gID } });
}