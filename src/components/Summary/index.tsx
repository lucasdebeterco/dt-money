import theme from '@tailwindConfig'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

const colors = theme.theme.colors

export function Summary() {
  return (
    <section
      className="mx-auto mt-[-5rem] grid w-full max-w-[min(70rem,100%-2rem)] grid-cols-3 gap-[2rem]">
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={colors['green-300']}/>
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={colors['red-300']}/>
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={colors['white']}/>
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
    </section>
  )
}