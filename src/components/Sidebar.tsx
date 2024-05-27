'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'

import { links } from "../lib/utils";
import '@/styles/sidebar.scss';

const Sidebar: React.FC<{}> = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('/');
    const sectionRefs = useRef(new Map<string, HTMLElement>());

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setActiveLink(`#${entry.target.id}`);
            }
        }, { threshold: 0.7 });

        sectionRefs.current.forEach((sectionRef) => {
            if (sectionRef) observer.observe(sectionRef);
        });

        return () => {
            sectionRefs.current.forEach((sectionRef) => {
                if (sectionRef) observer.unobserve(sectionRef);
            });
        };
    }, []);


    useEffect(() => {
        links.forEach((link) => {
            sectionRefs.current.set(link.href, document.getElementById(link.href)!);
        });
    }, []);


    return (
        
        <div className="sidebar">
            
            <button className="nav-btn"></button>

            <ul className="sidebar__links">
                {links.map((link, index) => (

                    <li key={index}>
                        <Link href={`${link.href}`} className={activeLink === `${link.href}` ? "sidebar__link-active" : "sidebar__link"} onClick={() => setActiveLink(`${link.href}`)}>

                            {link.title}
                        </Link>

                    </li>

                ))}
            </ul>
            <div className="sidebar__backdrop" />
        </div>
    )
}

export default Sidebar;