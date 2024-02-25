import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.75)]" />
            <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[32rem] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-800 px-[3rem] py-[2.5rem]">
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close className="leading-0 absolute right-[1.5rem] top-[1.5rem] cursor-pointer text-gray-500">
                    <X size={24} />
                </Dialog.Close>

                <form className="mt-[2rem] flex flex-col gap-[1rem]">
                    <input className="rounded-[6px] bg-gray-900 p-[1rem] text-gray-300 placeholder:text-gray-500" type="text" placeholder="Descrição" required/>
                    <input className="rounded-[6px] bg-gray-900 p-[1rem] text-gray-300 placeholder:text-gray-500" type="number" placeholder="Preço" required/>
                    <input className="rounded-[6px] bg-gray-900 p-[1rem] text-gray-300 placeholder:text-gray-500" type="text" placeholder="Categoria" required/>

                    <RadioGroup.Root className="mt-[0.5rem] grid grid-cols-[repeat(2,1fr)] gap-[1rem]">
                        <RadioGroup.Item value="income" className="flex cursor-pointer items-center justify-center gap-[0.5rem] rounded-[6px] bg-gray-700 p-[1rem] text-gray-300 transition data-[state=checked]:bg-green-500 data-[state=unchecked]:hover:bg-gray-600">
                            <ArrowCircleUp className="text-green-300" />
                            Entrada
                        </RadioGroup.Item>
                        <RadioGroup.Item value="outcome" className="flex cursor-pointer items-center justify-center gap-[0.5rem] rounded-[6px] bg-gray-700 p-[1rem] text-gray-300 transition data-[state=checked]:bg-red-500 data-[state=unchecked]:hover:bg-gray-600">
                            <ArrowCircleDown className="text-red-300" />
                            Saída
                        </RadioGroup.Item>
                    </RadioGroup.Root>

                    <button
                        className="pointer mt-[1.5rem] h-[58px] rounded-[6px] bg-green-500 px-[1.25rem] font-bold text-white transition hover:bg-green-700" type="submit">
                        Cadastrar
                    </button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}