import {useEffect,useState} from 'react';import{Route,Routes,useLocation}from'react-router-dom';
import {ToastHost,Sidebar,Topbar} from './components/Layout.jsx';
import {Landing,AuthPage} from './pages/PublicPages.jsx';
import {Dashboard,Events,MembershipPage,Workspace,People,Manage} from './pages/ClubPages.jsx';
import {useSession} from './session.js';
function App(){const session=useSession(),loc=useLocation();return <div className="app-shell">{session.user?<><Sidebar user={session.user} signOut={session.signOut}/><main className="main-shell"><Topbar user={session.user} signOut={session.signOut}/><div className="page-wrap"><Routes><Route path="/" element={<Dashboard {...session}/>}/><Route path="/events" element={<Events {...session}/>}/><Route path="/membership" element={<MembershipPage {...session}/>}/><Route path="/workspace" element={<Workspace {...session}/>}/><Route path="/people" element={<People {...session}/>}/><Route path="/manage" element={<Manage {...session}/>}/><Route path="*" element={<Dashboard {...session}/>}/></Routes></div></main></>:<Routes><Route path="/login" element={<AuthPage mode="login" signIn={session.signIn}/>}/><Route path="/register" element={<AuthPage mode="register" signIn={session.signIn}/>}/><Route path="*" element={<Landing/>}/></Routes>}<ToastHost key={loc.pathname}/></div>}
export default App;
