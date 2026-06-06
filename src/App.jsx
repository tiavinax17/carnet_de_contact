import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from './context/UseContext';
import { ContactContext } from './context/ContactContext';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [messageServ, setMessageServ] = useState(null)
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [connectedUser, setConnectedUser] = useState(null);

  
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

  return(
    <ContactContext.Provider
      value={{
      contacts,
      setContacts,
      open,
      setOpen,
      user,
      setUser,
      messageServ,
      setMessageServ,
      setIsLoading,
      isLoading
    }}>
      <UserContext.Provider 
      value={{
        connectedUser, 
        setConnectedUser, 
        isLoading,
        setIsLoading
      }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ContactContext.Provider>
  )
}

export default App
