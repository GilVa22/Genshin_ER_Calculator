'use client'
import { useState } from 'react'

interface Form {
    CSE: number | null;
    CDE: number | null;
    CC: number | null;
    NCSE: number | null;
    NCDE: number | null;
    NCC: number | null;
    Burst: number | null;

}
const Form = () => {
    const [formData, set_FormData] = useState<Form>({ CSE: null, CDE: null, NCSE: null, NCDE: null, CC: null, NCC: null, Burst: null });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_FormData({ ...formData, [e.target.name]: (e.target.value) } as unknown as Form);
    }
    const hasText = (job: number | null) => {
        if (job === null) return
        if (job >= 0 && job.toString().length > 0)
            return 'bg-stone-950 transform -translate-y-5 -translate-x-5 scale-75 text-opacity-100'
        else
            return ''
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //set All null values to 0  
        console.log((formData.CSE || 0) * 3)      
        let sum = (formData.CSE || 0) * 3 + (formData.CDE || 0) * 1
            + (formData.NCSE || 0) * 1.8 + (formData.NCDE || 0) * 0.6 +
            (formData.CC || 0) * 2 + (formData.NCC || 0) * 1.2;

        if(sum === 0) window.alert("You forgot to specify the particles");
        else if (!formData.Burst) window.alert("You didn't specify the burst cost");
        else window.alert((((formData.Burst || 0) / (sum || 1))*100).toFixed(2));

        console.log("submit", sum)
    }
    return (
        <div className='  bg-blend-darken   '>
            <form className='p-5 grid grid-rows-4 justify-center align-middle items-center bg-stone-950 border-2 border-blue' onSubmit={handleSubmit}>
                <div className='formContainer'>
                    <label className="formLabel">
                        <input
                            type="number"
                            id="CSE"
                            name="CSE"
                            className="formInput"
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={`formSpan  ${hasText(formData.CSE)}`}>Caught Same Element</span>
                    </label>

                    <label className="formLabel">
                        <input
                            type="number"
                            id="NCSE"
                            name="NCSE"
                            className="formInput"
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={` formSpan ${hasText(formData.NCSE)}`}>Not Caught Same Element</span>
                    </label>
                </div>

                {/*------------------------------------------------------------ */}
                <div className='formContainer'>
                    <label className="formLabel">
                        <input
                            type="number"
                            id="CDE"
                            name="CDE"
                            className="formInput"
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={` formSpan ${hasText(formData.CDE)}`}>Caught Different Element</span>
                    </label>

                    <label className="formLabel">
                        <input
                            type="number"
                            id="NCDE"
                            name="NCDE"
                            className="formInput"
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={`formSpan ${hasText(formData.NCDE)}`}>Not Caught Different Element</span>
                    </label>

                </div>

                {/*------------------------------------------------------------ */}
                <div className='formContainer'>
                    <label className="formLabel">
                        <input
                            type="number"
                            id="CC"
                            name="CC"
                            className="formInput"
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={` formSpan ${hasText(formData.CC)}`}>Caught Clear Particles</span>
                    </label>

                    <label className="formLabel">
                        <input
                            type="number"
                            id="NCC"
                            name="NCC"
                            className="formInput"
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={` formSpan ${hasText(formData.NCC)}`}>Not Caught Clear Particles</span>
                    </label>
                </div>

                {/*------------------------------------------------------------ */}

                <div className='formContainer'>
                    <label className="formLabel">
                        <input
                            type="number"
                            id="Burst"
                            name="Burst"
                            className="formInput focus-visible:border-blue-500 "
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={` formSpan ${hasText(formData.Burst)} `}>Burst Cost</span>
                    </label>

                    <button type="submit"
                        className="w-full text-white hover:text-black border bg-stone-950 border-white
                hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Calculate</button>
                </div>
            </form>
        </div>
    )
}

export default Form