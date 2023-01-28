import { QueryFunctionContext } from '@tanstack/react-query';
import { baseURL, clientAccessToken } from './../lib/baseURL';

export interface CommunityObj{
  id: 1;
  name: string;
  slug: string;
  image_file_name: string|null;
  image_content_type: string|null;
  image_file_size: string|null;
  image_updated_at: string|null;
  description: string|null;
  collection_id: 1;
  created_at: string;
  updated_at: string;
}

export interface GetCommunitiesProps {
  myAccessToken: string;
}

export interface CommunitiesByCollectionProps {
  myAccessToken: string;
  slug: string;
}

export const get_communities = async (props:QueryFunctionContext<[string,GetCommunitiesProps]>) => {
  console.log({props});
  const [name, params] = props.queryKey;
  if(params.myAccessToken){
    const response = await baseURL.get("/v1/communities",{
      headers:{
        Authorization: `Bearer ${params.myAccessToken}`
      }
    })
    console.log({response});
    return response.data as CommunityObj[];
  }
  return [];
}

export const get_communities_by_collection = async (props:CommunitiesByCollectionProps) => {
  const response = await baseURL.get(`/v1/communities?collection_id=${props.slug}`,{
    headers:{
      Authorization: `Bearer ${props.myAccessToken}`
    }
  })

  return response.data as CommunityObj[];
}