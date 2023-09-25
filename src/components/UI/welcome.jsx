import Link from "next/link";
import Carousel from "./Carrousel";

export default function Welcome () {
    return (
        <div className="w-full bg-yellow flex flex-wrap">
            <div className="flex flex-col justify-center text-center custom:text-start custom:w-1/2 gap-12 p-12"
            
            >
                <div>
                    <h2 className=" leading-relaxed text-3xl md:text-5xl text-brown">
                        Bem vindo à nossa seleção cuidadosamente
                        curada de sabores excepcionais.
                    </h2>
                </div>
                <Link href="#">
                    <span className="bg-brown text-white p-3 w-56 h-10 rounded-xl hover:bg-brown/90">
                        Conheça nossos produtos
                    </span>
                </Link>
            </div>
            <div className="w-full custom:w-1/2 ">
                 <Carousel /> 
            </div>
        </div>
    )
}