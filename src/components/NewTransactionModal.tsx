import * as Dialog from '@radix-ui/react-dialog'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.75)]" />
            <Dialog.Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <form>
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <button type="submit">Cadastrar</button>
                </form>

                <Dialog.Close/>
            </Dialog.Content>
        </Dialog.Portal>
    )
}