import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";
export function FAQ() { return <div className="faq-list">{site.faqs.map((faq) => <details className="faq-item" key={faq.question}><summary><span>{faq.question}</span><ChevronDown size={19} strokeWidth={1.7} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>; }
