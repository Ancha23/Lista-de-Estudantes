import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"

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
    </div>
</main>

            <Footer />
        </>
    )
}