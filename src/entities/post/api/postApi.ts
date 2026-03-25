import { getSupabase } from '@/shared/api';
import type { Post, CreatePostDto, UpdatePostDto } from '../model/types';

export const postApi = {
  getAll: async (): Promise<Post[]> => {
    const { data, error } = await getSupabase()
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data ?? [];
  },

  getById: async (id: string): Promise<Post> => {
    const { data, error } = await getSupabase()
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  create: async (dto: CreatePostDto): Promise<Post> => {
    const { data, error } = await getSupabase()
      .from('posts')
      .insert(dto)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  update: async (id: string, dto: UpdatePostDto): Promise<Post> => {
    const { data, error } = await getSupabase()
      .from('posts')
      .update(dto)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  delete: async (id: string): Promise<void> => {
    const { error } = await getSupabase().from('posts').delete().eq('id', id);
    if (error) throw error;
  },
};
