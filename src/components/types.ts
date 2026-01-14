export type ImagesURLs = {
  small: string;
  regular: string;
};

export type Images = {
  id: string;
  urls: ImagesURLs;
  slug: string;
  alt_description: string;
  created_at: string;
  likes: number;
};
