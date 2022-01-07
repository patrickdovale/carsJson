# Cars Json

Projeto realizado para teste seletivo na empresa WS Work.

#### Tela Inicial
![image](https://user-images.githubusercontent.com/41561977/148588637-9698474e-994d-464a-88c1-173ee73b6e99.png)
Tela que busca todas os carros do json e do localStorage e mostra os dados de uma forma estilizada, podendo ser realizado filtro por catégorias disponíveis.

#### Tela de cadastro
![image](https://user-images.githubusercontent.com/41561977/148589064-2f45c67f-ecfa-45fa-b5d2-d0aa3781f570.png)
Tela onde cadastra novos carros na aplicação(faz a persistência dos dados no local Storage).

#### Tela de Error 404
![image](https://user-images.githubusercontent.com/41561977/148593944-c2156d5e-83e6-4995-bd32-ee0427a1fe10.png)



## 🚀 Tecnologias

* [React JS](https://pt-br.reactjs.org/) - O framework web usado
* [React-Router V6](https://reactrouter.com/) - Componente de navegação
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - Mecanismo de estilização
* [HTML](https://www.w3.org/Style/CSS/Overview.en.html) - Linguagem de marcação de texto
* [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de icones
* [Axios](https://axios-http.com/docs/intro) - Biblioteca de conexão de um cliente HTTP

### 🔧 Instalação

1. Clonar Repositório

```
git clone https://github.com/patrickdovale/carsJson.git
```

2. Instalar pacotes NPM

```
npm install
```

3. Iniciar a Aplicação

```
npm start
Abra http://localhost:3000 para visualizá-lo no navegador.
```
---

### 🔧 Como implementar o component listCar

1. Primeiro devemos importar o component listCar da pasta de components

```
import ListCar from "./components/ListCars"
```

2. Agora devemos chamar o component a qual importamos 

```
  <ListCar />
```

3. O que irá ser mostrado ao chamar o component

```
* Uma lista linear com todas as categorias disponível, a qual ao ser selecionada filtra os carros 
* Abaixo da lista de categorias será mostrado a lista com os veiculos de forma estilizada, de acordo com o filtro de categorias.
```
---
⌨️ com ❤️ por [Patrick Vasconcellos](https://github.com/patrickdovale) 😊
