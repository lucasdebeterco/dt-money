import { TransactionsProvider } from '@/contexts/TransactionsContext.tsx'

import { Transactions } from './pages/Transactions'

export function App() {
    return (
        <TransactionsProvider>
            <Transactions />
        </TransactionsProvider>
    )
}