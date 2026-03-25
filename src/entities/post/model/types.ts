export interface Post {
  id: string;
  title: string;
  content: string;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
  author_id?: string;
}

export interface UpdatePostDto {
  title?: string;
  content?: string;
}
