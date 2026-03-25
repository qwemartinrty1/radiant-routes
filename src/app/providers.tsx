import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      {children}
    </MantineProvider>
  </QueryClientProvider>
);
