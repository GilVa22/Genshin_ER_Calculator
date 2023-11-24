'use client'
import { useState } from 'react'

interface Form {
    CSE: number | null;
    CDE: number | null;
    CC: number | null;
    NCSE: number | null;
    NCDE: number | null;
    NCC: number | null;
}
const Form = () => {
    const [formData, set_FormData] = useState<Form>({ CSE: null, CDE: null, NCSE: null, NCDE: null, CC: null, NCC: null });

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        set_FormData({...formData, [e.target.name]: (e.target.value) } as unknown as Form);
    }
    const hasText = (job: number | null) => {
        if (job === null) return
        console.log(job)
        if (job >= 0 && job.toString().length > 0)
            return 'bg-black transform -translate-y-5 -translate-x-5 scale-75'
        else
            return ''
    }
    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //set All null values to 0        
        let sum = (formData.CSE || 0) *3 + (formData.CDE || 0) * 1 
        + (formData.NCSE || 0) * 1.8 + (formData.NCDE || 0) *0.6 +
        (formData.CC || 0) * 2 + (formData.NCC || 0) * 1.2;
        window.alert(70/sum)
        console.log("submit", sum)
    }
    return (
        <div className='  bg-blend-darken   '>
            <form className='p-5 flex flex-col justify-center align-middle items-center bg-stone-950 border-2 border-blue' onSubmit={handleSubmit}>
                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="number"
                        id="CSE"
                        name="CSE"
                        className="my-2 h-10 w-full bg-black text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-blue  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(formData.CSE)}`}>Caught Same Element</span>
                </label>

                {/*------------------------------------------------------------ */}

                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="number"
                        id="CDE"
                        name="CDE"
                        className="my-2 h-10 w-full bg-black text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-blue  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(formData.CDE)}`}>Caught Different Element</span>
                </label>

                {/*------------------------------------------------------------ */}

                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="number"
                        id="NCSE"
                        name="NCSE"
                        className="my-2 h-10 w-full bg-black text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-blue  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(formData.NCSE)}`}>Not Caught Same Element</span>
                </label>

                {/*------------------------------------------------------------ */}

                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="number"
                        id="NCDE"
                        name="NCDE"
                        className="my-2 h-10 w-full bg-black text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-blue  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(formData.NCDE)}`}>Not Caught Different Element</span>
                </label>

                {/*------------------------------------------------------------ */}

                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="number"
                        id="CC"
                        name="CC"
                        className="my-2 h-10 w-full bg-black text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-blue  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(formData.CC)}`}>Caught Clear Particles</span>
                </label>

                {/*------------------------------------------------------------ */}

                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="number"
                        id="NCC"
                        name="NCC"
                        className="my-2 h-10 w-full bg-black text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-blue  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(formData.NCC)}`}>Not Caught Clear Particles</span>
                </label>
                <button type="submit" className="w-1/2 text-white hover:text-black border hover:border-black border-white bg-black hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Calculate</button>

            </form>
        </div>
    )
}

export default Form