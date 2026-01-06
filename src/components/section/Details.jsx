
import pairLight from '../../assets/pair light.png'
import pairDark from '../../assets/pair dark.png'
import venue from '../../assets/venue-3.jpg'
import flowerDivider from '../../assets/divider.png'

export default function Details() {
    return (
        <>
        
        <section className="bg-img-mid bg-center bg-cover my-2 px-2 flex flex-col gap-2">
            <h3 className="font-oranienbaum text-center text-rose-400 text-4xl uppercase font-bold">Finer Details</h3>
            
            <div className="font-abhaya flex flex-col text-center text-sm gap-2">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-lg">Dress Code</h4>
                <p>
                    Gentlemen: Suite and Tie / Long Sleeve and Slacks
                    Ladies: Long Gown/ Dress
                </p>
                <div className="flex justify-center gap-4">
                    <div className="flex flex-col justify-center items-center">
                        <img src={pairLight} className="w-30" alt="Pair Light"/>
                        <div className="flex gap-2 font-bold">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-[#D58A94]"></div>
                                <p>Dusty Pink</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-[#D3D3D3]"></div>
                                <p>Light Gray</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={pairDark} className="w-30" alt="Pair Dark"/>
                        <div className="flex gap-2 font-bold">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-[#C08081]"></div>
                                <p>Old Rose</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-[#B8B9B6]"></div>
                                <p>Silver Gray</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Please come in your formal attire. We encourage you to dress according to our motif.</p>
            </div>
        </section>

        <section className="font-abhaya text-sm my-2 px-2 flex flex-col gap-2">
            <img src={flowerDivider} className="w-50 self-center"/>
            <div className="text-center my-2">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-lg">Gift Guide</h4>
                <p>With all that we have, we've been truly blessed. Your presence and prayers are all that we request. But if you desire to give
                nonetheless, a monetary gift is the one we humbly suggest.</p>
                <div className="font-sans font-bold flex justify-center text-center gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <p>BPI</p>
                        <p>2209151173</p>
                        <p>NAOMI LAFUENTE</p>
                        <img src="./qr_bpi.jpg" className="w-20" alt="BPI QR Code"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>RCBC</p>
                        <p>0000007591208481</p>
                        <p>NAOMI LAFUENTE</p>
                        <img src="./qr_rcbc.jpg" className="w-20" alt="RCBC QR Code" />
                    </div>
                </div>
                <div className="font-sans font-bold flex justify-center text-center gap-2 mt-2">
                    <div className="flex flex-col justify-center items-center">
                        <p>UNIONBANK</p>
                        <p>109660283268</p>
                        <p>NAOMI LAFUENTE</p>
                        <img src="./qr_ub.jpg" className="w-20" alt="UB QR Code" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>MAYA</p>
                        <p>09489167721</p>
                        <p>MARK ANGELO ONG</p>
                        <img src="./qr_maya.jpg" className="w-20" alt="Maya QR Code" />
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-img-mid bg-center bg-cover font-abhaya text-sm my-2 px-2 flex flex-col gap-2">
            <img src={flowerDivider} className="w-50 self-center"/>
            <div className="text-center my-2">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-lg">Wedding Program</h4>
                <ul>
                    <li className="flex justify-center gap-5">
                        <div className="flex flex-col items-end">
                            <span>10:30 AM</span>
                            <span>11:00 AM</span>
                            <span>12:30 PM</span>
                            <span>1:30 PM</span>
                            <span>2:00 PM</span>
                        </div>
                        <div className="flex flex-col items-start uppercase">
                            <span>Formation of Entourage</span>
                            <span>Ceremony</span>
                            <span>Lunch & Photos Session</span>
                            <span>First Dance / Speeches</span>
                            <span>Party</span>
                        </div>
                    </li>
                  
                </ul>
            </div>
        </section>
        
        <section className="font-abhaya text-sm my-2 px-2 flex flex-col gap-2">
            <img src={flowerDivider} className="w-50 self-center"/>
            <div className="flex flex-col justify-center items-center text-center">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-lg">Venue</h4>
                <img src={venue} className="rounded" alt="Venue The Pace" />
                <p>The Pace | Marilao, Bulacan</p>
                <p>Ilang Ilang, Sta. Rosa 2, Marilao, Philippines</p>
                <a href="https://maps.app.goo.gl/sJiLweUQ5wetNoKY7" className="btn btn-primary font-sans">Open in Google Maps</a>
            </div>
        </section>
        
        <section className="font-abhaya text-sm my-2 px-2 flex flex-col gap-2">
            <img src={flowerDivider} className="w-50 self-center"/>
            <div className="text-center my-2">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-lg">Entourage</h4>
                <ul className="text-center flex flex-col gap-5 text-sm">
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Parents of the Bride</span>
                        <span>Roberto Lafuente & Lita Lafuente</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Parents of the Groom</span>
                        <span>Melecio Ong Jr. & Marilyn Ong</span>
                    </li>
               
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Matron of Honor</span>
                        <span>Ruth Abigail Lafuente-Marzo</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Best Man</span>
                        <span>Christian Ong</span>
                    </li>
                    
                    <li className="flex flex-col justify-center">
                        <span className="font-bold uppercase text-rose-400">Principal Sponsors</span>
                        <span>Marlo Mercado & Lilibeth Mercado</span>
                        <span>Johanna Rafols & Jan Rafols</span>
                        <span>Ferdinand Porlaje & Susana Porlaje</span>
                        <span>Edward Buco & Adelaida Buco</span>
                        <span>Dionisio D. Villanueva & Maria Teresa A.Villanueva</span>
                        <span>Efren Sandico & Arlene Sandico</span>
                        <span>Lelita Tadifa & Rodrigo Tadifa</span>
                        <span>Connie Sicat & Ricky Sicat</span>
                        <span>Metosalem Sarmiento & Charyl Sarmiento</span>
                    </li>
                    <li className="flex justify-center gap-5">
                        <div className="flex flex-col items-end">
                            <span>Allan Cruz</span>
                            <span>Romeo Sorillo</span>
                            <span>Nimrod Montaño</span>
                            <span>Nimrod Mogar</span>
                            <span>Hope Salarda</span>
                            <span>Agustin Jabay</span>
                            <span>Nadje Mediavilla</span>
                            <span>Hernani Siendo</span>
                            <span>Elmer Quitco</span>
                            <span>Anthony Cabute</span>
                            <span>Alfred Mapas</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <span>Noemi Tanquerido</span>
                            <span>Marilyn Mañalac</span>
                            <span>TeresitaTacderan</span>
                            <span>Teresita Lockwood</span>
                            <span>Adoracion Bautista</span>
                            <span>Grace Zaldua</span>
                            <span>Lorenza Aguilar</span>
                            <span>Estela Candava</span>
                            <span>Elvie Ancheta</span>
                            <span>Dolores Del Rosario</span>
                            <span>Lily Josue-Fajardo</span>
                            <span>Jinky Siendo</span>
                        </div>
                    </li>
                    
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Flower Girl</span>
                        <span>Natalia Ysabelle Navarro</span>
                        <span>Brielle Sarah Asaldo</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Bible Bearer</span>
                        <span>Magnus Treivor Ferreras</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Coin Bearer</span>
                        <span>Prince Jayce Gonzalez</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Ring Bearer</span>
                        <span>Aisha Allah Saber Clarito Abdalla</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Veil</span>
                        <span>Glenn Michael Marzo</span>
                        <span>Dina Emmanuel</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Candle</span>
                        <span>Vermidio Pollisco</span>
                        <span>Glennis Lacson Galvez</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Cord</span>
                        <span>Ishmael Shem Lafuente </span>
                        <span>Ayissa Estanda Ferreras</span>
                    </li>                
                </ul>
            </div>
            
        </section>
        </>
    )
}