import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Layouts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [messageServ, setMessageServ] = useState(null)
    const [contacts, setContacts] = useState([]);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null)
    
    const load = () =>{
    if(isLoading){
        return(
        <div className="h-screen flex flex-col items-center justify-center pt-3 gap-5 overflow-hidden"
            style={{
                backgroundImage: 'url("pattern.svg")'
            }}
            >
            <p className='text-20 font-bold'>Loading ...</p>
        </div>
        )
    }
    }
      
    useEffect(()=>{
    load();
    },[isLoading])

    useEffect(() => {
    if (!messageServ) return;

    const timer = setTimeout(() => {
        setMessageServ("");
    }, 3000);

    return () => clearTimeout(timer);
    }, [messageServ]);
           
        
    return <Outlet context={[isLoading, setIsLoading,messageServ,setMessageServ,contacts,setContacts,open,setOpen,user,setUser]} />
}

export default Layouts