import { CheckCircle2 } from 'lucide-react';

export function Loading() {
  return <div className="loading-state"><span className="loading-dot"/><span className="loading-dot"/><span className="loading-dot"/><p>Getting your space ready…</p></div>;
}

export function Empty({ icon: Icon, title, body }) {
  return <div className="empty-state"><span className="empty-icon"><Icon size={19}/></span><b>{title}</b><p>{body}</p></div>;
}

export function ErrorCard({ text }) {
  return <div className="form-error page-error">{text}. Try refreshing the page.</div>;
}

export function Toast({ message }) {
  return <div className="toast"><CheckCircle2 size={17}/>{message}</div>;
}
