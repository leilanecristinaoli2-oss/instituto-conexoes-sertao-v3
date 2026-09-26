
import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

const paginas = {
    inicio: {
        titulo: "Início",
        template: templateInicio
    },

    projetos: {
        titulo: "Projetos",
        template: templateProjetos
    },

    cadastro: {
        titulo: "Participe",
        template: templateCadastro
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

        document.title =
            "Página não encontrada | Instituto Conexões do Sertão";

        conteudo.focus();
        return;
    }

    conteudo.innerHTML = pagina.template();

    document.title =
        pagina.titulo + " | Instituto Conexões do Sertão";

    if (nomePagina === "projetos" && secao) {
        const destino = document.getElementById(secao);

        if (destino) {
            destino.setAttribute("tabindex", "-1");
            destino.scrollIntoView();
            destino.focus({ preventScroll: true });
            return;
        }
    }

    window.scrollTo(0, 0);
    conteudo.focus({ preventScroll: true });
}

