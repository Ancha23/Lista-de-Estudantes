import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Envelope, UserCheck } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset, // Add reset method
    formState: { errors },
  } = useForm();

  const [popupData, setPopupData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onSubmit = (data) => {
    setPopupData(data);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    reset(); // Reset form fields
  };

  return (
    <>
      <Header />
      <div className="w-[1200px] h-[700px] flex mx-auto m-10">
        <div className="w-1/2 h-full bg-sky-blue-200 relative flex items-center justify-center">
          <div className="absolute text-center text-white">
            <h2 className="text-5xl font-bold uppercase">
              Ajude o nosso site{" "}
              <span className="relative">
                <span className="z-10 relative">Educacao conectada</span>
                <span className="absolute bottom-0 left-0 w-full h-7 bg-orange -z-1"></span>
              </span>{" "}
              a melhorar!
            </h2>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border border-sky-blue-100">
          <h1 className="mt-4 text-center text-2xl tracking-tight text-green- font-bold">COMENTARIOS</h1>

          {/* Conditionally render the form */}
          {!isPopupOpen && (
            <div className="max-w-md w-full px-6 py-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="mt-2">
                  <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                    Nome completo
                  </label>
                  <div className="mt-2 flex items-center relative">
                    <input
                      type="text"
                      id="fullName"
                      {...register("fullName", {
                        required: "Nome completo é obrigatório!",
                        minLength: {
                          value: 2,
                          message: "Nome completo deve ter no mínimo 2 caracteres!",
                        },
                      })}
                      placeholder="Nome completo"
                      className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                    />
                    <UserCheck
                      size={20}
                      weight="fill"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                  {errors.fullName && <span className="text-red-600 text-sm">{errors.fullName.message}</span>}
                </div>

                <div className="mt-2">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2 flex items-center relative">
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email é obrigatório!",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                          message: "Endereço de email inválido!",
                        },
                      })}
                      placeholder="Endereço de Email"
                      className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                    />
                    <Envelope
                      size={20}
                      weight="fill"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                  {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                </div>

                <div className="mt-2">
                  <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                    Comentário
                  </label>
                  <div className="mt-2 flex items-center relative">
                    <input
                      type="text"
                      id="comment"
                      {...register("comment", { required: "Comentário é obrigatório!" })}
                      placeholder="Escreva aqui seu comentário..."
                      className="block w-full rounded-md border-0 py-10 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.comment && <span className="text-red-600 text-sm">{errors.comment.message}</span>}
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded-full bg-green-300 px-2 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue-200 uppercase"
                >
                  Enviar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Popup Section */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button onClick={closePopup} className="absolute top-2 right-2 text-gray-500">
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Informações Submetidas</h2>
            <p><strong>Nome completo:</strong> {popupData.fullName}</p>
            <p><strong>Email:</strong> {popupData.email}</p>
            <p><strong>Comentário:</strong> {popupData.comment}</p>
            <button onClick={closePopup} className="mt-4 bg-sky-blue-200 text-white px-4 py-2 rounded">
              Fechar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};