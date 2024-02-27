import theme from '@tailwindConfig'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'

import { TransactionsContext } from '@/contexts/TransactionsContext.tsx'
import { priceFormatter } from '@/utils/formatter.ts'

const colors = theme.theme.colors

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'income') {
            acc.income += transaction.price
            acc.total += transaction.price
        } else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
        }

        return acc
    }, {
        income: 0,
        outcome: 0,
        total: 0
    })

    return (
        <section className="mx-auto mt-[-5rem] grid w-full max-w-[min(70rem,100%-2rem)] grid-cols-3 gap-[2rem]">
            <div className="rounded-[6px] bg-gray-600 p-[2rem]">
                <header className="flex items-center justify-between text-gray-300">
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={colors['green-300']} />
                </header>

                <strong className="mt-[1rem] block text-[2rem]">
                    {priceFormatter.format(summary.income)}
                </strong>
            </div>
            <div className="rounded-[6px] bg-gray-600 p-[2rem]">
                <header className="flex items-center justify-between text-gray-300">
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color={colors['red-300']} />
                </header>

                <strong className="mt-[1rem] block text-[2rem]">
                    {priceFormatter.format(summary.outcome)}
                </strong>
            </div>
            <div className="rounded-[6px] bg-green-700 p-[2rem]">
                <header className="flex items-center justify-between text-gray-300">
                    <span>Total</span>
                    <CurrencyDollar size={32} color={colors['white']} />
                </header>

                <strong className="mt-[1rem] block text-[2rem]">
                    {priceFormatter.format(summary.total)}
                </strong>
            </div>
        </section>
    )
}