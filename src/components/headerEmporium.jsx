"use client"

import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function HeaderEmporium () {

    const router = useRouter();

    // Função para verificar se a rota atual corresponde à rota do link
    const isActive = (href) => {
      return router.pathname === href ? "text-blue-500 underline" : "";
    };
  

    return (
            <div className="w-full">
                <ul className="w-full flex gap-6 p-6">
                    <li>
                        <Link href="/emporium"  >
                            <span className={isActive("/emporium/")}>Todos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/emporium/vinhos" >
                            <span className={isActive("/emporium/vinhos")}>Vinhos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/emporium/cervejas" >
                            <span className={isActive("/emporium/cervejas")}>Cervejas</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/emporium/cafe" >
                            <span className={router.pathname === '/emporium/cafe' ? 'text-blue-500 underline' : ''}>Café Especial</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/emporium/pizza" className={isActive("/emporium/pizza")}>
                            <span>Pizzas</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/emporium/queijos" className={isActive("/emporium/queijos")}>
                            <span>Queijos</span>
                        </Link>
                    </li>
                </ul>
            </div>
    )
}
  