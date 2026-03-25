import { AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  IconFileText,
  IconUsers,
  IconTrophy,
  IconSettings,
} from '@tabler/icons-react';
import styles from './Layout.module.css';

const navItems = [
  { label: 'Posts', path: '/posts', icon: IconFileText },
  { label: 'Users', path: '/users', icon: IconUsers },
  { label: 'Tournaments', path: '/tournaments', icon: IconTrophy },
  { label: 'Settings', path: '/settings', icon: IconSettings },
];

export const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header className={styles.header}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={3}>App Template</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" className={styles.navbar}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            label={item.label}
            leftSection={<item.icon size={20} />}
            active={location.pathname.startsWith(item.path)}
            onClick={() => {
              navigate(item.path);
              toggle();
            }}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
