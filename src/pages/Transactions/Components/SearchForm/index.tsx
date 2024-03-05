import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'

import { TransactionsContext } from '@/contexts/TransactionsContext.tsx'

const searchFormSchema = z.object({
    query: z.string(),

})

type SearchFormInputs = z.infer<typeof searchFormSchema>

const SearchFormComponent = () => {
    const fetchTransactions = useContextSelector(TransactionsContext, (constext) =>
        constext.fetchTransactions
    )
    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <form
            className="flex gap-[1rem]"
            onSubmit={handleSubmit(handleSearchTransactions)}
        >
            <input
                type="text"
                placeholder="Busque por transações"
                className="flex-1  rounded-[6px] border-0 bg-gray-900 p-[1rem] text-gray-300 placeholder:text-gray-500"
                {...register('query')}
            />
            <button
                type="submit"
                className="flex cursor-pointer items-center gap-[0.75rem] rounded-[6px] border-[1px] border-green-300 bg-transparent p-[1rem] font-bold text-green-300 transition hover:enabled:border-green-500 hover:enabled:bg-green-500 hover:enabled:text-white disabled:cursor-not-allowed disabled:opacity-30"
                disabled={isSubmitting}
            >
                <MagnifyingGlass />
                Buscar
            </button>
        </form>
    )
}

export const SearchForm = memo(SearchFormComponent)