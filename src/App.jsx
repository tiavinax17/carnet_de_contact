import Carnet from "./components/Carnet";
import ButtonAdd from "./components/ButtonAdd";
import Crud from "./components/Crud";
import { useEffect, useState } from "react";

function App() {
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
          Loading ...
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

  return (
    <div className="h-screen flex flex-col items-center justify-start pt-3 gap-5 overflow-hidden"
    style={{
      backgroundImage: 'url("pattern.svg")'
    }}>
      <div className="py-3 px-5 border-4 border-black bg-[#DA4848] shadow-[8px_8px_0px_0px_black]">
        <h1 className="font-syne text-4xl font-extrabold text-white">
          Mon carnet de contact :)
        </h1>      
      </div>
      {/* <Carnet isLoading={isLoading} setIsLoading = {setIsLoading}/> */}
      <Carnet user={user} setUser={setUser} open={open} setOpen={setOpen} contacts={contacts} setContacts={setContacts} setIsLoading={setIsLoading} />
      <ButtonAdd open={open} setOpen={setOpen}/>
      <Crud open={open} setOpen={setOpen} user={user} setUser={setUser} messageServ={messageServ} setMessageServ={setMessageServ} setContacts ={setContacts} />
        {messageServ && 
            <div className=" font-schoolbell -mr-40 fixed top-[550px] w-[300px] bg-pink-200 border-4 border-black shadow-[8px_8px_0px_0px_black]  text-[15px] px-2">
                <h1 className="text-xl font-semibold">Message su serveur:</h1>
                <p>{messageServ}</p>
                
            </div>
        }
    </div>
  )
}

export default App
