# 📝 Formulário de Cadastro – Front‑end

Um projeto simples de formulário de cadastro utilizando **HTML, CSS e JavaScript**, integrado a um back‑end Node.js/Express.  
Este repositório contém apenas a **parte do front‑end**, responsável por coletar os dados do usuário e enviar via JavaScript moderno (Fetch API) para o servidor.

---

## 🌐 Visualização do Projeto

Você pode visualizar o projeto em funcionamento clicando no link abaixo:

[Visualizar Formulário](https://luiz-dev0.github.io/Formulario-de-cadastro/)  

> 🔹 Para funcionar corretamente, execute primeiro o back‑end (Node.js/Express) e abra o HTML em um navegador.

---

## 🛠 Tecnologias Utilizadas

- ![HTML5](https://img.shields.io/badge/HTML5‑E34F26?style=for‑the‑badge&logo=html5&logoColor=white) **HTML5** – Estrutura do formulário  
- ![CSS3](https://img.shields.io/badge/CSS3‑1572B6?style=for‑the‑badge&logo=css3&logoColor=white) **CSS3** – Estilização e layout responsivo  
- ![JavaScript](https://img.shields.io/badge/JavaScript‑F7DF1E?style=for‑the‑badge&logo=javascript&logoColor=black) **JavaScript (ES6)** – Manipulação do DOM e envio de dados via Fetch API

---

## 📂 Estrutura de Arquivos


---

## 🔍 Como funciona

1. O usuário preenche os campos no formulário (nome, sobrenome, email, celular, senha).  
2. Ao clicar em **Continuar**, o script `form.js` captura os valores, valida e envia para o back‑end via `fetch()` para a rota `POST /usuarios`.  
3. O servidor responde com a confirmação e os dados do usuário criado.  
4. A visualização pode ser checada no console do navegador ou acessando `GET /usuarios` no servidor.

---

## 🎓 Próximos Passos

- Adicionar validações mais completas (ex: formato de telefone, senha forte).  
- Conectar a um banco de dados real (substituir armazenamento em memória).  
- Criar funcionalidade de listagem, atualização e exclusão de usuários diretamente no front‑end.  
- Melhorar a UI/UX: mensagens de erro, loading states, animações.

---

## ✅ Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
