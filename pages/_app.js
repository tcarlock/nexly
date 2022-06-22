import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/app-layout';
import '../styles/globals.css'

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.post(`/api/${queryKey[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false
    },
  },
})

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};
