// app/page.tsx
'use client'
import { Dashboard } from '@/pages/dashboard/dashboard'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function Page() {
  const queryClient = new QueryClient()


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  )
}