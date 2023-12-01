import { TbMenu2 } from 'react-icons/tb';

export default function MenuButton () {
    const toggleMenu = () => {    
        const menu = document.getElementById("menu");
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        };
    }

    return (
            <button onClick={toggleMenu} className="custom:hidden mt-8 text-brown">
                <TbMenu2 className="h-8 w-8 mob:h-10 mob:w-10"/>
            </button>
    )
}