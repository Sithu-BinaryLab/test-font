import { baseURL } from "src/lib/baseURL";

export interface userSuggestionProps {
  myAccessToken: string;
}

export const userSuggestion = async (props: userSuggestionProps) => {
 
  const response = await baseURL.get("/v1/users/suggestion",{
    headers: {
      Authorization: `Bearer ${props.myAccessToken}`,
    },
  });
  return response.data as { message: string };
};