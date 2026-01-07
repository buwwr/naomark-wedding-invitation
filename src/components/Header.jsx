export default function Header() {
     return (

      <>
      <header className="bg-img-header bg-cover bg-center">
        <div className="flex justify-center pb-2">
          <div className="flex flex-col justify-center items-center text-center gap-2.5">
              <div className="w-50 pt-20">
                <p className="font-sans uppercase tracking-tight leading-none text-gray-900 font-semibold text-sm">
                  With love in their hearts and family by their side 
                </p>
              </div>
              
              <h1 className="flex flex-col gap-2.5">
                <p className=" text-rose-400">
                  <span className="text-6xl font-meaculpa">Naomi</span>
                  <span className="block text-2xl font-bold font-oranienbaum uppercase tracking-widest">Rachelle</span>
                </p>

                <p className="text-gray-900 text-4xl font-meaculpa">&</p>

                <p className=" text-rose-400">
                  <span className="text-6xl font-meaculpa">Mark</span>
                  <span className="block text-2xl font-bold font-oranienbaum uppercase tracking-widest">Angelo</span>
                </p>
              </h1>

              <div className="w-50">
                <p className="font-sans uppercase tracking-tight leading-none text-gray-900 font-semibold text-sm">
                  Request the honor of your presence at their wedding 
                </p>
              </div>

              <div className="flex gap text-xl font-oranienbaum font-semibold tracking-wide uppercase text-gray-900">
                  <p className="border border-gray-900 border-r-0 p-1.5">Feb 15th</p>
                  <p className="border border-gray-900 p-1.5">10:30 AM</p>
              </div>

              <div className="glass rounded-xl px-5 py-2 font-sans uppercase tracking-tight leading-none text-gray-900 font-semibold text-sm">
                <p className=" text-base">The Pace</p>
                <p>Ilang Ilang, Sta. Rosa 2</p>
                <p>Marilao, Bulacan, Philippines</p>
              </div>
          </div>
        </div>
      </header>

      </>
    )
}