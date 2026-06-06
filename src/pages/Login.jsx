import { useAuth } from '../hooks/useAuth';
import LoginButton from '../components/LoginButton';
import { UserContext } from '../context/UseContext';
import { useContext } from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const { user, loading } = useAuth();
  const {connectedUser, setConnectedUser} = useContext(UserContext);
  useEffect(()=>{
        if(user){
            setConnectedUser(user);
          }
          console.log(connectedUser)
  },[user]);

    if(connectedUser){
        return <Navigate to ="/" replace/>
    }
  if (loading) return <p>Chargement...</p>;

  return (
    <div>
        <LoginButton />
    </div>
  );
}