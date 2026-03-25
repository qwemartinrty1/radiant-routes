import { getSupabase } from '@/shared/api';
import type { Tournament, CreateTournamentDto, UpdateTournamentDto } from '../model/types';

export const tournamentApi = {
  getAll: async (): Promise<Tournament[]> => {
    const { data, error } = await getSupabase()
      .from('tournaments')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data ?? [];
  },

  getById: async (id: string): Promise<Tournament> => {
    const { data, error } = await getSupabase()
      .from('tournaments')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  create: async (dto: CreateTournamentDto): Promise<Tournament> => {
    const { data, error } = await getSupabase()
      .from('tournaments')
      .insert(dto)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  update: async (id: string, dto: UpdateTournamentDto): Promise<Tournament> => {
    const { data, error } = await getSupabase()
      .from('tournaments')
      .update(dto)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  delete: async (id: string): Promise<void> => {
    const { error } = await getSupabase().from('tournaments').delete().eq('id', id);
    if (error) throw error;
  },
};
