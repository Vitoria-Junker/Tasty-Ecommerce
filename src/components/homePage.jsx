"use client";

import Welcome from "./UI/welcome";
import Header from "./header"


export default function HomePage () {
    return (
        <main className="h-full w-full">
            <Header />
            <Welcome />
        </main>
    )
}