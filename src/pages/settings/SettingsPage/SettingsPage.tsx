import { Title, Card, Stack, TextInput, Button, Switch } from '@mantine/core';
import { useState } from 'react';
import styles from './SettingsPage.module.css';

export const SettingsPage = () => {
  const [appName, setAppName] = useState('App Template');
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={styles.root}>
      <Title order={2} mb="md">Settings</Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="md">
          <TextInput
            label="Application Name"
            value={appName}
            onChange={(e) => setAppName(e.currentTarget.value)}
          />
          <Switch
            label="Enable Notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.currentTarget.checked)}
          />
          <Button>Save Settings</Button>
        </Stack>
      </Card>
    </div>
  );
};
