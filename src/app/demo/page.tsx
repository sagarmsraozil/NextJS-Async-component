import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import AsyncComponent from '../AsyncComponent';

export const fetchFunc = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve('Checking');
    }, 2000)
  );
};

const Demo = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['demo-test'],
    queryFn: () => fetchFunc()
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      Sagar <AsyncComponent />
    </HydrationBoundary>
  );
};

export default Demo;
