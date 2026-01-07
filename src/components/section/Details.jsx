
import pairLight from '../../assets/pair light.png'
import pairDark from '../../assets/pair dark.png'
import venue from '../../assets/venue-3.jpg'
import flowerDivider from '../../assets/divider-2.png'
import flowerDivider3 from '../../assets/divider-3.png'
import qrBpi from '../../assets/images/qr_bpi.jpg'
import qrMaya from '../../assets/images/qr_maya.jpg'
import qrRcbc from '../../assets/images/qr_rcbc.jpg'
import qrUb from '../../assets/images/qr_ub.jpg'

export default function Details() {
    return (
        <>
        
        <section className="bg-[#f8eae1] px-2 flex flex-col gap-2">
            <h3 className="font-oranienbaum text-center text-rose-400 text-6xl uppercase font-bold">Finer Details</h3>
            
            <div className="font-sans text-gray-900 flex flex-col text-center text-sm gap-2">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-2xl">Dress Code</h4>
                <p>
                    Gentlemen: Suit and Tie / Long Sleeve and Slacks
                    <span className="block">Ladies: Long Gown/ Dress</span>
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
                <p>
                    Please come in your formal attire. 
                    <span className="block">We encourage you to dress according to our motif.</span>
                </p>
            </div>
        </section>

        <section className="bg-[#f8eae1] font-sans text-gray-900 text-sm flex flex-col justify-center gap-2 px-5 py-2">
            <img src={flowerDivider} className="w-80 self-center py-2"/>
            <div className="text-center">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-2xl">Gift Guide</h4>
                <p>With all that we have, we've been truly blessed. Your presence and prayers are all that we request. But if you desire to give
                nonetheless, a monetary gift is the one we humbly suggest.</p>
                <div className="font-sans font-bold flex justify-center text-center gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <p>BPI</p>
                        <p>2209151173</p>
                        <p>NAOMI LAFUENTE</p>
                        <img src={qrBpi} className="w-20" alt="BPI QR Code"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>RCBC</p>
                        <p>0000007591208481</p>
                        <p>NAOMI LAFUENTE</p>
                        <img src={qrRcbc} className="w-20" alt="RCBC QR Code" />
                    </div>
                </div>
                <div className="font-sans font-bold flex justify-center text-center gap-2 mt-2">
                    <div className="flex flex-col justify-center items-center">
                        <p>UNIONBANK</p>
                        <p>109660283268</p>
                        <p>NAOMI LAFUENTE</p>
                        <img src={qrUb} className="w-20" alt="UB QR Code" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>MAYA</p>
                        <p>09489167721</p>
                        <p>MARK ANGELO ONG</p>
                        <img src={qrMaya} className="w-20" alt="Maya QR Code" />
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-[#f8eae1] font-abhaya text-gray-900 text-sm py-2 px-2 flex flex-col gap-2">
            <img src={flowerDivider} className="w-80 self-center py-2"/>            
            <div className="text-center">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-2xl">Wedding Program</h4>
                <ul>
                    <li className="flex justify-center gap-5 text-lg mt-2">
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
        
        <section className="bg-[#f8eae1] font-sans text-base p-2 flex flex-col gap-2">
            <img src={flowerDivider} className="w-80 self-center py-2"/>            
            <div className="flex flex-col justify-center items-center text-center gap-2">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-2xl">Venue</h4>
                <img src={venue} className="rounded" alt="Venue The Pace" />
                <p className="text-gray-900">
                    <span className="font-bold">The Pace - Marilao, Bulacan</span>
                    <span className="block">Ilang Ilang, Sta. Rosa 2, Marilao, Philippines</span>
                </p>
                <a href="https://maps.app.goo.gl/sJiLweUQ5wetNoKY7" className="btn btn-primary font-sans uppercase">Open in Google Maps</a>
            </div>
        </section>
        
        <section className="bg-[#f8eae1] text-lg p-2 flex flex-col gap-2">
            <img src={flowerDivider} className="w-80 self-center py-2"/>                 
            <div className="text-center text-gray-900">
                <h4 className="font-oranienbaum text-rose-400 font-bold text-2xl">Entourage</h4>
                <ul className="pt-2 text-center flex flex-col gap-5 text-sm">
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

                    <li >
                        <div className="flex justify-center gap-5">
                            <div className="flex flex-col items-end">
                                <span className="font-bold uppercase text-rose-400">Bridesmaids</span>
                                <span>Sharwina Gonzales-Lafuente</span>
                                <span>Michelle Recaña</span>
                                <span>Ruth Hernandez</span>
                                <span>Kris Anne Myles Ong</span>
                                <span>Princess Ong</span>
                                <span>Juliana Marie Buco</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-bold uppercase text-rose-400">Groomsmen</span>
                                <span>James Emmanuelle Lafuente</span>
                                <span>Glenn Michael Marzo</span>
                                <span>Mark Anthony Algoso</span>
                                <span>Vermidio Pollisco Jr</span>
                                <span>Ishmael Shem Lafuente </span>
                                <span>Christian Dave Buco</span>
                            </div>
                            
                        </div>            
                    </li>
                    
                    <img src={flowerDivider3} className="w-60 self-center"/>   

                    <li >
                        <span className="font-bold uppercase text-rose-400">Principal Sponsors</span>
                        <div className="flex justify-center gap-5">
                            <div className="flex flex-col items-end">
                                <span>Marlo Mercado</span>
                                <span>Jan Rafols</span>
                                <span>Ferdinand Porlaje</span>
                                <span>Edward Buco</span>
                                <span>Dionisio D. Villanueva</span>
                                <span>Efren Sandico</span>
                                <span>Rodrigo Tadifa</span>
                                <span>Ricky Sicat</span>
                                <span>Metosalem Sarmiento</span>
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
                                <span>Lilibeth Mercado</span>
                                <span>Johanna Rafols</span>
                                <span>Susana Porlaje</span>
                                <span>Adelaida Buco</span>
                                <span>Maria Teresa A.Villanueva</span>
                                <span>Arlene Sandico</span>
                                <span>Lelita Tadifa</span>
                                <span>Connie Sicat</span>
                                <span>Charyl Sarmiento</span>
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
                        </div>            
                    </li>

                    <img src={flowerDivider3} className="w-60 self-center"/>      
                    
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
                        <span>Vermidio Pollisco Jr</span>
                        <span>Glennis Lacson Galvez</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Cord</span>
                        <span>Ishmael Shem Lafuente</span>
                        <span>Ayissa Estanda Ferreras</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold uppercase text-rose-400">Wine Toasting</span>
                        <span>James Emmanuelle Lafuente </span>
                        <span>Sharwina Gonzales-Lafuente</span>
                    </li>           
                </ul>
            </div>
            
        </section>
        </>
    )
}