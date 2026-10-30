import { Code2, Terminal, GraduationCap } from 'lucide-react';
const API='/api'; export const DIVS=['Development','Competitive Programming','Capacity Building'];export const iconFor={Development:Code2,'Competitive Programming':Terminal,'Capacity Building':GraduationCap};export const colorFor={Development:'mint','Competitive Programming':'lavender','Capacity Building':'peach'};
export async function request(path,{token,...opts}={}){const res=await fetch(API+path,{...opts,headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`} :{}),...opts?.headers}});const data=await res.json().catch(()=>({}));if(!res.ok)throw Error(data.message||'Something went wrong');return data}
export const toast=msg=>window.dispatchEvent(new CustomEvent('club-toast',{detail:msg}));
export function roleName(role='student'){return({student:'Student',member:'Club member',division_leader:'Division lead',executive:'Club executive',admin:'System admin'})[role]||role}
export function canManage(user){return ['admin','executive','division_leader'].includes(user.role)}
