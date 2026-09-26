
import {
    salvarPreferencias,
    recuperarPreferencias
} from "./storage.js";

export function iniciarValidacao() {
    const formulario = document.getElementById(
        "formulario-cadastro"
    );

    // Só executa quando o formulário está na tela.
    if (!formulario) {
        return;
    }

    // Permite que o JavaScript apresente os erros personalizados.
    formulario.noValidate = true;

    const mensagemGeral = document.getElementById(
        "mensagem-formulario"
    );

    // ==================================================
    // 1. RECUPERAÇÃO E ARMAZENAMENTO DAS PREFERÊNCIAS
    // ==================================================

    const campoTipo = document.getElementById("tipo");
    const campoProjeto = document.getElementById("projeto");

    if (campoTipo && campoProjeto) {
        const preferencias = recuperarPreferencias();

        // Restaura as escolhas salvas anteriormente.
        if (preferencias) {
            if (preferencias.tipo) {
                campoTipo.value = preferencias.tipo;
            }

            if (preferencias.projeto) {
                campoProjeto.value = preferencias.projeto;
            }
        }

        // Salva apenas o tipo de participação e o projeto.
        function atualizarPreferencias() {
            salvarPreferencias({
                tipo: campoTipo.value,
                projeto: campoProjeto.value
            });
        }

        campoTipo.addEventListener(
            "change",
            atualizarPreferencias
        );

        campoProjeto.addEventListener(
            "change",
            atualizarPreferencias
        );
    }

    // ==================================================
    // 2. MENSAGENS DE ERRO
    // ==================================================

    function limparErro(campo) {
        campo.removeAttribute("aria-invalid");

        const mensagem = document.getElementById(
            `erro-${campo.id}`
        );

        if (mensagem) {
            mensagem.remove();
        }

        campo.removeAttribute("aria-describedby");
    }

    function mostrarErro(campo, texto) {
        limparErro(campo);

        campo.setAttribute("aria-invalid", "true");

        const mensagem = document.createElement("p");

        mensagem.id = `erro-${campo.id}`;
        mensagem.className = "mensagem-erro";
        mensagem.textContent = texto;

        campo.setAttribute(
            "aria-describedby",
            mensagem.id
        );

        campo.insertAdjacentElement(
            "afterend",
            mensagem
        );
    }

    function obterMensagem(campo) {
        if (campo.validity.valueMissing) {
            if (campo.type === "checkbox") {
                return "É necessário aceitar os termos.";
            }

            return "Este campo é obrigatório.";
        }

        if (campo.validity.typeMismatch) {
            return "Digite um e-mail válido.";
        }

        if (campo.validity.patternMismatch) {
            return campo.title ||
                "Confira o formato informado.";
        }

        return "Confira as informações deste campo.";
    }

    function validarCampo(campo) {
        limparErro(campo);

        if (!campo.validity.valid) {
            mostrarErro(
                campo,
                obterMensagem(campo)
            );

            return false;
        }

        return true;
    }

    // ==================================================
    // 3. EVENTOS DOS CAMPOS
    // ==================================================

    const campos = formulario.querySelectorAll(
        "input, select, textarea"
    );

    campos.forEach((campo) => {
        campo.addEventListener("change", () => {
            validarCampo(campo);
        });

        campo.addEventListener("input", () => {
            if (campo.hasAttribute("aria-invalid")) {
                validarCampo(campo);
            }
        });
    });

    // ==================================================
    // 4. ENVIO DO FORMULÁRIO
    // ==================================================

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let primeiroCampoInvalido = null;

        campos.forEach((campo) => {
            const valido = validarCampo(campo);

            if (!valido && !primeiroCampoInvalido) {
                primeiroCampoInvalido = campo;
            }
        });

        if (primeiroCampoInvalido) {
            mensagemGeral.textContent =
                "Existem campos que precisam ser corrigidos.";

            mensagemGeral.className =
                "alerta alerta-erro";

            primeiroCampoInvalido.focus();

            return;
        }

        mensagemGeral.textContent =
            "Formulário validado com sucesso! " +
            "Este é um projeto demonstrativo. " +
            "Nenhum dado foi enviado.";

        mensagemGeral.className =
            "alerta alerta-sucesso";
    });

    // ==================================================
    // 5. LIMPEZA DO FORMULÁRIO
    // ==================================================

    formulario.addEventListener("reset", () => {
        campos.forEach(limparErro);

        mensagemGeral.textContent = "";
        mensagemGeral.className = "";
    });
}
