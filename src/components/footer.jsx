import Link from "next/link";
import { BsInstagram } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import { TbMessageCircleHeart } from 'react-icons/tb'

export default function Footer () {
    return (
        <div className="w-full pt-16 pb-10 px-10 flex flex-col justify-center bg-cover items-center gap-10" style={{ backgroundImage: `url("bg-footer.svg")` }}>
            <div className="flex flex-col items-center text-center gap-2 text-brown">
                <h3 className="text-2xl font-medium">Sua opinião é importante!</h3>
                <p> Nos ajude a aprimorar sua visita ao Empório compartilhando 
                    suas ideias e feedbacks.
                </p>
            </div>
            <div className="flex flex-col gap-4 text-brown">
                <Link href="#">
                    <span className="flex gap-3 items-center">
                        <BsInstagram className="w-5 h-5"/>
                        @tastyemporium
                    </span>
                </Link>
                <Link href="#">
                    <span  className="flex gap-3 items-center">
                        <ImWhatsapp  className="w-5 h-5" />
                        (48) 3244-6165
                    </span>
                </Link>
                <Link  href="#">
                    <span  className="flex gap-3 items-center">
                        <TbMessageCircleHeart className="w-6 h-6"/>
                        arteNoPaladar@gmail.com
                    </span>
                </Link>
            </div>
            <span className="text-xs">© 2023 Vitória Junker. Todos os direitos reservados. </span>
        </div>
    )
}