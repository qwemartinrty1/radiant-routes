import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { tournamentApi } from '../api/tournamentApi';
import type { CreateTournamentDto, UpdateTournamentDto } from './types';

export const tournamentKeys = {
  all: ['tournaments'] as const,
  detail: (id: string) => ['tournaments', id] as const,
};

export const useTournaments = () =>
  useQuery({
    queryKey: tournamentKeys.all,
    queryFn: tournamentApi.getAll,
  });

export const useTournament = (id: string) =>
  useQuery({
    queryKey: tournamentKeys.detail(id),
    queryFn: () => tournamentApi.getById(id),
    enabled: !!id,
  });

export const useCreateTournament = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (dto: CreateTournamentDto) => tournamentApi.create(dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: tournamentKeys.all }),
  });
};

export const useUpdateTournament = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdateTournamentDto }) =>
      tournamentApi.update(id, dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: tournamentKeys.all }),
  });
};

export const useDeleteTournament = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => tournamentApi.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: tournamentKeys.all }),
  });
};
