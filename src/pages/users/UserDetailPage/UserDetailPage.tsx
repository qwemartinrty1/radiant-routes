import { Card, Title, Text, Loader, Stack, Button } from '@mantine/core';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '@/entities/user';
import styles from './UserDetailPage.module.css';

export const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser(id ?? '');

  if (isLoading) return <Loader className={styles.loader} />;

  if (!user) return <Text>User not found</Text>;

  return (
    <div className={styles.root}>
      <Button variant="subtle" onClick={() => navigate('/users')} mb="md">
        ← Back to Users
      </Button>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="sm">
          <Title order={2}>{user.username}</Title>
          <Text>Email: {user.email}</Text>
          {user.avatar_url && <Text>Avatar: {user.avatar_url}</Text>}
          <Text c="dimmed" size="sm">
            Joined: {new Date(user.created_at).toLocaleDateString()}
          </Text>
        </Stack>
      </Card>
    </div>
  );
};
