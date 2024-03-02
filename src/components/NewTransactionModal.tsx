import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import { TransactionsContext } from '@/contexts/TransactionsContext.tsx'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type  NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext)
    const {
        control,
        register,
        handleSubmit,
        formState: {
            isSubmitting
        },
        reset
    } = useForm<NewTransactionFormInputs>({
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await createTransaction(data)
        reset()
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.75)]" />
            <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[32rem] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-800 px-[3rem] py-[2.5rem]">
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close className="absolute right-[1.5rem] top-[1.5rem] cursor-pointer text-gray-500">
                    <X size={24} />
                </Dialog.Close>

                <form
                    className="mt-[2rem] flex flex-col gap-[1rem]"
                    onSubmit={handleSubmit(handleCreateNewTransaction)}
                >
                    <input
                        className="rounded-[6px] bg-gray-900 p-[1rem] text-gray-300 placeholder:text-gray-500"
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register('description')}
                    />
                    <input
                        className="rounded-[6px] bg-gray-900 p-[1rem] text-gray-300 placeholder:text-gray-500"
                        type="number"
                        placeholder="Preço"
                        required
                        {...register('price', {valueAsNumber: true})}
                    />
                    <input
                        className="rounded-[6px] bg-gray-900 p-[1rem] text-gray-300 placeholder:text-gray-500"
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return(
                                <RadioGroup.Root
                                    className="mt-[0.5rem] grid grid-cols-[repeat(2,1fr)] gap-[1rem]"
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <RadioGroup.Item
                                        value="income"
                                        className="flex cursor-pointer items-center justify-center gap-[0.5rem] rounded-[6px] bg-gray-700 p-[1rem] text-gray-300 transition data-[state=checked]:bg-green-500 data-[state=unchecked]:hover:bg-gray-600"
                                    >
                                        <ArrowCircleUp className="text-green-300" />
                                        Entrada
                                    </RadioGroup.Item>

                                    <RadioGroup.Item
                                        value="outcome"
                                        className="flex cursor-pointer items-center justify-center gap-[0.5rem] rounded-[6px] bg-gray-700 p-[1rem] text-gray-300 transition data-[state=checked]:bg-red-500 data-[state=unchecked]:hover:bg-gray-600"
                                    >
                                        <ArrowCircleDown className="text-red-300" />
                                        Saída
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            )
                        }}
                    />

                    <button
                        className="hover:enabled::bg-green-700 mt-[1.5rem] h-[58px] cursor-pointer rounded-[6px] bg-green-500 px-[1.25rem] font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-30" type="submit"
                        disabled={isSubmitting}
                    >

                        Cadastrar
                    </button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}