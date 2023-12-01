import Link from "next/link";
import Card from "./cardHome";

export default function Cards () {
    return (
        <div className="w-full my-14">
            <ul className="p-8 flex flex-wrap gap-6 w-full justify-center font-semibold text-lg">
                <Card imageUrl="coffeee.svg" text="Café especial" linkUrl="#" />
                <Card imageUrl="beer.svg" text="Cervejas" linkUrl="#" />
                <Card imageUrl="pizza.svg" text="Pizza Artesanal" linkUrl="#" />
                <Card imageUrl="cup.svg" text="Vinhos" linkUrl="#" />
                <Card imageUrl="cheese.svg" text="Queijos" linkUrl="#" />
                <Card imageUrl="drink.svg" text="Bebidas" linkUrl="#" />
            </ul>
        </div>
    )
}