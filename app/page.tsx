import Form from "./Form"
/*
- NRE Basic calc
- Configure 4 CH team, Automatic team wide ER
- List all thing that give energy (Cons)
- Show character Data on top of the Form (Paricle Gen)
- Give calculations for bad RNG (No fav, No sac)
- Build aditional tools on top (Other useful calculators, like Raiden Energy)
*/
export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center align-middle p-15'>
      {/* <h1 className='text-center'>Pensando...</h1> */}
      <div className="w-1/2">
        <Form />
      </div>
    </div>
  )
}
