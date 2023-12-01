
import Welcome from "./UI/welcome";
import Cards from "./UI/Cards";
import CallToBlog from "./UI/callToBlog";
export default function HomePage () {
    return (
        <main className="h-full w-full">
            <Welcome />
            <Cards />
            <CallToBlog />
        </main>
    )
}