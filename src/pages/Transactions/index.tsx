import { SearchForm } from '@/pages/Transactions/Components/SearchForm'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <div className="mx-auto my-[4rem] w-full max-w-[min(70rem,100%-2rem)]">
                <SearchForm />

                <table className="mt-[1.5rem] w-full border-separate border-spacing-y-[0.5rem] border-spacing-y-[0]">
                    <tbody>
                        <tr>
                            <td className="rounded-l-[6px] bg-gray-700 px-[2rem] py-[1.5rem]" width="50%">Desenvolvimento de site</td>
                            <td className="bg-gray-700 px-[2rem] py-[1.5rem] text-green-300">R$ 12.000,00</td>
                            <td className="bg-gray-700 px-[2rem] py-[1.5rem]">Venda</td>
                            <td className="rounded-r-[6px] bg-gray-700 px-[2rem] py-[1.5rem]">13/04/2022</td>
                        </tr>
                        <tr>
                            <td className="rounded-l-[6px] bg-gray-700 px-[2rem] py-[1.5rem]" width="50%">Desenvolvimento de site</td>
                            <td className="bg-gray-700 px-[2rem] py-[1.5rem] text-red-300">R$ 12.000,00</td>
                            <td className="bg-gray-700 px-[2rem] py-[1.5rem]">Venda</td>
                            <td className="rounded-r-[6px] bg-gray-700 px-[2rem] py-[1.5rem]">13/04/2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}