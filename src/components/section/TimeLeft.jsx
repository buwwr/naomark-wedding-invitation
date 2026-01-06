import { useCase } from 'react'
import Countdown from 'react-countdown'

export default function TimeLeft() {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
            <section>
                <div className="font-serif card glass bg-rose-300 p-2.5 m-2">
                    <h2 className="text-center text-4xl font-oranienbaum text-rose-900">The Big Day Is Here!</h2>
                </div>
            </section>
            )
        } else {
            return (
            <section>
                <div className="font-abhaya card glass bg-rose-300 p-2.5 m-2">
                    <div className="grid grid-flow-col auto-cols-max gap-3 md:gap-5 text-center justify-center">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-4xl md:text-5xl">
                            <span style={{"--value":days, "--digits": 2}} aria-live="polite" aria-label={days}>{days}</span>
                        </span>
                        DAYS
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-4xl md:text-5xl">
                            <span style={{"--value":hours, "--digits": 2}} aria-live="polite" aria-label={hours}>{hours}</span>
                        </span>
                        HRS
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-4xl md:text-5xl">
                            <span style={{"--value":minutes, "--digits": 2}} aria-live="polite" aria-label={minutes}>{minutes}</span>
                        </span>
                        MIN
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-4xl md:text-5xl">
                            <span style={{"--value":seconds, "--digits": 2} } aria-live="polite" aria-label={seconds}>{seconds}</span>
                        </span>
                        SEC
                        </div>
                    </div>
                </div>
            </section>
            )
        }
    }


    return (
        <Countdown date={new Date("2026-02-15T10:30:00")} renderer={renderer} />
    )
}
