"use client";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container site-header__inner"><Link className="brand" href="/" onClick={() => setOpen(false)} aria-label={`${site.name} home`}><span className="brand__mark">B</span><span className="brand__wordmark"><strong>Brajwasi</strong><small>Events</small></span></Link><nav className={`desktop-nav ${open ? "desktop-nav--open" : ""}`} aria-label="Primary navigation">{site.navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav><div className="site-header__actions"><a className="header-call" href={`tel:+91${site.phone}`} aria-label={`Call ${site.phoneDisplay}`}><Phone size={16} aria-hidden="true" /><span>Call</span></a><Link className="button button--small" href="/contact/">Start a brief</Link><button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button></div></div></header>;
}
