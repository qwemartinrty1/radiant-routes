import { Button, TextInput, Textarea, Title, Stack, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePost, useUpdatePost } from '@/entities/post';
import styles from './EditPostPage.module.css';

export const EditPostPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') ?? '';
  const { data: post, isLoading } = usePost(id);
  const updatePost = useUpdatePost();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (isLoading) return <Loader className={styles.loader} />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePost.mutateAsync({ id, dto: { title, content } });
    navigate('/posts');
  };

  return (
    <div className={styles.root}>
      <Title order={2} mb="md">Edit Post</Title>
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <TextInput
            label="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <Textarea
            label="Content"
            required
            minRows={4}
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <Button type="submit" loading={updatePost.isPending}>
            Save
          </Button>
        </Stack>
      </form>
    </div>
  );
};
