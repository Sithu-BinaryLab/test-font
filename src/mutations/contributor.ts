import { baseURL, clientAccessToken } from './../lib/baseURL';
export interface ContributorWaitlistProps{
  email: string;
  role_id: string | number;
  description: string;
}

export const register_contributor_waitlist = async (props:ContributorWaitlistProps) => {
  const body ={
    wait_lists: {
      ...props
    }
  }
  const response = await baseURL.post("/v1/wait_lists/register_contributor_waitlist",body,{
    headers:{
      Authorization: `Bearer ${clientAccessToken}`
    }
  });
  return response.data as {message:string};
}