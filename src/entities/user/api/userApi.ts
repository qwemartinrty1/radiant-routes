import { getSupabase } from '@/shared/api';
import type { User, CreateUserDto, UpdateUserDto } from '../model/types';

export const userApi = {
  getAll: async (): Promise<User[]> => {
    const { data, error } = await getSupabase()
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data ?? [];
  },

  getById: async (id: string): Promise<User> => {
    const { data, error } = await getSupabase()
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  create: async (dto: CreateUserDto): Promise<User> => {
    const { data, error } = await getSupabase()
      .from('users')
      .insert(dto)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  update: async (id: string, dto: UpdateUserDto): Promise<User> => {
    const { data, error } = await getSupabase()
      .from('users')
      .update(dto)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  delete: async (id: string): Promise<void> => {
    const { error } = await getSupabase().from('users').delete().eq('id', id);
    if (error) throw error;
  },
};
