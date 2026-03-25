import { RouterProvider } from 'react-router-dom';
import { Providers } from '@/app/providers';
import { router } from '@/app/router';
import '@mantine/core/styles.css';

const App = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);

export default App;
