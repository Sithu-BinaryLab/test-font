import { baseURL, clientAccessToken } from './../lib/baseURL';
export interface VerifyContributorProps{
  invitation_code: string;
}

export const verify_waitlist = async (props:VerifyContributorProps) => {
  const body ={
    wait_lists: {
      ...props
    }
  }
  const response = await baseURL.post("/v1/wait_lists/verify_waitlist",body,{
    headers:{
      Authorization: `Bearer ${clientAccessToken}`
    }
  });
  return response.data as {message:string};
}