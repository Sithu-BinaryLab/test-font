import { baseURL, clientAccessToken } from './../lib/baseURL';

export interface ContributorObj{
    id: string;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}
export const get_contributor_roles = async () => {
  const response = await baseURL.get("/v1/wait_lists/get_contributor_roles",{
    headers:{
      Authorization: `Bearer ${clientAccessToken}`
    }
  })

  return response.data as ContributorObj[];
}