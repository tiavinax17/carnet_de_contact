// components/LoginButton.jsx

import OrangeLogo from "../images/orangeLogo.png";
import GoogleLogo from "../images/googleLogo.jpeg";

export default function LoginButton() {
  const url = import.meta.env.VITE_API_URL;

  const handleLogin = () => {

    window.location.href = `${url}/auth/google`;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start pt-3 gap-5 overflow-hidden"
      style={{
        backgroundImage: 'url("pattern.svg")'
      }}>
        <div className="w-[500px] text-center">
          <h1 className="font-syne text-2xl text-black inline-flex">
            Bienvenue sur mon petit projet !</h1>
              <div className="flex flex-col text-justify font-schoolbell text-[18px] font-semibold text-blue-950 ">
                <p>Ceci est le projet de fin de la formation developpement web full-stack React js + Express js + PgSql avec l'Orange Digital Club Fianarantsoa !</p>
                <p>Liens github du project: <a href="https://github.com/tiavinax17/carnet_de_contact.git" className="underline text-green-600">Frontend </a>
                <a href="https://github.com/tiavinax17/carnet_de_contact_backend.git" className="underline text-red-600"> Backend</a></p>
              </div>
            
        </div>
        <div className="w-[400px] h-[230px] bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 flex flex-col items-center justify-between">
          <h1 className="font-schoolbell font-bold text-[20px] text-justify">Mon carnet de contact, regroupant les contacts de mes amis, familles, et personnes importantes pour moi :)</h1>

          <div className="cursor-pointer py-1 px-10 bg-[#DA4848]  border-4 border-black shadow-[5px_5px_0px_0px_black] flex flex-col" onClick={handleLogin}>
            <h1 className="font-syne font-bold text-white   text-[15px]">Se connecter </h1>
            <div className=" flex flex-row gap-5 items-center justify-center">
              <img src={OrangeLogo} alt="" className="h-[20px] w-[20px]" />
              <img src={GoogleLogo} alt="" className="h-[20px] w-[20px] " />
            </div>
          </div>
        </div>
      
    </div>

  );
}