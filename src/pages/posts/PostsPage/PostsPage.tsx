import { Button, Table, Title, Group, Loader, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { usePosts, useDeletePost } from '@/entities/post';
import styles from './PostsPage.module.css';

export const PostsPage = () => {
  const navigate = useNavigate();
  const { data: posts, isLoading } = usePosts();
  const deletePost = useDeletePost();

  if (isLoading) return <Loader className={styles.loader} />;

  return (
    <div className={styles.root}>
      <Group justify="space-between" mb="md">
        <Title order={2}>Posts</Title>
        <Button onClick={() => navigate('/create-posts')}>Create Post</Button>
      </Group>

      {posts?.length ? (
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>Created</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {posts.map((post) => (
              <Table.Tr key={post.id}>
                <Table.Td>{post.title}</Table.Td>
                <Table.Td>{new Date(post.created_at).toLocaleDateString()}</Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Button
                      size="xs"
                      variant="light"
                      onClick={() => navigate(`/edit-posts?id=${post.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="xs"
                      variant="light"
                      color="red"
                      onClick={() => deletePost.mutate(post.id)}
                    >
                      Delete
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      ) : (
        <Text c="dimmed">No posts yet.</Text>
      )}
    </div>
  );
};
