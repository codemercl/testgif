export interface TypesUser {
  avatar_url: string
  display_name: string
  username: string
  profile_url: string
}

interface TypesUrl {
  url: string
}

interface TypesImages {
  original: TypesUrl
}

export interface CartData {
  id: string
  title: string
  embed_url: string
  images: TypesImages
  username: string
  user: TypesUser | null;
}

export interface IState {
  getById: CartData | null
  paramId: string | null
}
