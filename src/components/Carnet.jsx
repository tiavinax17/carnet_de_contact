import { useEffect, useState } from "react";
import axios from 'axios';
import Avatar from "../images/avatar.jpeg";


const Carnet = ( {setUser, setOpen,open, contacts, setContacts, setIsLoading}) => {
    const url = import.meta.env.VITE_API_URL;
    const date = new Date();
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("asc");
    useEffect(()=>{
    const fetchData = async () =>{
        try {
            const res = await axios.get(url+"/api/v1/contacts");
            setContacts(res.data.data);
            console.log("Données reçues de l'API :", res.data.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    fetchData();
    },[])
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const res = await axios.get(url+"/api/v1/contacts");
                setContacts(res.data.data);
                console.log("Données reçues de l'API :", res.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[open]);
    const processedContacts = [...contacts]
        .filter(c =>
            c.nom.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
            order === "asc"
            ? a.nom.localeCompare(b.nom)
            : b.nom.localeCompare(a.nom)
    );

  return (
    <div className=" lg:w-[500px] lg:h-[580px] w-[350px] h-[520px] border-4 border-black  shadow-[8px_8px_0px_0px_black] bg-white gap-1 flex flex-col font-schoolbell">
        <div className="w-full h-[50px] flex flex-row gap-5 justify-center p-2">
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex ">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                      </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                      </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                      </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2"style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                </div>
            </div>
            <div className=" h-8 w-8 rounded-full bg-black overflow-hidden flex r">
                <div className=" h-6 w-6 bg-white rounded-full ml-2 mt-2" style={{
                        backgroundImage: 'url("pattern.svg")'
                        }}>
                </div>
            </div>
        </div>
        <div className="">
            <h2 className=" lg:text-xl text-[20px] ml-7 underline underline-offset-4">
                <span className="text-red-700">Aujourd'hui :</span> {date.toLocaleDateString('fr-FR')}
            </h2>
        </div>
        <div className="flex flex-row gap-3 mx-7">
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text" name="search" placeholder="Recherchez ici . . ."  
                className="border-2 px-1 border-black  lg:text-[20px] text-[15px] shadow-[2px_2px_0px_0px_black] lg:w-[300px] w-[150px]" />

            <button onClick={() => setOrder('asc')} className="  lg:text-[20px] text-[15px] px-3 bg-[#207077] text-white font-semibold border border-black shadow-[2px_2px_0px_0px_black] hover:bg-gray-500 hover:cursor-pointer">A-z</button>
            <button onClick={() => setOrder('desc')} className="  lg:text-[20px] text-[15px] px-3 bg-[#207077] text-white font-semibold border border-black shadow-[2px_2px_0px_0px_black] hover:bg-gray-500 hover:cursor-pointer">Z-a</button>
        </div>
        <div className="mx-8 overflow-scroll mt-2">
            <ul className="flex flex-col gap-1">
                { contacts && processedContacts.map((contact)=>(
                    <li className=" flex flex-col gap-2 hover:bg-gray-200 cursor-pointer"
                        key={contact.id}
                        onClick={()=>{
                            setUser({
                                id:contact.id,
                                nom: contact.nom,
                                tel: contact.tel,
                                email: contact.email,
                                addresse: contact.addresse,
                            });
                            setOpen(true);
                        }
                    }>
                
                        <div className=" flex flex-row gap-5">
                            <div>
                                <img src={Avatar} alt="" className="h-8 w-8"/>
                            </div>
                        <p className=" lg:text-[20px] text-[15px]">{contact.nom}</p>
                       </div>
                       <div className=" h-[1px] lg:w-[410px] w-[300px] bg-gray-800"/> 

                    </li>
                ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Carnet