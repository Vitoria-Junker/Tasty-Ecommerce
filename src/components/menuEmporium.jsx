"use client";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function MenuEmporium () {

    const pathname = usePathname()

    //verificar se a rota atual corresponde à rota do link
    const isActive = (href) => {
        return pathname === href ? "shadow-2" : "";
    };
  
    return (
            <div className="w-full px-6 md:px-20">
                <ul className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-20 px-6 pt-14 pb-8 md:px-20 text-2xl text-brown border-b border-brown ">
                    <li className='hover:scale-90 transition-transform ease-in-out duration-300'>
                        <Link href="/emporium"  >
                            <span className={isActive("/emporium")}>Todos</span>
                        </Link>
                    </li>
                    <li className='hover:scale-90 transition-transform ease-in-out duration-300'>
                        <Link href="/emporium/vinhos" >
                            <span className={isActive("/emporium/vinhos")}>Vinhos</span>
                        </Link>
                    </li>
                    <li className='hover:scale-90 transition-transform ease-in-out duration-300'>
                        <Link href="/emporium/cervejas" >
                            <span className={isActive("/emporium/cervejas")}>Cervejas</span>
                        </Link>
                    </li>
                    <li className='hover:scale-90 transition-transform ease-in-out duration-300'>
                        <Link href="/emporium/cafe" >
                            <span className={isActive('/emporium/cafe')}>Café Especial</span>
                        </Link>
                    </li>
                    <li className='hover:scale-90 transition-transform ease-in-out duration-300'>
                        <Link href="/emporium/pizza" className={isActive("/emporium/pizza")}>
                            <span>Pizzas</span>
                        </Link>
                    </li>
                    <li className='hover:scale-90 transition-transform ease-in-out duration-300'>
                        <Link href="/emporium/queijos" className={isActive("/emporium/queijos")}>
                            <span>Queijos</span>
                        </Link>
                    </li>
                </ul>
            </div>
    )
}
  