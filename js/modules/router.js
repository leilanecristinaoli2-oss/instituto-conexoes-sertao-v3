
const paginas = {
    inicio: {
        titulo: "Início",
        conteudo: `
            <section class="secao">
                <div class="container">
                    <h2>Conectando pessoas, transformando comunidades</h2>
                    <p>Bem-vindo ao Instituto Conexões do Sertão.</p>
                </div>
            </section>
        `
    },

    projetos: {
        titulo: "Projetos",
        conteudo: `
            <section class="secao">
                <div class="container">
                    <h2>Nossos Projetos</h2>
                    <p>Conheça nossas iniciativas comunitárias.</p>
                </div>
            </section>
        `
    },

    cadastro: {
        titulo: "Participe",
        conteudo: `
            <section class="secao">
                <div class="container">
                    <h2>Faça parte dessa transformação</h2>
                    <p>Em breve, nosso formulário estará disponível.</p>
                </div>
            </section>
        `
    }
};

export function navegar() {
    const rota = window.location.hash || "#/inicio";
    const partes = rota.replace("#/", "").split("/");

    const nomePagina = partes[0];
    const secao = partes[1];

    const pagina = paginas[nomePagina];

    const conteudo = document.getElementById("conteudo");

    if (!pagina) {
        conteudo.innerHTML = `
            <section class="secao">
                <div class="container">
                    <h2>Página não encontrada</h2>
                    <a href="#/inicio">Voltar ao início</a>
                </div>
            </section>
        `;

        document.title = "Página não encontrada | Instituto";
        conteudo.focus();
        return;
    }

    conteudo.innerHTML = pagina.conteudo;

    document.title =
        pagina.titulo + " | Instituto Conexões do Sertão";

    if (secao && nomePagina === "projetos") {
        const destino = document.getElementById(secao);

        if (destino) {
            destino.scrollIntoView();
            destino.setAttribute("tabindex", "-1");
            destino.focus({ preventScroll: true });
            return;
        }
    }

    window.scrollTo(0, 0);
    conteudo.focus({ preventScroll: true });
}
