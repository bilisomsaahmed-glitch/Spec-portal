import {useEffect,useState} from 'react';
import { request } from './shared.js';
function useSession(){const[user,setUser]=useState(()=>{try{return JSON.parse(localStorage.getItem('club-user'))}catch{return null}}),[token,setToken]=useState(()=>localStorage.getItem('club-token'));const signIn=(data)=>{localStorage.setItem('club-token',data.token);localStorage.setItem('club-user',JSON.stringify(data.user));setToken(data.token);setUser(data.user)};const signOut=()=>{localStorage.removeItem('club-token');localStorage.removeItem('club-user');setToken(null);setUser(null)};useEffect(()=>{if(token)request('/auth/me',{token}).then(x=>setUser(x.user)).catch(signOut)},[]);return{user,token,signIn,signOut}}
export {useSession};
