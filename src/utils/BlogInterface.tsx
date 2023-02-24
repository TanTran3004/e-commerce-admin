export interface blogState {
  blogs: Blog[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}
interface Blog {
  _id: string;
  title: string;
  description: string;
  category: string;
  numViews: number;
  isLiked: boolean;
  isDisliked: boolean;
  likes: [];
  dislikes: [];
  images: [];
  author: string;
}
export interface BlogTable {
  key: React.Key;
  title: string;
  category: string;
  action: JSX.Element;
}
