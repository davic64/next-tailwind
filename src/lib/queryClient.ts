import { QueryClient } from '@tanstack/react-query';
import { queryClientConfig } from '@/config/queryClient.config';

export const queryClient = new QueryClient(queryClientConfig);
