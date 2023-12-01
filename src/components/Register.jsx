export default function Register () {
    return (
        <div className="flex flex-col max-w-md mt-4 px-4 py-8 bg-white rounded-lg sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-2 text-xl font-light text-gray-600 sm:text-2xl ">
                  Cadastre-se
            </div>
            <div className="p-6 mt-4">
              <form action="#">
                <div className="flex flex-col mb-2">
                  <div className=" relative ">
                    <input type="text" id="create-account-name" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-easy focus:ring-offset-easy focus:border-transparent" name="Name" placeholder="Name" />
                  </div>
                </div>
            
                <div className="flex flex-col mb-2">
                  <div className=" relative ">
                    <input type="text" id="create-account-email" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-easy focus:ring-offset-easy focus:border-transparent" name="cadastroEmail" placeholder="Email" />
                  </div>
                </div>
            
                <div className="flex flex-col mb-2">
                  <div className=" relative ">
                  <input type="password" id="create-password" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-easy focus:ring-offset-easy focus:border-transparent"name="password" placeholder="Crie uma senha" />          </div>
                </div>
            
                <div className="flex w-full my-4">
                  <button type="submit" className="py-2 px-4  bg-easy hover:bg-medium focus:ring-easy focus:ring-offset-easy text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Criar conta
                  </button>
                </div>
              </form>
              <div className="flex gap-4 item-center mt-2 ">
                <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  <svg width={20} height={20} fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                    </path>
                  </svg>
                  Criar conta com Google
                </button>
        </div>
            </div>
        </div>
    )
}