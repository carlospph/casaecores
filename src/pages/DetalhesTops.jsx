import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { ContainerMax } from "../components/ContainerMax/ContainerMax.jsx";

const tops = [
  {
    id: 1,
    titulo: "Pintura Externa",
    imagem:
      "https://images.unsplash.com/photo-1641408881526-cd924c665c2d?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descricao: "Pintura externa com tinta impermeabilizante",
    detalhes:
      "A pintura externa é essencial para proteger sua casa das intempéries. Usamos tintas de alta qualidade que garantem a durabilidade e a beleza da sua fachada por muito mais tempo. Além disso, uma boa pintura externa valoriza o seu imóvel.",
    thumbnails: [
      "https://images.unsplash.com/photo-1641408881526-cd924c665c2d?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1706931175460-e444439e3784?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1629184992322-8fd6823e0af1?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 2,
    titulo: "Pintura Interna",
    imagem:
      "https://plus.unsplash.com/premium_photo-1683120673588-682452cc83a0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descricao: "Pintura rústica com efeitos especiais",
    detalhes:
      "A pintura interna é a alma da sua casa. Com as cores e texturas certas, você pode criar ambientes aconchegantes e cheios de personalidade. Trabalhamos com diversas técnicas, como a pintura rústica, que traz um charme especial para qualquer cômodo.",
    thumbnails: [
      "https://images.unsplash.com/photo-1609081144289-eacc3108cd03?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

const DetalhesTops = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const top = tops.find((t) => t.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (top) {
      setSelectedImage(top.imagem);
    }
  }, [top]);

  if (!top) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-bold">
        Serviço não encontrado!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-24 pb-12 md:pt-32">
        <ContainerMax>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 px-4">
            {/* Coluna da Esquerda: Galeria de Imagens */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
                <img
                  src={selectedImage}
                  alt={top.titulo}
                  className="h-[300px] md:h-[450px] w-full object-cover transition-all duration-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {top.thumbnails.map((thumbnail, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(thumbnail)}
                    className={`relative h-24 w-full overflow-hidden rounded-lg transition-all duration-200 
                                            ${
                                              selectedImage === thumbnail
                                                ? "ring-4 ring-blue-500 scale-95 shadow-inner"
                                                : "ring-1 ring-gray-200 hover:ring-blue-300 opacity-70 hover:opacity-100"
                                            }`}
                  >
                    <img
                      src={thumbnail}
                      alt={`Miniatura ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Coluna da Direita: Informações */}
            <div className="flex flex-col justify-center">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                Projeto Selecionado
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                {top.titulo}
              </h3>

              <div className="w-20 h-1.5 bg-blue-500 my-6 rounded-full"></div>

              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8">
                {top.detalhes}
              </p>

              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-200 group w-fit"
              >
                <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                Voltar
              </button>
            </div>
          </div>
        </ContainerMax>
      </section>
    </div>
  );
};

export default DetalhesTops;
