import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postApi } from '../api/postApi';
import type { CreatePostDto, UpdatePostDto } from './types';

export const postKeys = {
  all: ['posts'] as const,
  detail: (id: string) => ['posts', id] as const,
};

export const usePosts = () =>
  useQuery({
    queryKey: postKeys.all,
    queryFn: postApi.getAll,
  });

export const usePost = (id: string) =>
  useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => postApi.getById(id),
    enabled: !!id,
  });

export const useCreatePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (dto: CreatePostDto) => postApi.create(dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: postKeys.all }),
  });
};

export const useUpdatePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdatePostDto }) =>
      postApi.update(id, dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: postKeys.all }),
  });
};

export const useDeletePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => postApi.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: postKeys.all }),
  });
};
