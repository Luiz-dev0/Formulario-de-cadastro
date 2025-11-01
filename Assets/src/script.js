// ------------------------------
// Aguarda o carregamento do DOM
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  
  // Seleciona o formulário pelo seletor padrão (único <form> na página)
  const form = document.querySelector("form");

  // Adiciona um listener para o evento "submit"
  form.addEventListener("submit", async (event) => {
    // Impede o comportamento padrão (recarregar a página)
    event.preventDefault();

    // ------------------------------
    // Captura os dados do formulário
    // ------------------------------
    const nome = `${document.querySelector("#firstname").value.trim()} ${document.querySelector("#lastname").value.trim()}`;
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#number").value.trim();

    // ------------------------------
    // Validação básica antes do envio
    // ------------------------------
    if (!nome || !email || !telefone) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // ------------------------------
    // Monta o objeto com os dados (compatível com seu CRUD)
    // ------------------------------
    const usuario = { nome, email, telefone };

    // ------------------------------
    // Envia os dados com Fetch (POST /usuarios)
    // ------------------------------
    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });

      // Caso o servidor responda com sucesso (status 201)
      if (response.ok) {
        const result = await response.json();
        console.log("✅ Usuário criado:", result.usuario);
        alert("Usuário cadastrado com sucesso!");
        form.reset(); // limpa os campos
      } else {
        // Caso o servidor retorne erro
        const errorText = await response.text();
        console.error("❌ Erro ao cadastrar:", errorText);
        alert("Erro ao cadastrar usuário. Veja o console para detalhes.");
      }
    } catch (error) {
      // Caso o servidor não esteja rodando ou ocorra erro de rede
      console.error("❌ Erro de conexão:", error);
      alert("Não foi possível conectar ao servidor. Verifique se o backend está rodando.");
    }
  });
});
