import { baseURL, clientAccessToken, clientSecretToken } from './../lib/baseURL';
export interface RegisterWithEmailProps{
  username:string;
  email:string;
  password:string;
  agreement?:boolean;
  reason?:string;
  locale?: string;
}

export interface RegisterWithPhoneProps{
  phone: string;
  username: string;
  password: string;
  password_confirmation: string;
}

export interface VerifyOtpProps{
  user_id: number;
  confirmed_otp_code: string;
}

export interface VerifyOtpReponseObj{
  message: string;
  access_token: string;
}

export interface LoginProps{
  username: string;
  password: string;
}

export interface RegisterReponseObj{
  email: string,
  account_id: number,
  id: number,
  approved: boolean,
}


export const register_with_email = async (props:RegisterWithEmailProps) => {
  const body ={
    ...props,
    agreement: props.agreement ? props.agreement : "true",
    reason: props.reason ? props.reason : `Register new account for ${props.username} with email`,
    locale: props.locale ? props.locale : "en"
  }
  let error:any = null;
  try {
    const response = await baseURL.post("/v1/register_with_email",body,{
      headers:{
        Authorization: `Bearer ${clientAccessToken}`
      }
    });
    console.log({response});
    if(response.status == 200 && response.data?.data?.email){
      return ({
        email: response.data?.data?.email,
        account_id: response.data?.data?.account_id,
        id: response.data?.data?.id,
        approved: response.data?.data?.approved,
      }) as RegisterReponseObj
    }

  } catch (axiosError:any) {
    console.log(axiosError);
    if(axiosError.response?.status == 422){
      error = {
        status: 422,
        ...axiosError
      }
    }else if(axiosError.response?.status == 500){
      error = {
        status: 500,
        ...axiosError
      }
    }else{
      error = {
        status: null,
        error: "unknown"
      }
    }
  }
  if(error){
    throw error;
  }else{
    throw {
      status: null,
      error: "unknown"
    }
  }
}

export const register_with_phone = async (props:RegisterWithPhoneProps) => {
  const body ={
    ...props
  }
  const response = await baseURL.post("/v1/register_with_phone",body,{
    headers:{
      Authorization: `Bearer ${clientAccessToken}`
    }
  });
  return response.data as {message:string};
}

export const verify_otp = async (props:VerifyOtpProps) => {
  const body ={
    ...props
  }
  
  let error = null; 
  try {
    const response = await baseURL.put("/v1/verify_otp",body,{
      headers:{
        Authorization: `Bearer ${clientAccessToken}`
      }
    });
    if(response.status == 200 && response.data?.access_token){
      return ({
        message: response.data?.message,
        access_token: response.data?.access_token,
      }) as VerifyOtpReponseObj
    }
  } catch (axiosError:any) {
    error = {
      status: 500,
      ...axiosError
    }
  }
}

export const login = async (props:LoginProps) => {
  const body ={
    ...props,
    grant_type: "password",
    client_id: clientAccessToken,
    client_secret: clientSecretToken,
    redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
    scope: "read write follow push",
  }
  const response = await baseURL.post("/v1/verify_otp",body,{
    headers:{
      Authorization: `Bearer ${clientAccessToken}`
    }
  });
  return response.data as {message:string};
}
