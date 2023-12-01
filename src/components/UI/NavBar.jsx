import Link from "next/link";
import styles from '../../app/globals.css'

export default function Menu () {
    return (
        <div className="w-full custom:hidden">
                <ul className="flex justify-center gap-6 font-semibold mt-8 text-brown">
                    <li>
                        <Link href="/" >
                            <span className="menu-i text-base transition-transform px-2 rounded">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/emporium" >
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