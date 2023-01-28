import { baseURL } from "src/lib/baseURL";

export interface AccountFollowProps {
  myAccessToken: string;
  account_id: string|number;
}

export const followAccount = async (props: AccountFollowProps) => {
 
  const response = await baseURL.post(`/api/v1/accounts/${props.account_id}/follow`,{
    headers: {
      Authorization: `Bearer ${props.myAccessToken}`,
    },
  });
  return response.data as { message: string };
};

export const unfollowAccount = async (props: AccountFollowProps) => {
 
  const response = await baseURL.post(`/api/v1/accounts/${props.account_id}/unfollow`,{
    headers: {
      Authorization: `Bearer ${props.myAccessToken}`,
    },
  });
  return response.data as { message: string };
};
