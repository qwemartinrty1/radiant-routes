import { Table, Title, Loader, Text, Badge, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useTournaments } from '@/entities/tournament';
import styles from './TournamentsPage.module.css';

const statusColor = {
  upcoming: 'blue',
  active: 'green',
  completed: 'gray',
} as const;

export const TournamentsPage = () => {
  const navigate = useNavigate();
  const { data: tournaments, isLoading } = useTournaments();

  if (isLoading) return <Loader className={styles.loader} />;

  return (
    <div className={styles.root}>
      <Title order={2} mb="md">Tournaments</Title>

      {tournaments?.length ? (
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Start</Table.Th>
              <Table.Th>End</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {tournaments.map((t) => (
              <Table.Tr key={t.id}>
                <Table.Td>{t.name}</Table.Td>
                <Table.Td>
                  <Badge color={statusColor[t.status]}>{t.status}</Badge>
                </Table.Td>
                <Table.Td>{new Date(t.start_date).toLocaleDateString()}</Table.Td>
                <Table.Td>{new Date(t.end_date).toLocaleDateString()}</Table.Td>
                <Table.Td>
                  <Button
                    size="xs"
                    variant="light"
                    onClick={() => navigate(`/tournaments/${t.id}`)}
                  >
                    View
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      ) : (
        <Text c="dimmed">No tournaments found.</Text>
      )}
    </div>
  );
};
