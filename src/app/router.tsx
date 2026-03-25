import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@/shared/ui/Layout';
import { PostsPage } from '@/pages/posts/PostsPage';
import { CreatePostPage } from '@/pages/posts/CreatePostPage';
import { EditPostPage } from '@/pages/posts/EditPostPage';
import { UsersPage } from '@/pages/users/UsersPage';
import { UserDetailPage } from '@/pages/users/UserDetailPage';
import { TournamentsPage } from '@/pages/tournaments/TournamentsPage';
import { TournamentDetailPage } from '@/pages/tournaments/TournamentDetailPage';
import { SettingsPage } from '@/pages/settings/SettingsPage';
import { LoginPage} from "@/pages/login/LoginPage"

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/posts" replace /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'create-posts', element: <CreatePostPage /> },
      { path: 'edit-posts', element: <EditPostPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'users/:id', element: <UserDetailPage /> },
      { path: 'tournaments', element: <TournamentsPage /> },
      { path: 'tournaments/:id', element: <TournamentDetailPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
