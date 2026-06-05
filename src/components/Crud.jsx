import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Crud = ({open, setOpen, user, setUser, setMessageServ, setIsLoading}) => {
    const contactForm = useForm();
    const url = import.meta.env.VITE_API_URL;

    const contactSubmit = async (data) =>{
        try {
            if(user){
                setIsLoading(true);
                const res = await axios.put(`${url}/api/v1/contacts/${data.id}`, data)
                console.log("message du serveur",res.data.data)
                setMessageServ(res.data.message);
            }
            else{
                const res = await axios.post(`${url}/api/v1/contacts`, data)
                console.log("message du serveur",res.data.data)
                setMessageServ(res.data.message);
            }   
            setOpen(false);
            setUser(null);
            contactForm.reset({
                                id:'',
                                nom:"",
                                tel: "",
                                email:"",
                                addresse:""
                            });
                            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setMessageServ(error.response.data.message);
            console.log(error.response?.data);        
        }
    }
    const submitDelete = async (id) =>{
        const res = await axios.delete(`${url}/api/v1/contacts/${id}`)
        console.log("message du serveur",res.data.message)
        setMessageServ(res.data.message);
        setUser(null);
        setOpen(false);

    }
    useEffect(()=>{
        if(user){
            console.log("userrrr",user)
        contactForm.reset({
            id: user.id,
            nom: user.nom,
            tel: user.tel,
            email: user.email,
            addresse: user.addresse 
        })
    }
    },[user])



  return (
      <div className={`w-full bg-black/90 h-screen fixed top-0  flex justify-center items-start 
        ${open ? 'visible' : 'invisible'}`}
        onClick={(e) => {
            if (e.target !== e.currentTarget) return; 
            setOpen(!open);
            contactForm.reset({
                                id:'',
                                nom:"",
                                tel: "",
                                email:"",
                                addresse:""
                            });
                            setUser(null)
        }}>
        <div className=" fixed top-5 lg:w-[400px] w-[300px] bg-white  lg:h-[500px] h-[400px] border-4 border-black shadow-[8px_8px_0px_0px_black] flex flex-col ">
            <h1 className="font-syne text-2xl self-center mt-2 text-center flex flex-row">Formulaire de contact</h1>
            <form className=" font-schoolbell flex flex-col mx-4 my-5 items-start  self-center" onSubmit={contactForm.handleSubmit(contactSubmit, (errors) => console.log("Erreurs de validation :", errors))}>
                <label htmlFor="" className="font-bold lg:text-[25px] text-[18px]">Nom :</label>
               {user && <input type="text" className=" hidden lg:text-[25px] text-[18px] border-b-2 border-black lg:w-80 w-60 "
                    {...contactForm.register("id")}/>} 
                <input type="text" className=" lg:text-[25px] text-[18px] border-b-2 border-black lg:w-80 w-60 "
                    {...contactForm.register("nom",{
                    required:true,
                })}/>
                 
                <label htmlFor="" className="font-bold lg:text-[25px] text-[18px]">Tel :</label>
                <input type="text" className=" lg:text-[25px] text-[18px] border-b-2 border-black lg:w-80 w-60 "
                    {...contactForm.register("tel",{
                    required:true,
                })}/>
                
                <label htmlFor="" className="font-bold lg:text-[25px] text-[18px]">Email :</label>
                <input type="text" className=" lg:text-[25px] text-[18px] border-b-2 border-black lg:w-80 w-60 "
                    {...contactForm.register("email",{
                    required:true,
                })}/>
                
                <label htmlFor="" className="font-bold lg:text-[25px] text-[18px]">Addresse :</label>
                <input type="text" className=" lg:text-[25px] text-[18px] border-b-2 border-black lg:w-80 w-60 "
                    {...contactForm.register("addresse",{
                    required:true,
                })}/>
                <div className=" flex flex-row gap-5  mt-5 ">
                    <input
                        value={`${user ?'Modifier' : 'Enregistrer'}`}
                        type="submit" className={`px-3 text-white py-1 border-2 border-black shadow-[5px_5px_0px_0px_black] cursor-pointer  text-[15px] lg:text-[20px] font-semibold bg-[#DA4848] hover:bg-[#f36666]
                    `}/>
                    <input
                        value="Annuler"
                        type="button" className="px-3 text-white py-1 border-2 border-black shadow-[5px_5px_0px_0px_black] cursor-pointer  text-[15px] lg:text-[20px] font-semibold bg-[#207077] hover:bg-[#44bdc8]"
                        onClick={()=> {setOpen(false);
                            contactForm.reset({
                                id:'',
                                nom:"",
                                tel: "",
                                email:"",
                                addresse:""
                            });
                            setUser(null);
                        }}
                        />
                        {user &&
                        <input
                            value="Supprimer"
                            type="button" className="px-3 text-white py-1 border-2 border-black shadow-[5px_5px_0px_0px_black] cursor-pointer  text-[15px] lg:text-[20px] font-semibold bg-[#c31e0c] hover:bg-[#c43d2d]"
                            onClick={()=> {
                                submitDelete(user.id);
                                contactForm.reset({
                                id:'',
                                nom:"",
                                tel: "",
                                email:"",
                                addresse:""
                            });
                                setUser(null);
                            }}
                        />}

                </div>    
            </form>
        </div>

      </div>
  )
}

export default Crud