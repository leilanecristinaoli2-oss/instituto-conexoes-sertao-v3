
const CHAVE = "preferenciasInstituto";

export function salvarPreferencias(preferencias) {
    try {
        localStorage.setItem(
            CHAVE,
            JSON.stringify(preferencias)
        );
    } catch (erro) {
        console.error(
            "Não foi possível salvar as preferências:",
            erro
        );
    }
}

export function recuperarPreferencias() {
    try {
        const dados = localStorage.getItem(CHAVE);

        if (!dados) {
            return null;
        }

        const preferencias = JSON.parse(dados);

        if (
            !preferencias ||
            typeof preferencias !== "object" ||
            Array.isArray(preferencias)
        ) {
            return null;
        }

        return preferencias;
    } catch (erro) {
        console.error(
            "Não foi possível recuperar as preferências:",
            erro
        );

        return null;
    }
}
