import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <>
            <Header />
            <main className="flex">
                <div>
                    <img className="mt-64 mr-28 max-h-[4000] h-[3000] w-[4000] max-w-[3000]" src="./assets/logo.png" alt="" />
                </div>
                <div>
                    <h1 className="moving-text text-white mt-64 mr-52 text-6xl">BASE DE DADOS DOS ESTUDANTES</h1>
                    <p className="moving-text mt-10 text-white text-3xl">Seja bem vindo(@) ao nosso portal</p>
                    <div className="justify-center">
                    <Link to="/list">
                        <button className="bg-gradient-to-r from-blue-500 to-green-500 w-40 mt-20 text-white rounded-lg h-10 font-bold">Ver lista</button>
                    </Link>
                    <Link to="/contacts">
                        <button className="bg-gradient-to-r from-blue-500 to-green-500 w-40 mt-20 text-white rounded-lg h-10 font-bold ml-">Ver Contactos</button>
                    </Link></div>
                </div>
            </main>
            <Footer />
        </>
    );
}
