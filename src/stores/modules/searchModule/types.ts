export interface GifData {
  id: string
  embed_url: string;
  images: {
    original: {
      url: string
    }
  }
}

export interface IState {
  searchList: GifData[]
  searchObject: GifData | null;
  searchText: string | null
}
