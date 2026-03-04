import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Campo } from "../components/Campo/Campo.jsx";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, email, password, confirmPassword } = formData;

    if (!nome || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        nome: nome,
        email: email,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      setError("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 pt-[120px] pb-12 bg-gray-100">
        <div className="max-w-4xl mx-auto shadow-2xl bg-white rounded-2xl overflow-hidden">
          <div className="text-center py-8 bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800">
              Crie sua Conta
            </h2>
            <p className="py-3 text-gray-500">
              É rápido e fácil. Vamos começar!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 md:px-12 pb-12">
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Campo
                label="Nome"
                type="text"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={handleChange}
                required
                name="nome"
              />
              <Campo
                label="E-mail"
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                name="email"
              />
              <Campo
                label="Senha"
                type="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
                required
                name="password"
              />
              <Campo
                label="Confirmar senha"
                type="password"
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                name="confirmPassword"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-xl transition-all shadow-lg hover:shadow-green-200"
            >
              Finalizar Cadastro
            </button>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-600">
                Já tem uma conta?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Faça login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
