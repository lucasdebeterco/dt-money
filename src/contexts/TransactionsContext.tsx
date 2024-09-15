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
        const transctionsStorage = localStorage.getItem('transactions-dt-money')
        transctionsStorage && setTransactions(JSON.parse(transctionsStorage))
        console.log(query)
    }, [])

    const createTransaction = useCallback(async (data: createTransactionData) => {
        const newTransaction: Transaction = {
            id: new Date().valueOf(),
            ...data,
            createdAt: new Date().toString()
        }

        setTransactions(prevState => {
            localStorage.setItem(
                'transactions-dt-money',
                JSON.stringify([newTransaction, ...prevState])
            )
            return [newTransaction, ...prevState]
        })

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