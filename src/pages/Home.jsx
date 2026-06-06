import Carnet from "../components/Carnet";
import { useContext } from 'react'
import ButtonAdd from "../components/ButtonAdd";
import Crud from "../components/Crud";
import { Navigate } from "react-router-dom";
import { UserContext } from '../context/UseContext';
import { ContactContext } from "../context/ContactContext";
import {Power} from "lucide-react";
import { useAuth } from '../hooks/useAuth';


const Home = () => {
    const { messageServ } = useContext(ContactContext);
    const {connectedUser} = useContext(UserContext);
      const { logout } = useAuth();
    if(!connectedUser){
        return <Navigate to ="/login" replace/>
    }

 return (
    <div className="h-screen flex flex-col items-center justify-start pt-3 gap-5 overflow-hidden"
      style={{
        backgroundImage: 'url("pattern.svg")'
      }}>
      <div className=" flex lg:flex-row flex-col gap-5">
        <div className="py-3 px-5 border-4 lg:w-[750px] w-[300px] border-black bg-[#DA4848] shadow-[8px_8px_0px_0px_black]">
          <h1 className="font-syne lg:text-4xl text-[20px]   font-extrabold text-white">
            Mon carnet de contact :)
          </h1>      
        </div>
        <div className="flex flex-row p-2 border-4 border-black shadow-[8px_8px_0px_0px_black] bg-white gap-2">
          <img src={connectedUser.avatar_url} alt="user profile picture"  className="h-[50px] w-[50px]" />
          <div>
            <h1 className="font-schoolbell text-[15pxpx]">{connectedUser.display_name}</h1>
            <button  onClick={logout} className="border-2 border-black shadow-[2px_2px_0px_0px_black] bg-red-500 text-white p-1" title="Se deconnecter"><Power size={20}/></button>
          </div>
        </div>
      </div>
      
      <Carnet/>
      <ButtonAdd />
      <Crud />
        {messageServ && 
            <div className=" font-schoolbell lg:-mr-40 -mr-20 fixed top-[550px] w-[300px] bg-pink-200 border-4 border-black shadow-[8px_8px_0px_0px_black]  text-[15px] px-2">
                <h1 className="text-xl font-semibold">Message su serveur:</h1>
                <p>{messageServ}</p>
                
            </div>
        }
    </div>
  )
}

export default Home