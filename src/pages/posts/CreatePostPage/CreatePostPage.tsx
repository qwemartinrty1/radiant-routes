import { Button, TextInput, Textarea, Title, Stack } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "@/entities/post";
import styles from "./CreatePostPage.module.css";
import { ACCOUNT_ID, NICKNAME, TOKEN } from "@/constants";

export const CreatePostPage = () => {
  const navigate = useNavigate();
  const createPost = useCreatePost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost.mutateAsync({ title, content });
    navigate("/posts");
  };

  console.log(
    localStorage.getItem(ACCOUNT_ID),
    localStorage.getItem(TOKEN),
    localStorage.getItem(NICKNAME),
  );

  return (
    <div className={styles.root}>
      <Title order={2} mb="md">
        Create Post
      </Title>
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
          <Button type="submit" loading={createPost.isPending}>
            Create
          </Button>
        </Stack>
      </form>
    </div>
  );
};
