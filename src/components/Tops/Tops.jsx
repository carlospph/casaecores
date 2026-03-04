import React from "react";
import { Link } from "react-router-dom";
import { TituloSessao } from "../Utils/TituloSessao";

const tops = [
  {
    id: 1,
    titulo: "Pintura externa",
    imagem:
      "https://images.unsplash.com/photo-1641408881526-cd924c665c2d?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descricao: "Pintura externa com tinta impermeabilizante",
  },
  {
    id: 2,
    titulo: "Pintura interna",
    imagem:
      "https://images.unsplash.com/photo-1609081144289-eacc3108cd03?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descricao: "Pintura rústica com efeitos especiais",
  },
];

const Tops = () => {
  return (
    <section id="tops" className="py-12 bg-gray-50">
      <TituloSessao text="Melhores projetos" />
      <p className="text-center text-gray-600 text-xl pb-8">
        Conheça os serviços mais pedidos
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {tops.map((top) => (
          <Link
            to={`/detalhesTops/${top.id}`}
            key={top.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Container da Imagem */}
            <div className="relative h-[400px] w-full overflow-hidden">
              <img
                src={top.imagem}
                alt={top.titulo}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay (Aparece no Hover) */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                <p className="text-white text-center text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {top.descricao}
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-white p-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {top.titulo}
              </h3>
              <span className="text-sm text-blue-500 font-semibold uppercase mt-2 inline-block">
                Ver detalhes →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Tops;
