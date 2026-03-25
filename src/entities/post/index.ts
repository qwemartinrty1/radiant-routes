export { postApi } from './api/postApi';
export type { Post, CreatePostDto, UpdatePostDto } from './model/types';
export {
  usePosts,
  usePost,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
} from './model/hooks';
