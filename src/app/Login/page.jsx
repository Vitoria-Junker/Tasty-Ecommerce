import Register from "@/components/Register";
import LoginForm from "@/components/Login";

export default function Login () {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-wrap items-center justify-evenly">
                <LoginForm />
                <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
                    Ou
                </div>
                <Register />
            </div>
        </div>
      
    )
}