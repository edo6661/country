import axios, { InternalAxiosRequestConfig } from "axios";
import { defaultAbortSignal } from "@/utils/defaultAbortSignal";

// const { signal, cleanup } = defaultAbortSignal();

// export interface AxiosRequestConfig extends InternalAxiosRequestConfig {
//   customCleanup?: () => void;
// }

const instance = axios.create({
  baseURL: "https://restcountries.com/",
  method: "get",
  withCredentials: false,
  responseType: "json",
  // decompress: true,
  // timeout: 10000,
  // timeoutErrorMessage:
  //   "Request timed out because it took too long to complete. Please try again. If this error persists, please contact support. Thank you.",
  // signal: signal,
});

// instance.interceptors.request.use((config: AxiosRequestConfig) => {
//   config.customCleanup = cleanup;
//   return config;
// });

// instance.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.config && err.config.customCleanup) {
//       err.config.customCleanup();
//     }
//     return Promise.reject(err);
//   }
// );

export default instance;
