import Form from "./Form"

export default function Home() {
  return (
    <div className='w-full bg-stone-950 h-screen flex flex-col justify-center items-center align-middle p-15'>
      <div className="w-1/2 text-center">
        <h1 className="text-3xl mb-5 text-white">Energy Recharge Calculator</h1>
        <p className="text-sm mb-5 text-white">This is a work in progress (maybe), hope no one finds this website</p>
        <p className="text-sm text-slate-400 opacity-75">Inspired by the way Zajef77 calcs ER on his streams</p>
        <Form />
      </div>
    </div>
  )
}
