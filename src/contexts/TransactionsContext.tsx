import { ReactNode, useCallback,useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '@/lib/axios.ts'

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface createTransactionData {
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: createTransactionData) => void
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
    children: ReactNode
}

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                order: 'desc',
                q: query
            }
        })

        setTransactions(response.data)
    }, [])

    const createTransaction = useCallback(async (data: createTransactionData) => {
        const response = await api.post('transactions', {
            ...data,
            createdAt: new Date()
        })

        setTransactions(prevState => [response.data, ...prevState])
    }
    , [])

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}