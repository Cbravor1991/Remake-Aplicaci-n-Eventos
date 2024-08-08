import { SnackbarUtilities, getValidationError } from "@/utilities";
import axios, { AxiosRequestConfig } from "axios";

export const AxiosInterceptor= ()=> {
    const updateHeader = (request: AxiosRequestConfig)=>{
        const token = "1234";
        const newHeader = {
            Authorization: token,
            "Content-Type": "aplication/json",
        };
        request.headers= newHeader;
        return request;
    };


    axios.interceptors.request.use((request: any) => {
        if (request.url?.includes("assets")) return request;
        return updateHeader(request);
    }
    );

    axios.interceptors.response.use(
        (response)=>{
          console.log("response", response);
          return response;
        },
        (error) =>{
            SnackbarUtilities.error(getValidationError(error.code));
            return Promise.reject(error);
        }
    );
};