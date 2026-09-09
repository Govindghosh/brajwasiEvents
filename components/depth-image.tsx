import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type DepthImageProps = { src: string; alt: string; label?: string; priority?: boolean; className?: string };
export function DepthImage({ src, alt, label, priority = false, className = "" }: DepthImageProps) {
  return <div className={`depth-frame ${className}`}><div className="depth-frame__shadow" /><div className="depth-frame__image"><Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" priority={priority} /></div><div className="depth-frame__edge depth-frame__edge--one" /><div className="depth-frame__edge depth-frame__edge--two" />{label ? <div className="depth-frame__label"><span>{label}</span><ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></div> : null}</div>;
}
