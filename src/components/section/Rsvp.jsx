import { useState } from 'react'

export default function Rsvp() {
    const [form, setForm] = useState({
                                guest1: "",
                                guest2: "",
                                attending: "Yes",
                            })
    const [guestCount, setGuestCount] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    const btnClass = submitted ? "btn btn-disabled" : "btn btn-primary" 

    const handleGuest1Change = (value) => {
        setForm({ ...form, guest1: value })
        console.log(form.guest1)
    }

    const handleGuest2Change = (value) => {
        setForm({ ...form, guest2: value })
        console.log(form.guest2)
    }

    const handleAttendanceChange = (value) => {
        setForm({...form, attending: value})
        console.log(form.attending)
    }

    const handleGuestChange = (count) => {
        setGuestCount(count)
        console.log(count)
    }

    function handleSubmit(e) {
        e.preventDefault()
        postForm()
        setSubmitted(prevSubmit => !prevSubmit)

    }

    function postForm() {
        const guestNames = form.guest2 ? `${form.guest1} & ${form.guest2}` : form.guest1
        console.log(guestNames)  
        console.log(form.attending) 

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
        <section className="font-abhaya bg-img-mid bg-center bg-cover flex flex-col text-center items-center justify-center gap-2 px-2 my-4">
            <div>
                We kindly ask for your response by
                <p className="uppercase text-rose-400 text-xl font-bold">
                    January 15, 2026
                </p>
            </div>
            
            <img className="w-40 mx-auto" src="./rsvp_envelope.png"  />

            <p>Please let us know whether you will be able to attend by responding to the RSVP.</p>
            
            <form onSubmit={handleSubmit} >
                <label htmlFor="my_modal_6" className="btn btn-primary font-sans">RSVP Now</label>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box flex flex-col gap-2">
                        <h3 className="text-lg font-bold">RSVP Confirmation</h3>
                        {submitted ? 
                            <>
                                <div role="alert" className="alert alert-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="font-bold text-white"> 
                                        {form.attending === "Yes" ? 
                                            "Yay! Thank you for your response. We’re excited to celebrate with you and can’t wait to see you!" 
                                            : "Thank you for your response. We appreciate you letting us know." }
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
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </section>
    )
}

                                