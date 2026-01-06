import top from "../assets/top.jpg"

export default function Header() {
     return (
      <header className="bg-white bg-center bg-cover min-h-100">
        <img src={top} className="mx-auto"/>
        <div className="px-2 my-4 flex flex-col justify-center items-center text-l gap-5 font-abhaya uppercase">
          
          <p className="w-55 text-center leading-tight text-gray-900">We invite you to celebrate our wedding</p>
          
          <h1 className="flex flex-col items-center font-parisienne">
            <span className="text-6xl  text-rose-400 font-parisienne capitalize">Naomi</span>
            <span className="text-3xl  text-rose-400">&</span>
            <span className="text-6xl text-rose-400 capitalize">Mark</span>
          </h1>

          <div>
            <p className="grid grid-flow-col auto-cols-max items-center gap-1 p-2 text-xl">
              <span>February</span>
              <span className="text-5xl text-rose-400 border-y-2 rounded-md p-3">15</span> 
              <span>10:30 AM</span>
            </p>
            <p className="text-center">The Pace - Marilao</p>
          </div>
          
        </div>
      </header>
    )
}


// h-118.25