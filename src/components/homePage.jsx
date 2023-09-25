
import Welcome from "./UI/welcome";
import Cards from "./UI/Cards";
import VisiteBlog from "./UI/visiteBlog";

export default function HomePage () {
    return (
        <main className="h-full w-full">
            <Welcome />
            <Cards />
            <VisiteBlog />
        </main>
    )
}