# 📄 MiniProj1 — SPA Curriculum Vitae

Este projeto consiste no desenvolvimento de uma aplicação Web no formato **Single Page Application (SPA)**, criada no âmbito da unidade curricular **Programação Web Avançada** do curso **MEIW — UTAD/UAB**.

O objetivo é:

Construir uma tem como objetivo aprender e consolidar o conceito SPA. O site a funcionar numa única página corresponderá ao seu currículo vitae, a partir de uma página index.html. O site deve ter a seguinte:

Quem Sou Eu?
O que faço?
Hobbies

No rodapé da página index.html, bem como nas restantes páginas criadas, deve surgir o rodapé com a identidade virtual composta por um conjunto de ícones de redes sociais populares (ex. Facebook, Google +, Twitter, Linkedin, etc.)

---

## 🚀 Tecnologias Utilizadas

* **HTML5** — estrutura da aplicação
* **CSS3** — estilização responsiva e layout minimalista
* **JavaScript (ES Modules)** — lógica de navegação e modularização
* **Vue.js 3 (via CDN)** — reatividade, componentes e renderização dinâmica
* **Feather Icons** — ícones vetoriais limpos

---

## 🧭 Funcionalidades

* Navegação SPA baseada em **Hash Routing** (`#quem-sou-eu`, `#o-que-faco`, `#hobbies`)
* Organização do código baseada em **componentes separados**
* Layout com **cabeçalho e rodapé fixos**
* Seções centrais roláveis com transição suave
* Ícones sociais configurados de forma acessível

---

## 📂 Estrutura do Projeto

```
MiniProj1/
├─ index.html              # Estrutura principal da página
├─ main.js                 # Controle da SPA, rotas e lógica reativa
├─ style.css               # Estilos globais e layout
├─ componentes/            # Componentes de conteúdo
│  ├─ quem-sou-eu.js
│  ├─ o-que-faco.js
│  └─ hobbies.js
├─ imagens/
│  └─ weber.jpeg           # Avatar do perfil
```

---

## ▶️ Como Executar Localmente

Como o projeto utiliza **módulos JavaScript**, ele precisa ser executado em um servidor.

### Opção 1 — VS Code (Recomendado)

1. Instale a extensão **Live Server**
2. Clique em **Go Live**

### Opção 2 — Node.js

```
npx http-server .
```

Acesse:

```
http://localhost:8080
```

---

## 🌍 Publicação (GitHub Pages)

1. No GitHub, acesse **Settings → Pages**
2. Em **Source**, selecione:

```
Branch: main
Folder: /
```

3. Salve

A aplicação ficará disponível em:

```
https://webersouzacba.github.io/MiniProj1/
```

Caso o roteamento apresente problemas, renomeie uma cópia de `index.html` para `404.html`.

---

## 👤 Autor

**Weber Souza**

Curso: **MEIW — Universidade de Trás-os-Montes e Alto Douro (UTAD) / Universidade Aberta (UAB)**
