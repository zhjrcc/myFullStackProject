import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Blog } from './Blog'

const queryCLient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <Blog />
    </QueryClientProvider>
  )
}
