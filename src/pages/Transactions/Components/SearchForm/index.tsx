import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchFormSchema = z.object({
    query: z.string(),

})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    function handleSearchTransactions(data: SearchFormInputs) {
        console.log(data)
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
                className="flex items-center gap-[0.75rem] rounded-[6px] border-[1px] border-green-300 bg-transparent p-[1rem] font-bold text-green-300 transition hover:border-green-500 hover:bg-green-500 hover:text-white"
            >
                <MagnifyingGlass />
                Buscar
            </button>
        </form>
    )
}