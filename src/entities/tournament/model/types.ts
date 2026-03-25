export interface Tournament {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  status: 'upcoming' | 'active' | 'completed';
  created_at: string;
}

export interface CreateTournamentDto {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  status?: 'upcoming' | 'active' | 'completed';
}

export interface UpdateTournamentDto {
  name?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
  status?: 'upcoming' | 'active' | 'completed';
}
