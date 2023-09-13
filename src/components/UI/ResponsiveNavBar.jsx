import Link from "next/link";
import styles from '../../app/globals.css'

import NavBar from "./NavBar";

export default function () {

    return (
        <div className="mt-8 flex items-center justify-center">
                
                <ul className="hidden custom:flex gap-6 font-semibold text-brown">
                    <li>
                        <Link href="#" >
                            <span className="menu-i text-base transition-transform px-2 rounded">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" >
                            <span className="menu-i text-base transition-transform px-2 rounded">
                                Empório
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" >
                            <span className="menu-i text-base transition-transform px-2 rounded">
                                Blog
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
    )
}