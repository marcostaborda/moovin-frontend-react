export interface Pagination {
  total: number,
  pages: number,
  page: number;
  limit: number;
}

export interface PostItem {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export interface PostsData {
  meta: {
    pagination: Pagination;
  },
  data: PostItem[];
}