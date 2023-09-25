import Link from "next/link"

export default function VisiteBlog () {
    return (
        <div className="w-full p-10 my-8 ">
            <div className="w-full flex flex-wrap bg-bege rounded-xl">
                <div className="custom:w-1/2 ">
                    <img src="chemex-min.svg" className="rounded-xl"/>
                </div>
                <div className="flex flex-col justify-center items-end custom:w-1/2 gap-4 text-end p-12">
                    <h1 className="text-2xl">Você sabe o que é café especial?</h1>
                    <p>
                    Café especial é simplesmente café de verdade, nada de galhos ou frutos podres.
                    É cada frutinha e cada grão selecionado a mão.
                    Suas características podem incluir 
                    aromas e sabores dos mais distintos, acidez, corpo e finalização muito superiores em comparação com os cafés "tradicionais".
                    O café especial é produzido com cuidado extra, desde o cultivo até 
                    a xícara, e é geralmente cultivado em condições ideais, colhido no momento 
                    certo da maturação e processado com atenção aos detalhes [...]
                    </p>
                    
                    <Link href="#" className="mt-12">
                        <span className="bg-brown text-white  p-3 w-56 h-10 rounded-xl hover:bg-brown/90">
                            Quer saber mais?  Visite o nosso blog! 
                        </span>
                    </Link>
                </div>

            </div>
            <div></div>
        </div>
    )
}