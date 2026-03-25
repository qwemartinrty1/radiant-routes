import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../api/userApi';
import type { CreateUserDto, UpdateUserDto } from './types';

export const userKeys = {
  all: ['users'] as const,
  detail: (id: string) => ['users', id] as const,
};

export const useUsers = () =>
  useQuery({
    queryKey: userKeys.all,
    queryFn: userApi.getAll,
  });

export const useUser = (id: string) =>
  useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userApi.getById(id),
    enabled: !!id,
  });

export const useCreateUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (dto: CreateUserDto) => userApi.create(dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: userKeys.all }),
  });
};

export const useUpdateUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdateUserDto }) =>
      userApi.update(id, dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: userKeys.all }),
  });
};

export const useDeleteUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => userApi.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: userKeys.all }),
  });
};
