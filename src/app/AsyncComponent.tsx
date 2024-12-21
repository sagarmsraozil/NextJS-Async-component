import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export const fetchFunc = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve('Checking');
    }, 2000)
  );
};

const AsyncComponent = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['demo-test'],
    queryFn: () => fetchFunc()
  });

  return <HydrationBoundary state={dehydrate(queryClient)}>Sagar</HydrationBoundary>;
};

export default AsyncComponent;
