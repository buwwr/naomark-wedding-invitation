import rsvpEnv from "../../assets/rsvp_envelope.png"
import { useState } from 'react'

export default function Rsvp() {
    const [form, setForm] = useState({
                                guest1: "",
                                guest2: "",
                                attending: "Yes",
                            })
    const [guestCount, setGuestCount] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    const btnClass = submitted ? "btn btn-disabled hidden" : "btn btn-primary" 
    
    const handleGuest1Change = (value) => {
        setForm({ ...form, guest1: value })
    }

    const handleGuest2Change = (value) => {
        setForm({ ...form, guest2: value })
    }

    const handleAttendanceChange = (value) => {
        setForm({...form, attending: value})
    }

    const handleGuestChange = (count) => {
        setGuestCount(count)
    }

    function handleSubmit(e) {
        e.preventDefault()
        postForm()
        setSubmitted(prevSubmit => !prevSubmit)
    }

    function postForm() {
        const guestNames = form.guest2 ? `${form.guest1} & ${form.guest2}` : form.guest1
        fetch("https://docs.google.com/forms/d/e/1FAIpQLSeLjQcsYMepCw0qNfgwD1ajuaNQkiBCR1PJVC7FSmZo3dSMIw/formResponse", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                "entry.877086558": form.attending,
                "entry.1498135098": guestNames ,
            }),
        })
    }

    return (
        <section className="max-w-sm mx-auto flex flex-col text-center items-center justify-center gap-2 px-2 py-5 font-sans uppercase tracking-tight leading-none text-gray-900 font-semibold text-base">
            <div>
                We kindly ask for your response by
                <p className="uppercase text-rose-400 text-2xl font-bold font-oranienbaum">
                    January 15, 2026
                </p>
            </div>
            
            <img className="w-40 mx-auto" src={rsvpEnv}  />

            <p>Please let us know whether you will be able to attend by responding to the RSVP.</p>
            
            <form onSubmit={handleSubmit} >
                <label htmlFor="my_modal_6" className="btn btn-primary font-sans">RSVP Now</label>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box flex flex-col gap-2">
                        <h3 className="text-lg font-bold">RSVP Confirmation</h3>
                        {submitted ? 
                            <>
                                <div role="alert" className="alert bg-green-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className=" text-black normal-case"> 
                                        {form.attending === "Yes" ? 
                                            `Form Submitted! We’re excited to celebrate with you and can’t wait to see you!`
                                            : `Form Submitted! Thanks for your response!` }
                                    </span>
                                </div>
                            </>
                            : 
                            <>
                                <div className="flex gap-2">
                                    <span className="text-rose-400 font-bold">Guest Count:</span>
                            
                                    <input 
                                    type="radio" 
                                    name="radio-guest-count" 
                                    className="radio radio-secondary" 
                                    checked={guestCount === 1}
                                    onChange={() => handleGuestChange(1)} 
                                    /> 1
                                
                                    <input 
                                        type="radio" 
                                        name="radio-guest-count" 
                                        className="radio radio-secondary" 
                                        checked={guestCount === 2}
                                        onChange={() => handleGuestChange(2)} 
                                    /> 2
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <span className="text-left text-rose-400 font-bold">Enter full name(s):</span>
                                    <input
                                        type="text"
                                        value={form.guest1}
                                        onChange={(e) => handleGuest1Change(e.target.value)}
                                        placeholder="Juan Dela Cruz"
                                        className="input input-bordered w-full"
                                        required
                                    />

                                    { guestCount === 2 &&
                                        <input
                                            type="text"
                                            value={form.guest2}
                                            onChange={(e) => handleGuest2Change(e.target.value)}
                                            placeholder="Juan Dela Cruz"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    }
                                </div>
                               
                               <div className="flex gap-2">
                                    <span className="text-rose-400 font-bold">Will you attend?</span>
                                    <input 
                                    type="radio" 
                                    name="radio-attending" 
                                    className="radio radio-secondary"
                                    value="Yes" 
                                    checked={form.attending === "Yes"}
                                    onChange={() => handleAttendanceChange("Yes")} 
                                    /> Yes
                                    
                                    <input 
                                        type="radio" 
                                        name="radio-attending" 
                                        className="radio radio-secondary"
                                        value="No" 
                                        checked={form.attending === "No"}
                                        onChange={() => handleAttendanceChange("No")} 
                                    /> No
                               </div>
                    
                            </>
                        }
                        
                        
                        <div className="modal-action font-sans">
                            <label htmlFor="my_modal_6" className="btn">Close</label>
                            <button className={btnClass}>
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </section>
    )
}

                                