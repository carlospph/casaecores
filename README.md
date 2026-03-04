# Sistema de Orçamento de Serviços de Pintura

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

---

# Sistema de Orçamento de Serviços de Pintura

## 🔹 Descrição

Este é um site responsivo desenvolvido em **React.JS** com **Tailwind CSS**, que permite que usuários se cadastrem, façam login com **Firebase Authentication** e solicitem orçamentos de serviços de pintura. O sistema calcula automaticamente os valores do orçamento com base no tipo de serviço e no tamanho da área a ser pintada, além de controlar orçamentos pendentes e aprovados.

O projeto está disponível publicamente e hospedado no **Vercel**.

---

## 🔹 Tecnologias Utilizadas

- **Frontend:** React
- **Estilização:** Tailwind CSS
- **Autenticação e Banco de Dados:** Firebase (Authentication + Firestore)
- **Deploy:** Vercel
- **Controle de versão:** GitHub

---

## 🔹 Funcionalidades

1. **Cadastro e Login de Usuário**

   - Cadastro com **nome, email e senha**
   - Login e logout
   - Verificação de usuário logado para o gerenciamento adequado do usuário
   - **Recuperação de senha** via email caso o usuário esqueça a senha

2. **Sistema de Orçamento**

   - Escolha do tipo de serviço de pintura
   - Definição do tamanho da área a ser pintada
   - Cadastro de até 3 orçamentos por usuário
   - Cálculo automático dos valores do orçamento
   - Controle de orçamentos **pendentes** e **aprovados**, com a opção de excluir e editar orçamentos conforme usuário julgue necessário
   -

3. **Interface Responsiva**
   - Layout adaptável para dispositivos móveis, tablets e desktop

## ESTRUTURA DO PROJETO

/src
/components # Componentes React reutilizáveis
/pages # Páginas do sistema
/services # Conexão com Firebase e funções auxiliares
/styles # Estilos globais (Tailwind CSS)
/utils # Funções utilitárias (ex.: cálculo de orçamento)

---

## 🔹 Instalação e Setup

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>

```

2.Entre na pasta:
</> bash
cd nome-do-projeto

3.Instale dependências:
npm install

# ou

yarn install

4.Configure Firebase:

Crie projeto no Firebase
Configure Authentication e Firestor
Crie .env.local com as chaves:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

5.Rode o projeto:
npm start

🔹 Uso

Cadastre-se com nome, email e senha

Faça login

Se esquecer a senha, clique em “Esqueci minha senha” para receber o email com o link para alterar a senha de acesso

Crie orçamentos (até 3) informando tipo de serviço e área a ser pintada e a descrição ou adicione maiores detalhes na campo detalhes

Visualize valores calculados e status (pendente/aprovado), poderá editar ou excluir o orçamento conforme o status que está, se aprovado usuário tem a opção apenas de excluir o orçamento

---

## 🔹 Demonstração das Telas

### Tela de Cadastro

![Tela de Cadastro](./assets/tela-cadastro.png)  
Formulário para criar uma nova conta, preenchendo nome, email e senha, com confirmação de senha.

---

### Tela de Login

![Tela de Login](./assets/tela-login.png)  
Área para acessar o sistema com email e senha. Também há links para cadastro e recuperação de senha.

---

### Tela de Recuperação de Senha

![Tela de Recuperação de Senha](./assets/tela-esqueci-senha.png)  
Formulário para o usuário solicitar recuperação da senha via email.

---

| Coleção | Campos                                            | Descrição                       |
| ------- | ------------------------------------------------- | ------------------------------- |
| users   | name, email, uid                                  | Cadastro de usuários            |
| budgets | userId, tipoServico, area, valorCalculado, status | Orçamentos criados pelo usuário |

---

🔹 Funcionalidades (Swagger Simplificado)
| Funcionalidade | Entrada | Ação / Função | Resultado | Observações |
| --------------------- | --------------------- | ----------------------------------------------------------- | -------------------------- | ------------------------------------ |
| Cadastro | name, email, password | `firebase.auth().createUserWithEmailAndPassword` | Usuário criado, UID gerado | Verifica email existente |
| Login | email, password | `firebase.auth().signInWithEmailAndPassword` | Sessão iniciada | Retorna token de sessão |
| Recuperação de senha | email | `firebase.auth().sendPasswordResetEmail` | Email enviado | Confirma se email existe |
| Criar orçamento | tipoServico, area | `firestore.collection("budgets").add(...)` | Orçamento salvo | Limite 3 orçamentos, valor calculado |
| Atualizar status | budgetId, status | `firestore.collection("budgets").doc(budgetId).update(...)` | Status atualizado | Pendentes / Aprovados |
| Visualizar orçamentos | userId | `firestore.collection("budgets").where(...)` | Lista de orçamentos | Separados por status |

🔹 Fluxo do Usuário

flowchart TD
A[Cadastro/Login] --> B[Recuperação de senha (opcional)]
B --> C[Criar Orçamento]
C --> D[Valor calculado automaticamente]
D --> E[Ver orçamentos]
E --> F[Pendentes / Aprovados]
F --> G[Histórico / Atualizar status]

🔹 Deploy

Site publicado no Vercel: https://seu-site.vercel.app

🔹 Contribuição

Fork do projeto

Crie branch: git checkout -b minha-feature

Commit: git commit -m "Minha contribuição"

Push: git push origin minha-feature

Abra Pull Request

🔹 Licença

MIT License

🔹 Contato

Autor: Carlos Nascimento

Email: intablete@gmail.com
