export default function Reminders() {
    return (
        <section className="font-abhaya flex flex-col bg-img-bot bg-cover bg-center min-h-screen text-center text-sm gap-2">
            <h3 className="font-oranienbaum text-center text-rose-400 text-4xl uppercase font-bold">Gentle Reminders</h3>
            <div className="flex flex-col gap-5 mx-2">
                <p className="text-center rounded-2xl bg-rose-400 glass p-4 text-white">
                    We'd like to keep our wedding solemn & intimate with the most 
                    important people in our lives. Our guests are limited and 
                    hand picked on purpose. We kindly request to not bring 
                    uninvited guest or tag-along companies may they be an adult or kids.
                </p>

                <div>
                    <h4 className="font-oranienbaum text-rose-400 font-bold text-base">Snap and Share</h4>
                    <p>
                        Capture the love after our unplugged ceremony! Share your 
                        wedding photos!
                    </p>
                </div>

                <div>
                    <h4 className="font-oranienbaum text-rose-400 font-bold text-lg">FAQs</h4>
                    <div className="flex flex-col gap-2">
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 gap-2">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title font-semibold">What if I did not RSVP but will attend the wedding?</div>
                            <div className="collapse-content text-sm">
                                NO RSVP = NO SEAT. We will assign your 
                                seats so we strongly suggest you do the RSVP on or before November 10, 2025 
                                or you may contact and inform us ahead of time. In any case that you may have 
                                said Yes in our RSVP but suddenly won’t be able to attend, please let us know 
                                ASAP so we can accommodate any changes.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">When should we arrive at the venue?</div>
                            <div className="collapse-content text-sm">
                                The ceremony will strictly start at 4:00PM. Entourage will march by 3:30 PM. 
                                Please be at the venue at least 10-15 minutes before 3:30 PM.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">When can we leave?</div>
                            <div className="collapse-content text-sm">
                                The program is estimated to last until 9PM. We are hoping that you 
                                will stay with us until the end of program. Should you wish to leave earl, 
                                we’d love to personally thank you and bid goodbye before you go perhaps 
                                not until the same day video played.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">Can we sit anywhere during reception?</div>
                            <div className="collapse-content text-sm">
                                NO. It took us  a lot of effort and discussion to finish the seating arrangement 
                                which is planned for everyone’s convenience & network preference.
                                So, no need to worry. You’ll be surely seated along with your group of friends.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}