import { Table, Title, Loader, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '@/entities/user';
import styles from './UsersPage.module.css';

export const UsersPage = () => {
  const navigate = useNavigate();
  const { data: users, isLoading } = useUsers();

  if (isLoading) return <Loader className={styles.loader} />;

  return (
    <div className={styles.root}>
      <Title order={2} mb="md">Users</Title>

      {users?.length ? (
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Username</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {users.map((user) => (
              <Table.Tr key={user.id}>
                <Table.Td>{user.username}</Table.Td>
                <Table.Td>{user.email}</Table.Td>
                <Table.Td>
                  <Button
                    size="xs"
                    variant="light"
                    onClick={() => navigate(`/users/${user.id}`)}
                  >
                    View
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      ) : (
        <Text c="dimmed">No users found.</Text>
      )}
    </div>
  );
};
