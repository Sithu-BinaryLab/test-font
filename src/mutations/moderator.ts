import { baseURL, clientAccessToken } from './../lib/baseURL';
export interface ModeratorWaitlistProps{
  email: string;
  description: string;
}

export const register_moderator_waitlist = async (props:ModeratorWaitlistProps) => {
  const body ={
    wait_lists: {
      ...props
    }
  }
  const response = await baseURL.post("/v1/wait_lists/register_moderator_waitlist",body,{
    headers:{
      Authorization: `Bearer ${clientAccessToken}`
    }
  });
  return response.data as {message:string};
}