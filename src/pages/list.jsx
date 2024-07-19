import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import React, { useEffect, useState } from 'react';
import { Info,Trash, PlusCircle} from "@phosphor-icons/react";



const Dados = [
  { nome: 'Alcinda Chirrime', idade: 25 },
  { nome: 'Ancha Catarina', idade: 22 },
  { nome: 'Atalia', idade: 23 },
  { nome: 'Alexandre Mahumane', idade: 20 },
  { nome: 'Domingos Azevedo', idade: 20 },
  { nome: 'Maida Jane', idade: 25 },
  { nome: 'Joaquim Ubisse', idade: 30 },
  { nome: 'Georgina', idade: 24 },
  { nome: 'Isabel Duarte', idade: 28 },
  { nome: 'Inacio', idade: 25 },
  { nome: 'Francisca', idade: 23 },
  { nome: 'Ricardina', idade: 22 },
  { nome: 'Simao', idade: 22 },
  { nome: 'Shelton Duarte', idade: 22 },
  { nome: 'Vicente', idade: 22 },
  { nome: 'Pedro', idade: 29 },
  { nome: 'Gerson', idade: 22 },
  { nome: 'Franco Net Bomba Junior', idade: 24 },
  { nome: 'Reginaldo Alzina', idade: 26 },
  { nome: 'Suely Badru', idade: 20 },
  { nome: 'Luis Izibia', idade: 22 },
];


const TabelaDeDados = ({ dados }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newNome, setNewNome] = useState("");
  const [newIdade, setNewIdade] = useState("");
  const [newInfo, setNewInfo] = useState("");

  const filteredDados = dados.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.idade.toString().includes(searchTerm)
  );

  const handleAddData = () => {
    if (newNome && newIdade) {
      dados.push({ nome: newNome, idade: parseInt(newIdade), info: newInfo });
      setNewNome("");
      setNewIdade("");
      setNewInfo("");
      setIsModalOpen(false);
    }
  };

  const handleInfoClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (itemToDelete) => {
    const updatedDados = dados.filter(item => item !== itemToDelete);
    
    dados.splice(0, dados.length, ...updatedDados); 
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-[500px] h-10 mr-2 rounded-md"
        />
        <button onClick={() => setIsModalOpen(true)} className=" text-white hover:text-blue-700 ">
         <PlusCircle size={30}/>
        </button>
      </div>

      
      {selectedItem && isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Informações</h2>
            <p><strong>Nome:</strong> {selectedItem.nome}</p>
            <p><strong>Idade:</strong> {selectedItem.idade}</p>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white p-2 mt-4">
              Fechar
            </button>
          </div>
        </div>
      )}

     
      {isModalOpen && !selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Adicionar Novo Aluno a Lista</h2>
            <input
              type="text"
              placeholder="Nome"
              value={newNome}
              onChange={(e) => setNewNome(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              type="number"
              placeholder="Idade"
              value={newIdade}
              onChange={(e) => setNewIdade(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Informação"
              value={newInfo}
              onChange={(e) => setNewInfo(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button onClick={handleAddData} className="bg-green-500 text-white p-2 mr-2">
              Adicionar
            </button>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white p-2">
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center p-10">
        <div className="bg-white rounded-lg shadow-lg  max-h-[600px] overflow-y-auto">
          <table className="border-collapse border border-gray-200 w-full  text-gray-800 font-bold ">
            <thead >
              <tr className="bg-green-500  text-white sticky top-0 z-10 ">
                <th className="border border-gray-300 w-[800px]">Nome</th>
                <th className="border border-gray-300 px-4 py-2">Idade</th>
                <th className="border border-gray-300 px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredDados.map((aluno, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-25 py-2">{aluno.nome}</td>
                  <td className="border border-gray-300 px-4 py-2">{aluno.idade}</td>
                  <td className="border border-gray-300 px-4 py-2 flex space-x-4">
                    <a onClick={() => handleInfoClick(aluno)} href="#" className="cursor-pointer">
                      <span className="text-blue-700 text-2xl">
                        <Info />
                      </span>
                    </a>
                    <a onClick={() => handleDelete(aluno)} href="#" className="cursor-pointer">
                      <span className="text-red-700 text-2xl">
                        <Trash />
                      </span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export const ListaDeEstudantes = () => {
  return (
    <>
      <TabelaDeDados dados={Dados} />
      <Footer />
    </>
  );
};