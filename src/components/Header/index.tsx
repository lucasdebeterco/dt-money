import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-gray-900 pb-[7.5rem] pt-[2.5rem]">
      <div className="mx-auto flex w-full max-w-[min(70rem,100%-2rem)] items-center justify-between px-[1.5rem]">
        <img src={logoImg} alt="" />

        <button className="h-[50px] cursor-pointer rounded-[6px] border-0 bg-green-500 px-[1.25rem] font-bold text-white transition hover:bg-green-700">
            Nova Transação
        </button>
      </div>
    </header>
  )
}