# GitHub Search 🔎

Aplicação web em React para buscar um usuário do GitHub pelo nome e visualizar seu perfil e seus repositórios públicos, consumindo a API REST oficial do GitHub.

<!-- Adicione aqui um print ou GIF da aplicação, por exemplo: ![Demo](./docs/demo.gif) -->

**Demo:** _adicione o link do deploy aqui_

## Funcionalidades

- Busca de usuário do GitHub por nome de usuário (login)
- Exibição do perfil: foto, nome, login, bio, localização, número de repositórios públicos e de seguidores
- Listagem dos repositórios públicos em cards, com nome (link para o repositório no GitHub), descrição e quantidade de estrelas
- Validação do campo de busca (não aceita texto vazio ou só com espaços)
- Página de erro "User Not Found" quando o usuário não existe e para rotas inexistentes

## Tecnologias

- [React](https://react.dev) 18
- [React Router](https://reactrouter.com) 6 (rotas `/`, `/list` e página de erro)
- [Styled-Components](https://styled-components.com) para estilização
- [Axios](https://axios-http.com) para requisições HTTP
- Context API para estado global
- Create React App (`react-scripts`)
- [GitHub REST API](https://docs.github.com/en/rest)

## Arquitetura

```
src/
├── components/      # Header e CardProjects (componentes reutilizáveis)
├── pages/           # HomePage, ListPage e ErrorPage
├── service/         # requests.js: chamadas à API (getProfile, getRepos)
├── global/          # GlobalState e GlobalStateContext (Context API)
├── constants/       # URL base da API, cores e regex de validação
└── App.js           # Definição das rotas
```

- **Separação de responsabilidades:** chamadas à API ficam isoladas em `service/`, sem lógica de interface.
- **Estado global** com Context API (`searchText`, `user`, `repos`, `errorMessage`).
- **Tratamento de erro** nas requisições, redirecionando para a página de erro quando o usuário não é encontrado.

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) (versão LTS) e npm.

```bash
git clone https://github.com/Allan-SS/GitHub-Search.git
cd GitHub-Search
npm install
npm start
```

A aplicação abre em [http://localhost:3000](http://localhost:3000).

### Outros scripts

| Comando | O que faz |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `build` |
| `npm test` | Executa os testes |

## Limitações conhecidas e próximos passos

- A API do GitHub limita requisições sem autenticação; em uso intenso pode retornar erro de limite de taxa.
- Listar apenas a primeira página de repositórios (padrão da API); paginação seria uma evolução natural.
- Migrar para TypeScript e adicionar testes dos componentes e dos serviços.
- Indicadores de carregamento (loading) durante as requisições.

## Autor

**Allan de Sousa Silva**
[LinkedIn](https://www.linkedin.com/in/allan-sousa-silva/) · [GitHub](https://github.com/Allan-SS)
