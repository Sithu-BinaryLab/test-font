import { baseURL, clientAccessToken } from './../lib/baseURL';
export interface EndUserWaitlistProps{
  email: string;
}

export const register_end_user_waitlist = async (props: EndUserWaitlistProps) => {
  const body ={
    wait_lists: {
      ...props
    }
  }
  const response = await baseURL.post("/v1/wait_lists/register_end_user_waitlist",body,{
    headers:{
      Authorization: `Bearer ${clientAccessToken}`
    }
  });
  return response.data as {message:string};
}