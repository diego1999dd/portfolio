const sobre = document.querySelector("#about")
const formulario = document.querySelector("#formulario")
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
  try {

    const dadosPerfil = await fetch(`https://api.github.com/users/diego1999dd`)
    const perfil = await dadosPerfil.json()

    let conteudo = `

              <img
          class="about_imagem"
          src="${perfil.avatar_url}"
          alt="Foto do Perfil do Github - ${perfil.nome}"
        />

        <article id="about_texto" class="flex about_content">
          <h1>Sobre mim</h1>
          <p>
           Olá! Sou um Desenvolvedor Front-end Júnior com ênfase na criação de soluções web dinâmicas. Atualmente, atuo como freelancer na Toledo Interactive, onde aplico meus conhecimentos em performance e SEO para construir sites e Landing Pages de alta qualidade. Domino tecnologias como AstroJS, AlpineJS e, como fã de utilitários, o Tailwind CSS. Minha formação Full Stack me permite ter uma visão completa dos projetos.
          </p>
          <div id="about_github" class="github_infos">
            <a
              href="${perfil.html_url}"
              target="_blank"
              class="botao"
            >
              Github</a
            >
            <div><p>${perfil.followers} Seguidores</p>
            <p>${perfil.public_repos} Repositórios</p></div>
            
          </div>
        </article>
        `

    sobre.innerHTML += conteudo

  } catch (error) {
    console.error(error)
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.querySelector("#nome");
  const txtNome = document.querySelector("#txtNome")

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres."
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txtEmail")

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido."
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoAssunto = document.querySelector("#assunto");
  const txtAssunto = document.querySelector("#txtAssunto")

  if (campoAssunto.value.length < 5) {
    txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres."
    campoAssunto.focus();
    return;
  } else {
    txtAssunto.innerHTML = "";
  }

  formulario.submit();
})

getApiGithub()

// Código para o menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const menuContainer = document.querySelector('.menu_container');

// Adiciona um evento de clique no ícone de hambúrguer
hamburger.addEventListener('click', function () {
  // Alterna a classe 'open' no contêiner do menu
  menuContainer.classList.toggle('open');
});