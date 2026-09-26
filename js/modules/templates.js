
export function templateInicio() {
    return `
        <section class="secao">
            <div class="container">
                <h2>Conectando pessoas, transformando comunidades</h2>
                <p>
                    Bem-vindo ao Instituto Conexões do Sertão,
                    uma iniciativa comunitária de Cajazeiras, Paraíba.
                </p>
                <a class="botao" href="#/cadastro">
                    Faça parte dessa transformação
                </a>
            </div>
        </section>
    `;
}

export function templateProjetos() {
    return `
        <section class="secao apresentacao-projetos">
            <div class="container">
                <h2>Nossos Projetos</h2>

                <p>
                    Conheça as iniciativas desenvolvidas pelo Instituto
                    Conexões do Sertão para promover sustentabilidade,
                    valorizar a cultura local e fortalecer as comunidades
                    de Cajazeiras e região.
                </p>

                <div class="alerta alerta-info" role="status">
                    <strong>Participe!</strong>
                    Os projetos estão abertos ao interesse de novos
                    voluntários e apoiadores.
                </div>
            </div>
        </section>

        <section class="secao secao-destaque">
            <div class="container">
                <div class="grid projetos-grid">

                    <article
                        class="card projeto-card col-4"
                        id="coleta"
                    >
                        <span class="badge badge-verde">
                            Sustentabilidade
                        </span>

                        <h3>Coleta Seletiva e Apoio aos Catadores</h3>

                        <p>
                            O projeto promove ações de educação ambiental
                            e incentivo à coleta seletiva, além de apoiar
                            grupos e associações de catadores de materiais
                            recicláveis, contribuindo para a sustentabilidade
                            e para a valorização desses trabalhadores.
                        </p>

                        <a class="botao" href="#/cadastro">
                            Quero participar
                        </a>
                    </article>

                    <article
                        class="card projeto-card col-4"
                        id="cultura"
                    >
                        <span class="badge badge-terra">
                            Cultura
                        </span>

                        <h3>Cultura e Memória de Cajazeiras</h3>

                        <p>
                            A iniciativa busca preservar e valorizar a
                            história, a cultura e a identidade de Cajazeiras
                            por meio do apoio a atividades culturais,
                            espaços de memória e ações de divulgação
                            do patrimônio local.
                        </p>

                        <a class="botao" href="#/cadastro">
                            Quero participar
                        </a>
                    </article>

                    <article
                        class="card projeto-card col-4"
                        id="conexoes"
                    >
                        <span class="badge badge-neutro">
                            Comunidade
                        </span>

                        <h3>Conexões Comunitárias</h3>

                        <p>
                            O projeto aproxima pessoas, famílias e
                            comunidades de instituições de ensino e
                            outros parceiros, criando oportunidades de
                            colaboração a partir das necessidades
                            identificadas pela própria comunidade.
                        </p>

                        <a class="botao" href="#/cadastro">
                            Quero participar
                        </a>
                    </article>

                </div>
            </div>
        </section>

        <section class="secao">
            <div class="container grid">

                <article class="card col-6">
                    <h2>Seja voluntário</h2>

                    <p>
                        Pessoas interessadas em colaborar podem
                        participar das atividades dos projetos
                        do Instituto em ações comunitárias,
                        educativas, culturais e ambientais.
                    </p>

                    <a class="botao" href="#/cadastro">
                        Quero ser voluntário
                    </a>
                </article>

                <article class="card col-6">
                    <h2>Apoie nossas iniciativas</h2>

                    <p>
                        As contribuições ajudam a fortalecer as
                        ações sociais, ambientais e culturais do
                        Instituto. Interessados em contribuir
                        financeiramente podem registrar seu
                        interesse no formulário.
                    </p>

                    <a class="botao" href="#/cadastro">
                        Quero apoiar
                    </a>
                </article>

            </div>
        </section>
    `;
}


export function templateCadastro() {
    return `
        <section class="secao">
            <div class="container formulario-container">

                <div class="formulario-introducao">
                    <h2>Faça parte dessa transformação</h2>

                    <p>
                        Cadastre-se para participar das iniciativas
                        como voluntário ou apoiador.
                    </p>

                    <div class="alerta alerta-info" role="status">
                        <strong>Atenção:</strong>
                        os campos obrigatórios devem ser
                        preenchidos corretamente.
                    </div>
                </div>

                <form class="formulario" id="formulario-cadastro">

                    <fieldset>
                        <legend>Dados Pessoais</legend>

                        <div class="form-grid">

                            <div class="campo campo-completo">
                                <label for="nome">Nome completo:</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    autocomplete="name"
                                    placeholder="Digite seu nome completo"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="cpf">CPF:</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    inputmode="numeric"
                                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                                    placeholder="000.000.000-00"
                                    title="Use o formato 000.000.000-00"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="nascimento">
                                    Data de nascimento:
                                </label>
                                <input
                                    type="date"
                                    id="nascimento"
                                    name="nascimento"
                                    required
                                >
                            </div>

                            <div class="campo campo-completo">
                                <label for="email">E-mail:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autocomplete="email"
                                    placeholder="nome@exemplo.com"
                                    required
                                >
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Contato e endereço</legend>

                        <div class="form-grid">

                            <div class="campo">
                                <label for="telefone">Telefone:</label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    autocomplete="tel"
                                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                                    placeholder="(83) 99999-9999"
                                    title="Use o formato (83) 99999-9999"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="cep">CEP:</label>
                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    autocomplete="postal-code"
                                    inputmode="numeric"
                                    pattern="[0-9]{5}-[0-9]{3}"
                                    placeholder="00000-000"
                                    title="Use o formato 00000-000"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="cidade">Cidade:</label>
                                <input
                                    type="text"
                                    id="cidade"
                                    name="cidade"
                                    autocomplete="address-level2"
                                    placeholder="Sua cidade"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="estado">Estado:</label>
                                <input
                                    type="text"
                                    id="estado"
                                    name="estado"
                                    autocomplete="address-level1"
                                    placeholder="Seu estado"
                                    required
                                >
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Participação</legend>

                        <div class="form-grid">

                            <div class="campo">
                                <label for="tipo-participacao">
                                    Como deseja participar?
                                </label>

                                <select
                                    id="tipo-participacao"
                                    name="tipo-participacao"
                                    required
                                >
                                    <option value="">
                                        Selecione uma opção
                                    </option>
                                    <option value="voluntario">
                                        Voluntário
                                    </option>
                                    <option value="apoiador">
                                        Apoiador
                                    </option>
                                </select>
                            </div>

                            <div class="campo">
                                <label for="projeto">
                                    Projeto de interesse:
                                </label>

                                <select
                                    id="projeto"
                                    name="projeto"
                                    required
                                >
                                    <option value="">
                                        Selecione um projeto
                                    </option>
                                    <option value="coleta">
                                        Coleta Seletiva e Apoio aos Catadores
                                    </option>
                                    <option value="cultura">
                                        Cultura e Memória de Cajazeiras
                                    </option>
                                    <option value="conexoes">
                                        Conexões Comunitárias
                                    </option>
                                </select>
                            </div>

                            <div class="campo campo-completo">
                                <label for="mensagem">
                                    Conte-nos como gostaria de contribuir:
                                </label>

                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows="5"
                                    maxlength="500"
                                    placeholder="Escreva sua mensagem"
                                ></textarea>
                            </div>

                        </div>
                    </fieldset>

                    <div class="termos">
                        <input
                            type="checkbox"
                            id="termos"
                            name="termos"
                            required
                        >

                        <label for="termos">
                            Declaro que as informações são verdadeiras
                            e autorizo o uso dos dados para fins de
                            contato pelo Instituto.
                        </label>
                    </div>

                    <div
                        id="mensagem-formulario"
                        role="status"
                        aria-live="polite"
                    ></div>

                    <div class="acoes-formulario">
                        <button class="botao" type="submit">
                            Enviar cadastro
                        </button>

                        <button
                            class="botao botao-neutro"
                            type="reset"
                        >
                            Limpar formulário
                        </button>

                        <button class="botao" type="button" disabled>
                            Indisponível
                        </button>
                    </div>

                </form>

            </div>
        </section>
    `;
}
