import { Card, Title, Text, Loader, Stack, Badge, Button } from '@mantine/core';
import { useParams, useNavigate } from 'react-router-dom';
import { useTournament } from '@/entities/tournament';
import styles from './TournamentDetailPage.module.css';

export const TournamentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: tournament, isLoading } = useTournament(id ?? '');

  if (isLoading) return <Loader className={styles.loader} />;

  if (!tournament) return <Text>Tournament not found</Text>;

  return (
    <div className={styles.root}>
      <Button variant="subtle" onClick={() => navigate('/tournaments')} mb="md">
        ← Back to Tournaments
      </Button>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="sm">
          <Title order={2}>{tournament.name}</Title>
          <Badge>{tournament.status}</Badge>
          <Text>{tournament.description}</Text>
          <Text size="sm">
            {new Date(tournament.start_date).toLocaleDateString()} –{' '}
            {new Date(tournament.end_date).toLocaleDateString()}
          </Text>
        </Stack>
      </Card>
    </div>
  );
};
