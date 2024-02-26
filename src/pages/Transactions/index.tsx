import { useContext } from 'react'

import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { TransactionsContext } from '@/contexts/TransactionsContext.tsx'
import { SearchForm } from '@/pages/Transactions/Components/SearchForm'

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header />
            <Summary />

            <div className="mx-auto my-[4rem] w-full max-w-[min(70rem,100%-2rem)]">
                <SearchForm />

                <table className="mt-[1.5rem] w-full border-separate border-spacing-y-[0.5rem]">
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td className="rounded-l-[6px] bg-gray-700 px-[2rem] py-[1.5rem]" width="50%">
                                    {transaction.description}
                                </td>
                                <td className={`bg-gray-700 px-[2rem] py-[1.5rem] ${transaction.type === 'income' ? 'text-green-300' : 'text-red-300' }`}>{transaction.price}</td>
                                <td className="bg-gray-700 px-[2rem] py-[1.5rem]">{transaction.category}</td>
                                <td className="rounded-r-[6px] bg-gray-700 px-[2rem] py-[1.5rem]">{transaction.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}