import footerImg from '../../assets/footer.png'

export default function Reminders() {
    return (
        <section className="max-w-sm mx-auto  font-sans text-gray-900 flex flex-col text-center text-base gap-2 p-4">
            <h3 className="font-oranienbaum text-center text-rose-400 text-5xl uppercase font-bold">Gentle Reminders</h3>
            <div className="flex flex-col gap-5">
                <p className="text-center rounded-2xl bg-rose-400 glass p-4 text-white">
                    We'd like to keep our wedding solemn & intimate with the most 
                    important people in our lives. Our guests are limited and 
                    hand picked on purpose. We kindly request to not bring 
                    uninvited guest or tag-along companies may they be an adult or kids.
                </p>

                <div>
                    <h4 className="font-oranienbaum text-rose-400 font-bold text-2xl">FAQs</h4>
                    <div className="flex flex-col gap-2">
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 gap-2">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title font-semibold text-rose-400">What if I did not RSVP but will attend the wedding?</div>
                            <div className="collapse-content text-sm">
                                <span className="font-bold">NO RSVP = NO SEAT</span> 
                                <span className="block">
                                    We will be assigning seats, so we strongly encourage you to RSVP on or before 
                                    <span className="font-bold"> January 15, 2026 </span>,
                                    or kindly contact and inform us ahead of time. In case you have already confirmed your attendance but later 
                                    find that you are unable to attend, please let us know ASAP so we can accommodate any changes
                                </span>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold text-rose-400">When should we arrive at the venue?</div>
                            <div className="collapse-content text-sm">
                                The ceremony will <span className="font-bold"> strictly </span> begin at <span className="font-bold"> 11:00 AM. </span>
                                The entourage will march at <span className="font-bold"> 10:30 AM</span>, 
                                so please arrive at the venue <span className="font-bold"> at least 10–15 minutes before 10:30 AM</span>.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold text-rose-400">When can we leave?</div>
                            <div className="collapse-content text-sm">
                                The program is estimated to last until <span className="font-bold"> 3:00 PM</span>. 
                                We hope you can stay with us until the end of the program. Should you need to leave early, 
                                we would love to personally thank you and bid you goodbye.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold text-rose-400">Can we sit anywhere during reception?</div>
                            <div className="collapse-content text-sm">
                                <span className="font-bold">NO</span>
                                <span className="block">A lot of effort and discussion went into finalizing the seating arrangement, 
                                which was planned for everyone’s convenience and networking preferences. 
                                There is no need to worry—you will be seated together with your group of friends.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={footerImg} className="w-40 self-center"/>
            <div className="flex justify-center gap text-xl font-oranienbaum font-semibold tracking-wide uppercase text-gray-900">
                  <p className="border border-gray-900 p-1.5">Thank You</p>
              </div>
        </section>
    )
}