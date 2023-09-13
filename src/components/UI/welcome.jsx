import Link from "next/link"

export default function Welcome () {
    return (
        <div className="w-full bg-yellow flex flex-wrap">
            <div className="flex flex-col justify-center items-center md:w-1/2 gap-12 p-12"
            
            >
                <div>
                    <h2 className="text-center md:text-start leading-relaxed text-3xl md:text-5xl text-brown">
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
            <div className="md:w-1/2 ">
                <img src="pizza.svg"/>
            </div>
        </div>
    )
}