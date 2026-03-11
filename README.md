# GamefinderWeb

O **GamefinderWeb** é o frontend do projeto **Game Finder**, desenvolvido em **Angular** como parte de uma atividade acadêmica da disciplina de **Java Advanced**.

A proposta da aplicação é permitir que o usuário pesquise um jogo e receba uma recomendação com base em dados reais obtidos por meio de uma API externa consultada pelo backend.

---

## Sobre o projeto

Este repositório contém apenas a parte **frontend/web** da aplicação.

O sistema completo é dividido em duas partes:

- **Frontend (Angular):** responsável pela interface com o usuário
- **Backend (Java + Spring Boot):** responsável por consultar a API externa, aplicar a lógica de recomendação e devolver o resultado

Por isso, o frontend depende do backend rodando ao mesmo tempo para funcionar corretamente.

---

## Objetivo da aplicação

A aplicação foi desenvolvida para permitir que o usuário:

1. Pesquise um jogo pelo nome
2. Envie essa informação para o backend
3. Receba uma recomendação baseada nos dados encontrados
4. Visualize o resultado de forma simples na interface

No frontend, a aplicação faz uma chamada para a API do backend, que por sua vez está conectada à **IGDB** para obter os dados do jogo pesquisado.

---

## Tecnologias utilizadas

### Frontend
- Angular
- TypeScript
- Tailwind CSS

### Backend
- Java
- Spring Boot

### API externa
- IGDB

---

## Como a aplicação funciona

O fluxo da aplicação é o seguinte:

1. O usuário digita o nome de um jogo na barra de pesquisa
2. O frontend envia esse nome para o backend
3. O backend consulta a IGDB
4. O backend interpreta os dados retornados
5. O backend aplica a regra de recomendação
6. O backend devolve uma resposta com:
   - nome do jogo
   - nota
   - quantidade de avaliações
   - ano de lançamento
   - recomendação final
7. O frontend exibe essas informações na interface

---

## Regra de recomendação

A recomendação exibida ao usuário é baseada na análise dos dados retornados pelo backend.

### ⭐⭐⭐ Altamente recomendado
Quando o jogo possui:
- nota **4.5 ou mais**
- muitas avaliações
- lançamento recente

### ⭐⭐ Vale a pena
Quando o jogo possui:
- nota **entre 3.5 e 4.4**
- características que não o classificam nem como altamente recomendado nem como mal avaliado

### ⭐ Melhor ver um filme
Quando o jogo possui:
- nota **menor que 3.5**

### Dados insuficientes para recomendar
Quando a API não retorna informações suficientes para avaliar corretamente o jogo, o sistema informa que não há dados suficientes para recomendar.

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.dev/tools/cli)
- Java 17 ou superior
- O backend do projeto Game Finder configurado e funcionando

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
