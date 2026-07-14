import Link from "next/link";
export default function NotFound() { return <section className="not-found shell"><span>404</span><h1>This signal was not found.</h1><p>The page may have moved, but the work is still here.</p><Link className="button button-primary" href="/work">Return to work</Link></section>; }
