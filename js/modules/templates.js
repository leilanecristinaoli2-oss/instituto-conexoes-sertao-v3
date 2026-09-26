
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
                <h2>Faça parte dessa transformação</h2>
                <p>
                    O formulário será integrado na próxima etapa.
                </p>
            </div>
        </section>
    `;
}
