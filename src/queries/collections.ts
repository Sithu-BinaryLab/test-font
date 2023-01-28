import { baseURL, clientAccessToken } from './../lib/baseURL';

export interface CollectionObj{
  id: number;
  name: string;
  slug: string;
  image_file_name: string|null;
  image_content_type: string|null;
  image_file_size: string|null;
  image_updated_at: string|null;
  created_at: string;
  updated_at: string;
}

export interface GetCollectionsProps{
  myAccessToken:string
}

export const get_collections = async (props:GetCollectionsProps) => {
  const response = await baseURL.get("/v1/collections",{
    headers:{
      Authorization: `Bearer ${props.myAccessToken}`
    }
  })

  return response.data as CollectionObj[];
}