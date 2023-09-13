import { HiSearch} from 'react-icons/hi'

export default function SearchBar () {

    const toggleSearchBar = () => {
        const searchBar = document.querySelector('.search-bar');
        if (searchBar.classList.contains('hidden')) {
            searchBar.classList.remove('hidden');
        } else {
            searchBar.classList.add('hidden');
        }    
    }

    return (
        <li className="flex items-center gap-2">
        <input
            type="search"
            placeholder="Buscar"
            className="search-bar w-40 smll:w-52 border border-gray-300 rounded-2xl p-2 h-8 mob:h-10 ml-2 hidden outline-0"
          />
       <span  onClick={toggleSearchBar}
           className={`text-brown p-2 bg-white w-8 h-8 mob:h-10 mob:w-10 rounded-full flex justify-center 
             items-center transition-transform hover:scale-90 
         
            `}>
           <HiSearch className="h-4 w-4 " />
       </span>       
    </li>
    )
}