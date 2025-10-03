(function () {
    "use strict";
    var a = {
        7669: function (a, s, e) {
            var o = e(5130),
                i = e(6768),
                l = e(4232),
                n = e.p + "img/whatsapp_logo.4685eb4b.png";
            const r = {
                id: "nav"
            },
                c = {
                    class: "row"
                },
                t = {
                    class: "col-sm-2 col-md-2 col-lg-2 col-xl-2"
                },
                d = {
                    href: "/"
                },
                m = ["src"],
                u = {
                    class: "col-sm-10 col-md-10 col-lg-10 col-xl-10"
                },
                p = {
                    id: "rotas_div"
                },
                v = {
                    id: "menu_hamburguer"
                },
                g = {
                    class: "list-group list-group-flush"
                };

            function b(a, s, e, o, b, f) {
                const _ = (0, i.g2)("PaginaInicial"),
                    h = (0, i.g2)("DescInicial"),
                    k = (0, i.g2)("PaginaResolucao"),
                    L = (0, i.g2)("Texto1"),
                    x = (0, i.g2)("QuemSomos2"),
                    C = (0, i.g2)("Diferenciais"),
                    E = (0, i.g2)("ComoAjudar"),
                    w = (0, i.g2)("NossosClientes"),
                    O = (0, i.g2)("QuemSomos3"),
                    P = (0, i.g2)("FormularioContato");
                return (0, i.uX)(), (0, i.CE)(i.FK, null, [(0, i.Lk)("div", r, [(0, i.Lk)("div", c, [(0, i.Lk)("div", t, [(0, i.Lk)("a", d, [(0, i.Lk)("img", {
                    src: "kit-colors-preto" == b.modeloSite ? "./img/logos/elleveBranco.png" : "./img/logos/400PngdpiLogoCropped.png",
                    id: "logo"
                }, null, 8, m)])]), (0, i.Lk)("div", u, [(0, i.Lk)("div", p, [(0, i.Lk)("a", {
                    class: (0, l.C4)([{
                        active: "pagina_inicial" === b.activeSection
                    }, "menu_buttons"]),
                    id: "menu_pagina_inicial",
                    onClick: s[0] || (s[0] = a => f.scroolTo("pagina_inicial"))
                }, "INÍCIO", 2), (0, i.Lk)("a", {
                    class: (0, l.C4)([{
                        active: "pagina_texto1" === b.activeSection
                    }, "menu_buttons"]),
                    id: "menu_pagina_texto1",
                    onClick: s[1] || (s[1] = a => f.scroolTo("pagina_texto1"))
                }, "SOBRE A ELLEVE", 2), (0, i.Lk)("a", {
                    class: (0, l.C4)([{
                        active: "pagina_como_ajudar" === b.activeSection
                    }, "menu_buttons"]),
                    id: "menu_pagina_como_ajudar",
                    onClick: s[2] || (s[2] = a => f.scroolTo("pagina_como_ajudar"))
                }, "COMO PODEMOS TE AJUDAR", 2), (0, i.Lk)("a", {
                    class: (0, l.C4)([{
                        active: "pagina_nossos_clientes" === b.activeSection
                    }, "menu_buttons"]),
                    id: "menu_pagina_nossos_clientes",
                    onClick: s[3] || (s[3] = a => f.scroolTo("pagina_nossos_clientes"))
                }, "NOSSOS CLIENTES", 2), (0, i.Lk)("a", {
                    class: (0, l.C4)([{
                        active: "pagina_quem_somos3" === b.activeSection
                    }, "menu_buttons"]),
                    id: "menu_pagina_quem_somos3",
                    onClick: s[4] || (s[4] = a => f.scroolTo("pagina_quem_somos3"))
                }, "QUEM SOMOS", 2), (0, i.Lk)("a", {
                    class: (0, l.C4)([{
                        active: "pagina_formulario" === b.activeSection
                    }, "menu_buttons"]),
                    id: "menu_pagina_formulario",
                    onClick: s[5] || (s[5] = a => f.scroolTo("pagina_formulario"))
                }, "FALE CONOSCO", 2)]), (0, i.Lk)("div", v, [(0, i.Lk)("i", {
                    class: "bi bi-list",
                    onClick: s[6] || (s[6] = a => f.toggleMenu())
                })])]), s[14] || (s[14] = (0, i.Lk)("a", {
                    href: "https://wa.me/+5511941516246?text=Ol%C3%A1%2C%20venho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Elleve.",
                    target: "blank"
                }, [(0, i.Lk)("img", {
                    src: n,
                    alt: "",
                    id: "whatsapp_logo"
                })], -1))]), (0, i.Lk)("nav", {
                    class: (0, l.C4)(["sidebar", {
                        "is-visible": b.isNavVisible
                    }]),
                    id: "nav_menu"
                }, [(0, i.Lk)("i", {
                    class: "icons bi bi-x",
                    id: "close_nav",
                    title: "Fechar",
                    onClick: s[7] || (s[7] = a => f.toggleMenu())
                }), s[15] || (s[15] = (0, i.Lk)("br", null, null, -1)), (0, i.Lk)("ul", g, [(0, i.Lk)("li", {
                    class: "list-group-item",
                    onClick: s[8] || (s[8] = a => (f.scroolTo("pagina_inicial"), f.toggleMenu()))
                }, "INÍCIO"), (0, i.Lk)("li", {
                    class: "list-group-item",
                    onClick: s[9] || (s[9] = a => (f.scroolTo("pagina_texto1"), f.toggleMenu()))
                }, "SOBRE A ELLEVE"), (0, i.Lk)("li", {
                    class: "list-group-item",
                    onClick: s[10] || (s[10] = a => (f.scroolTo("pagina_como_ajudar"), f.toggleMenu()))
                }, "COMO PODEMOS TE AJUDAR"), (0, i.Lk)("li", {
                    class: "list-group-item",
                    onClick: s[11] || (s[11] = a => (f.scroolTo("pagina_nossos_clientes"), f.toggleMenu()))
                }, "NOSSOS CLIENTES"), (0, i.Lk)("li", {
                    class: "list-group-item",
                    onClick: s[12] || (s[12] = a => (f.scroolTo("pagina_quem_somos3"), f.toggleMenu()))
                }, "QUEM SOMOS"), (0, i.Lk)("li", {
                    class: "list-group-item",
                    onClick: s[13] || (s[13] = a => (f.scroolTo("pagina_formulario"), f.toggleMenu()))
                }, "FALE CONOSCO")])], 2)]), (0, i.bF)(_), (0, i.bF)(h), (0, i.bF)(k), (0, i.bF)(L), (0, i.bF)(x), (0, i.bF)(C), (0, i.bF)(E), (0, i.bF)(w), (0, i.bF)(O), (0, i.bF)(P), s[16] || (s[16] = (0, i.Fv)('<div id="footer"><div class="row"><div class="col-md-4"><img src="./img/logos/400PngdpiLogoCropped.png" alt=""></div><div class="col-md-4"><p>© ELLEVE | TODOS OS DIREITOS RESERVADOS.</p></div><div class="col-md-4"><p>DESENVOLVIDO POR <a href="https://myportfoliogeovane.netlify.app/" target="_blank">Geovane Barbosa</a></p></div></div></div>', 1))], 64)
            }
            const f = {
                ref: "pagina_inicial",
                id: "pagina_inicial"
            };

            function _(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", f, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo1.png" alt="" class="fundo"><div class="row"><div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" id="especialidade"><div class="textos"><h2>Muito mais do que uma consultoria de Melhoria Contínua e Excelência Operacional</h2><br><span>Encontre a solução para o seu negócio! Oferecemos a mesma qualidade e expertise dos grandes grupos de consultoria, porém com a flexibilidade, custo e simplicidade de um <strong>escritório boutique.</strong></span><br><br><span id="frase_executivos">Nosso foco é fazer a sua empresa prosperar!</span></div></div></div>', 2)]), 512)
            }
            var h = {
                name: "PaginaInicial"
            },
                k = e(1241);
            const L = (0, k.A)(h, [
                ["render", _]
            ]);
            var x = L;
            const C = {
                id: "pagina_desc_inicial"
            };

            function E(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", C, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo_desc_inicial.jpg" alt="" class="fundo"><div id="desc_inicial_div"><div><br><h3>Somente quem possui mais de 30 anos de experiência no estudo, disseminação e aplicação das metodologias de <strong>Gestão, Melhoria Continua, Inovação e Excelência Operacional,</strong> é capaz de selecionar as ferramentas ideais para resolver cada problema, nossa paixão está em te ajudar a construir um <strong>ANO PERFEITO</strong> e enraizar a cultura de <strong>MELHORIA CONTINUA!</strong></h3><br><h2><strong>IMAGINAR. ACONSELHAR. IMPLEMENTAR. CAPACITAR.</strong></h2><br><h3>Temos uma abordagem adaptável para transformar sua empresa de dentro para fora. Nosso time de especialistas está aqui para criar soluções para todos os seus maiores problemas, não importa quão complicados ou complexos sejam.</h3><br><h1>Descubra como transformar seus desafios em <strong>OPORTUNIDADES!</strong></h1></div></div>', 2)]))
            }
            var w = {
                name: "PaginaResolucao"
            };
            const O = (0, k.A)(w, [
                ["render", E]
            ]);
            var P = O;
            const S = {
                id: "pagina_resolucao"
            };

            function y(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", S, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo_site_preto.png" alt="" class="fundo"><div id="resolucao_div1" class="titulo_page"><h1>Por que precisamos de melhoria contínua</h1></div><div id="resolucao_div2"><div class="row"><div class="col-col-12 col-md-12 col-lg-3" id="licao_div_relative"><div id="licao_div"><img src="./img/licao.png" alt=""></div></div><div class="col-sm-12 col-md-12 col-lg-9 flex-box"><ul class="d-inline caixas"><li class="list-group-item border-gradient"><div class="row" style="width:100%;"><div class="caixa_titulo flex-box titulo_span_div"><span>Desperdícios</span></div><div class="caixa_barra flex-box"><div class="barra"></div></div><div class="caixa_desc flex-box"><span>Você sabia que 70% das atividades que realizamos no dia a dia são vistas como desperdício aos olhos do cliente?</span></div></div></li><li class="list-group-item border-gradient"><div class="row"><div class="caixa_titulo flex-box titulo_span_div"><span>Dilema do tempo gasto x investido</span></div><div class="caixa_barra flex-box"><div class="barra"></div></div><div class="caixa_desc flex-box"><span>Você sabia que líderes tendem a gastar 40% do seu tempo com burocracias e sistemas de gestão desalinhados? Boa parte deste tempo geralmente é gasto em rituais de gestão improdutivos, longos e sem propósito definido</span></div></div></li><li class="list-group-item border-gradient"><div class="row"><div class="caixa_titulo flex-box titulo_span_div"><span>Dilema da &quot;Foto vs Filme&quot;</span></div><div class="caixa_barra flex-box"><div class="barra"></div></div><div class="caixa_desc flex-box"><span>Você tira fotos da sua performance todo mês e se sente surpreendido ao descobrir que não conseguiu atingir a meta? Ou você acompanha a tendência dos seus indicadores como um filme e prevê se estão num caminho positivo ou não para se antecipar aos problemas?</span></div></div></li><li class="list-group-item border-gradient"><div class="row"><div class="caixa_titulo flex-box titulo_span_div"><span>Por que a maioria dos projetos falham?</span></div><div class="caixa_barra flex-box"><div class="barra"></div></div><div class="caixa_desc flex-box"><span>75% dos projetos falham na metade por não iniciarem com as perguntas chave: Qual o problema que estamos tentando resolver? Qual a sua causa raiz? Qual o escopo? Qual a métrica que será usada para medir seu sucesso? Quais serão os mecanismos de sustentação dos ganhos obtidos?</span></div></div></li></ul></div></div></div>', 3)]))
            }
            var A = {
                name: "PaginaResolucao"
            };
            const j = (0, k.A)(A, [
                ["render", y]
            ]);
            var q = j;
            const F = {
                id: "pagina_texto1"
            };

            function M(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", F, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo_site_preto.png" alt="" class="fundo"><div id="resolucao_div1" class="titulo_page"><h1>Sobre a Elleve</h1></div><div id="texto1"><div class="row"><div class="col-md-11 col-lg-5" id="texto1_div"><br><div class="barra_h3"></div><p id="text_attention">Uma consultoria diferente de todas... Essa sempre foi a nossa ideia.</p><p>Nossa proposta de valor será ter a mesma (ou melhor) qualidade das mega Consultorias tradicionais, porém com a <strong class="strong_special">simplicidade, flexibilidade e custo de um escritório “boutique”.</strong></p><p>Queremos ajudar nossos clientes a recuperar a confiança em suas operações todos os dias. Não temos a intenção de “vender método”, mas fazer com que os mais complexos problemas sejam resolvidos de forma rápida e sustentável, <strong class="strong_special">SEMPRE CENTRADOS NO CLIENTE.</strong></p></div><div class="col-sm-12 col-md-12 col-lg-7" id="business1_div"><img src="./img/business1.jpeg" alt="" id="business1"></div></div></div>', 3)]))
            }
            var N = {
                name: "PaginaResolucao"
            };
            const I = (0, k.A)(N, [
                ["render", M]
            ]);
            var T = I;
            const D = {
                ref: "pagina_como_ajudar",
                id: "pagina_como_ajudar"
            };

            function z(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", D, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo_site_preto.png" alt="" class="fundo"><div id="resolucao_div1" class="titulo_page"><h1>Como podemos te ajudar</h1></div><div class="container"><div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item row active" data-bs-interval="20000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Programas de treinamento e capacitação</h4><div class="barra_h"></div><p>Desenvolvemos seus colaboradores nas técnicas de resolução de problemas, melhoria contínua, inovação e demais competências do futuro.</p></div></div><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Planejamento e Desdobramento Estratégico</h4><div class="barra_h"></div><p>Facilitação de eventos de Planejamento Estratégico com líderes para co-criação dos pilares que apoiarão as metas de curto, médio e longo prazo, envolvendo colaboradores no desdobramento dessas metas.</p></div></div><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Governança, Gestão &amp; Gerenciamento da Rotina</h4><div class="barra_h"></div><p>Foco na eliminação de burocracias e gargalos, alinhando o fluxo de gestão ao que realmente importa para entregar a estratégia e operações, sem desperdício de tempo.</p></div></div></div><div class="carousel-item row" data-bs-interval="20000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Desenvolver e Acelerar Inovações Centradas no Cliente</h4><div class="barra_h"></div><p>Atraves do pensamento Ágil trazemos o cliente para o centro das inovações, mapeando personas, suas necessidades e suas dificuldades para que encontremos a solução mais eficaz, assertiva e inovadora possível.</p></div></div><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Programas de Produtividade e Escritório de Projetos</h4><div class="barra_h"></div><p>Criamos um ambiente de co-criação focado na redução de custos e aumento de receita, utilizando Lean e Six Sigma para identificar causas raizes e garantir ganhos sustentáveis.</p></div></div><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Diagnóstico de Performance Comercial</h4><div class="barra_h"></div><p>Quer impulsionar suas vendas? Através de método e estratégia, te ajudamos a descobrir como vender mais e melhor, mitigando riscos e aumentando nosso padrão de compliance.</p></div></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div><div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item row active" data-bs-interval="15000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Programas de treinamento e capacitação</h4><div class="barra_h"></div><p>Desenvolvemos seus colaboradores nas técnicas de resolução de problemas, melhoria contínua, inovação e demais competências do futuro.</p></div></div></div><div class="carousel-item row" data-bs-interval="15000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Planejamento e Desdobramento Estratégico</h4><div class="barra_h"></div><p>Facilitação de eventos de Planejamento Estratégico com líderes para co-criação dos pilares que apoiarão as metas de curto, médio e longo prazo, envolvendo colaboradores no desdobramento dessas metas.</p></div></div></div><div class="carousel-item row" data-bs-interval="15000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Governança, Gestão &amp; Gerenciamento da Rotina</h4><div class="barra_h"></div><p>Foco na eliminação de burocracias e gargalos, alinhando o fluxo de gestão ao que realmente importa para entregar a estratégia e operações, sem desperdício de tempo.</p></div></div></div><div class="carousel-item row" data-bs-interval="15000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Desenvolver e Acelerar Inovações Centradas no Cliente</h4><div class="barra_h"></div><p>Atraves do pensamento Ágil trazemos o cliente para o centro das inovações, mapeando personas, suas necessidades e suas dificuldades para que encontremos a solução mais eficaz, assertiva e inovadora possível.</p></div></div></div><div class="carousel-item row" data-bs-interval="15000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Programas de Produtividade e Escritório de Projetos</h4><div class="barra_h"></div><p>Criamos um ambiente de co-criação focado na redução de custos e aumento de receita, utilizando Lean e Six Sigma para identificar causas raizes e garantir ganhos sustentáveis.</p></div></div></div><div class="carousel-item row" data-bs-interval="15000"><div class="col-sm-12 col-md-12 col-lg-4"><div class="box4"><h4>Diagnóstico de Performance Comercial</h4><div class="barra_h"></div><p>Quer impulsionar suas vendas? Através de método e estratégia, te ajudamos a descobrir como vender mais e melhor, mitigando riscos e aumentando nosso padrão de compliance.</p></div></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></div>', 3)]), 512)
            }
            var R = {
                name: "ComoAjudar3"
            };
            const B = (0, k.A)(R, [
                ["render", z]
            ]);
            var Q = B;
            const X = {
                id: "pagina_diferenciais"
            };

            function G(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", X, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo_site_preto.png" alt="" class="fundo" id=""><div id="resolucao_div1" class="titulo_page"><h1>Nossos Diferenciais</h1></div><div class="row" id="img_diferenciais"><div class="col-md-12"><img src="./img/diferenciais.png" alt="" id="diferenciais_img"></div></div>', 3)]))
            }
            var V = {
                name: "ComoAjudar3"
            };
            const $ = (0, k.A)(V, [
                ["render", G]
            ]);
            var U = $;
            const W = {
                id: "pagina_quem_somos2"
            };

            function H(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", W, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo_site_preto.png" alt="" class="fundo"><div id="quem_somos_div"><div class="row"><div class="col-md-12 col-lg-8" style="position:relative;" id="business_div1_img"><img src="./img/business2.jpeg" alt="" id="business2"></div><div class="col-md-12 col-lg-4"><div class="sobre3"><div class="barra_h3"></div><span>A Elleve foi criada por ex-executivos de grandes multinacionais (todos Master Black Belts, professores renomados de Lean Six Sigma, PDCA, Governança, Agile &amp; Design Thinking) que por onde passaram, promoveram uma profunda transformação no <strong class="strong_special">sistema de gestão</strong>, na geração de <strong class="strong_special">produtividade</strong>, aceleração de <strong class="strong_special">inovações</strong> e enraizamento da cultura de <strong class="strong_special">melhoria contínua</strong>.</span></div></div><div class="col-md-12 col-lg-8" style="position:relative;" id="business_div2_img"><img src="./img/business2.jpeg" alt="" id="business2"></div></div></div>', 2)]))
            }
            var J = {
                name: "QuemSomos"
            };
            const K = (0, k.A)(J, [
                ["render", H]
            ]);
            var Y = K;
            const Z = {
                id: "pagina_quem_somos3"
            },
                aa = {
                    id: "quem_somos_div2"
                },
                sa = {
                    class: "row"
                },
                ea = {
                    class: "col-md-12 sobre"
                },
                oa = {
                    class: "container"
                },
                ia = {
                    class: "row"
                },
                la = {
                    class: "col-md-12 col-lg-4"
                },
                na = {
                    class: "m-3 equipe"
                },
                ra = {
                    class: "col-md-12 col-lg-4"
                },
                ca = {
                    class: "m-3 equipe"
                },
                ta = {
                    class: "col-md-12 col-lg-4"
                },
                da = {
                    class: "m-3 equipe"
                },
                ma = {
                    class: "col-md-12 col-lg-4"
                },
                ua = {
                    class: "m-3 equipe"
                },
                pa = {
                    key: 0,
                    class: "popup"
                },
                va = {
                    class: "popup"
                },
                ga = {
                    key: 0
                },
                ba = {
                    class: "row popup-content"
                },
                fa = {
                    key: 1
                },
                _a = {
                    class: "row popup-content"
                },
                ha = {
                    key: 2
                },
                ka = {
                    class: "row popup-content"
                },
                La = {
                    key: 3
                },
                xa = {
                    class: "row popup-content"
                };

            function Ca(a, s, e, o, l, n) {
                console.log(a, s, e, o, l, n)
                return (0, i.uX)(), (0, i.CE)("div", Z, [
                    s[36] || (s[36] = (0, i.Lk)("img", {
                        src: "./img/fundo_site_preto.png",
                        alt: "",
                        class: "fundo",
                        id: "fundo_quem_somos3"
                    }, null, -1)),
                    s[37] || (s[37] = (0, i.Lk)("div", {
                        id: "resolucao_div1",
                        class: "titulo_page"
                    }, [(0, i.Lk)("h1", null, "Quem Somos")], -1)),
                    (0, i.Lk)("div", aa, [
                        (0, i.Lk)("div", sa, [
                            (0, i.Lk)("div", ea, [
                                (0, i.Lk)("div", oa, [
                                    (0, i.Lk)("div", ia, [
                                        (0, i.Lk)("div", la, [
                                            (0, i.Lk)("div", na, [
                                                s[9] || (s[9] = (0, i.Lk)("img", { src: "./img/flavio.jpeg", alt: "" }, null, -1)),
                                                s[10] || (s[10] = (0, i.Lk)("h3", { class: "nome" }, "Flávio Fraga", -1)),
                                                s[11] || (s[11] = (0, i.Lk)("h4", { class: "funcao" }, "Inovações & Processos Comerciais", -1)),
                                                s[12] || (s[12] = (0, i.Lk)("p", null, "flavio.fraga@ellevesolutions.com", -1)),
                                                (0, i.Lk)("span", { onClick: s[0] || (s[0] = a => n.openPopup(1)) }, s[8] || [(0, i.eW)("Ler Bio "), (0, i.Lk)("i", { class: "bi bi-chevron-right" }, null, -1)])
                                            ])
                                        ]),
                                        (0, i.Lk)("div", ra, [
                                            (0, i.Lk)("div", ca, [
                                                s[14] || (s[14] = (0, i.Lk)("img", { src: "./img/rubens.jpeg", alt: "" }, null, -1)),
                                                s[15] || (s[15] = (0, i.Lk)("h3", { class: "nome" }, "Rubens Falasque", -1)),
                                                s[16] || (s[16] = (0, i.Lk)("h4", { class: "funcao" }, "Estratégia & Governança", -1)),
                                                s[17] || (s[17] = (0, i.Lk)("p", null, "rubens.falasque@ellevesolutions.com", -1)),
                                                (0, i.Lk)("span", { onClick: s[1] || (s[1] = a => n.openPopup(2)) }, s[13] || [(0, i.eW)("Ler Bio "), (0, i.Lk)("i", { class: "bi bi-chevron-right" }, null, -1)])
                                            ])
                                        ]),
                                        (0, i.Lk)("div", ta, [
                                            (0, i.Lk)("div", da, [
                                                s[19] || (s[19] = (0, i.Lk)("img", { src: "./img/edu.jpeg", alt: "" }, null, -1)),
                                                s[20] || (s[20] = (0, i.Lk)("h3", { class: "nome" }, "Eduardo Castro", -1)),
                                                s[21] || (s[21] = (0, i.Lk)("h4", { class: "funcao" }, "Operações & Projetos", -1)),
                                                s[22] || (s[22] = (0, i.Lk)("p", null, "edu.castro@ellevesolutions.com", -1)),
                                                (0, i.Lk)("span", { onClick: s[2] || (s[2] = a => n.openPopup(3)) }, s[18] || [(0, i.eW)("Ler Bio "), (0, i.Lk)("i", { class: "bi bi-chevron-right" }, null, -1)])
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ]),
                    l.isPopupOpen ? ((0, i.uX)(), (0, i.CE)("div", pa, [
                        (0, i.Lk)("div", null, [
                            (0, i.Lk)("div", va, [
                                1 == l.imageNumber ? ((0, i.uX)(), (0, i.CE)("div", ga, [
                                    (0, i.Lk)("div", ba, [
                                        s[28] || (s[28] = (0, i.Lk)("div", { class: "col-sm-4" }, [(0, i.Lk)("img", { src: "./img/flavio.jpeg", alt: "" })], -1)),
                                        s[29] || (s[29] = (0, i.Lk)("div", { class: "col-sm-8" }, [(0, i.Lk)("p", null, "Flávio é um executivo com mais de 22 anos de experiência em otimização de processos e crescimento de negócios. Com atuação em empresas globais, é especialista em cadeia de suprimentos, qualidade e inovação. Co-fundador e mentor na FIA Profuturo Startup Lab, possui formação em Engenharia de Produção, MBA Executivo Internacional, Master em Design Thinking pelo MIT, e certificações em Scrum Master e Master Black Belt.")], -1)),
                                        (0, i.Lk)("button", { onClick: s[4] || (s[4] = (...a) => n.closePopup && n.closePopup(...a)), class: "close-btn" }, "X")
                                    ])
                                ])) : (0, i.Q3)("", !0),
                                2 == l.imageNumber ? ((0, i.uX)(), (0, i.CE)("div", fa, [
                                    (0, i.Lk)("div", _a, [
                                        s[30] || (s[30] = (0, i.Lk)("div", { class: "col-sm-4" }, [(0, i.Lk)("img", { src: "./img/rubens.jpeg", alt: "" })], -1)),
                                        s[31] || (s[31] = (0, i.Lk)("div", { class: "col-sm-8" }, [(0, i.Lk)("p", null, "Atua por mais de 20 anos como Executivo de Estratégia, Governança, Produtividade e Inovação. Engenheiro Mecânico e Mestrado pelo Instituto Tecnológico de Aeronáutica (ITA), MBA pela Business School de SP, Master Black Belt em Lean Six Sigma, PMI certificado, Scrum Master Agile. Rubens atuou nos últimos anos como membro do Board Executivo em multinacionais líderes em seus setores como Embraer, Whirpool, Maersk Line e Syngenta.")], -1)),
                                        (0, i.Lk)("button", { onClick: s[5] || (s[5] = (...a) => n.closePopup && n.closePopup(...a)), class: "close-btn" }, "X")
                                    ])
                                ])) : (0, i.Q3)("", !0),
                                3 == l.imageNumber ? ((0, i.uX)(), (0, i.CE)("div", ha, [
                                    (0, i.Lk)("div", ka, [
                                        s[32] || (s[32] = (0, i.Lk)("div", { class: "col-sm-4" }, [(0, i.Lk)("img", { src: "./img/edu.jpeg", alt: "" })], -1)),
                                        s[33] || (s[33] = (0, i.Lk)("div", { class: "col-sm-8" }, [(0, i.Lk)("p", null, "Executivo com mais de 20 anos de experiência em empresas líderes dos segmentos agroquímico e de bens de consumo no Brasil, EUA e México. Engenheiro de formação e especialista em metodologias como Six Sigma, Lean Manufacturing e Lean Office, ele se destaca por sua capacidade de otimizar e integrar processos em áreas como Operações, Supply Chain e Comercial. Seu compromisso com a geração de valor ao cliente e a sustentabilidade a longo prazo é uma marca de sua trajetória.")], -1)),
                                        (0, i.Lk)("button", { onClick: s[6] || (s[6] = (...a) => n.closePopup && n.closePopup(...a)), class: "close-btn" }, "X")
                                    ])
                                ])) : (0, i.Q3)("", !0)
                            ])
                        ])
                    ])) : (0, i.Q3)("", !0)
                ])
            }

            var Ea = {
                name: "QuemSomos",
                data() {
                    return {
                        isPopupOpen: !1,
                        imageNumber: 1
                    }
                },
                methods: {
                    openPopup(a) {
                        this.imageNumber = a, this.isPopupOpen = !0
                    },
                    closePopup() {
                        this.isPopupOpen = !1
                    }
                }
            };
            const wa = (0, k.A)(Ea, [
                ["render", Ca]
            ]);
            var Oa = wa;
            const Pa = {
                ref: "pagina_nossos_clientes",
                id: "pagina_nossos_clientes"
            };

            function Sa(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", Pa, s[0] || (s[0] = [(0, i.Fv)('<img src="./img/fundo_site_preto.png" alt="" class="fundo"><div id="resolucao_div1" class="titulo_page"><h1>Nossos Clientes</h1></div><div id="nossos_clientes_div"><div class="row"><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/agrosol.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/alfa.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/avon.png" class="marca_grande" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/celestica.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/coopercitrus.png.jpg" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/costabeber.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/dipagro.png.jpg" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/embraer.png.jpg" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/ge.png.jpg" class="marca_grande" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/juparana.png.jpg" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/maersk.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/mosaic.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/sinagro.png.jpg" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/sipcamnichino.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/syngenta.png" alt=""></div><div class="img_clientes_div col-6 col-sm-6 col-md-6 col-lg-3"><img src="./img/clientes/whirlpool.png.jpg" alt=""></div></div></div>', 3)]), 512)
            }
            var ya = {
                name: "NossosClientes"
            };
            const Aa = (0, k.A)(ya, [
                ["render", Sa]
            ]);
            var ja = Aa;
            const qa = {
                id: "pagina_formulario"
            };

            function Fa(a, s, e, o, l, n) {
                return (0, i.uX)(), (0, i.CE)("div", qa, s[0] || (s[0] = [(0, i.Lk)("img", {
                    src: "./img/fundo_site_preto.png",
                    alt: "",
                    class: "fundo"
                }, null, -1), (0, i.Lk)("div", {
                    id: "resolucao_div1",
                    class: "titulo_page"
                }, [(0, i.Lk)("h1", null, "Fale Conosco")], -1), (0, i.Lk)("div", {
                    class: "row"
                }, [(0, i.Lk)("div", {
                    class: "col-md-12 col-lg-12",
                    id: "formulario_text"
                }, [(0, i.Lk)("h3", null, "Preencha o formulário e alguém da nossa equipe irá contatá-lo.")]), (0, i.Lk)("div", {
                    class: "col-md-12 col-lg-12"
                }, [(0, i.Lk)("div", {
                    id: "formulario_campos"
                }, [(0, i.Lk)("form", {
                    method: "post",
                    id: "formContato"
                }, [(0, i.Lk)("div", {
                    style: {
                        display: "none"
                    }
                }, [(0, i.Lk)("input", {
                    type: "hidden",
                    name: "_wpcf7",
                    value: "5899"
                }), (0, i.Lk)("input", {
                    type: "hidden",
                    name: "_wpcf7_version",
                    value: "5.9.8"
                }), (0, i.Lk)("input", {
                    type: "hidden",
                    name: "_wpcf7_locale",
                    value: "pt_BR"
                }), (0, i.Lk)("input", {
                    type: "hidden",
                    name: "_wpcf7_unit_tag",
                    value: "wpcf7-f5899-p5887-o1"
                }), (0, i.Lk)("input", {
                    type: "hidden",
                    name: "_wpcf7_container_post",
                    value: "5887"
                }), (0, i.Lk)("input", {
                    type: "hidden",
                    name: "_wpcf7_posted_data_hash",
                    value: ""
                })]), (0, i.Lk)("p", null, [(0, i.Lk)("label", null, " Nome*"), (0, i.Lk)("br"), (0, i.Lk)("span", {
                    class: "wpcf7-form-control-wrap",
                    "data-name": "your-name"
                }, [(0, i.Lk)("input", {
                    size: "40",
                    maxlength: "400",
                    class: "wpcf7-form-control wpcf7-text wpcf7-validates-as-required",
                    "aria-required": "true",
                    "aria-invalid": "false",
                    value: "",
                    type: "text",
                    name: "your-name",
                    id: "your-name"
                })])]), (0, i.Lk)("p", null, [(0, i.Lk)("label", null, " Empresa*"), (0, i.Lk)("br"), (0, i.Lk)("span", {
                    class: "wpcf7-form-control-wrap",
                    "data-name": "your-company"
                }, [(0, i.Lk)("input", {
                    size: "40",
                    maxlength: "400",
                    class: "wpcf7-form-control wpcf7-text wpcf7-validates-as-required",
                    "aria-required": "true",
                    "aria-invalid": "false",
                    value: "",
                    type: "text",
                    name: "your-company",
                    id: "your-company"
                })])]), (0, i.Lk)("p", null, [(0, i.Lk)("label", null, " Posição (opcional)"), (0, i.Lk)("br"), (0, i.Lk)("span", {
                    class: "wpcf7-form-control-wrap",
                    "data-name": "your-position"
                }, [(0, i.Lk)("input", {
                    size: "40",
                    maxlength: "400",
                    class: "wpcf7-form-control wpcf7-text",
                    "aria-invalid": "false",
                    value: "",
                    type: "text",
                    name: "your-position",
                    id: "your-position"
                })])]), (0, i.Lk)("p", null, [(0, i.Lk)("label", null, " Email*"), (0, i.Lk)("br"), (0, i.Lk)("span", {
                    class: "wpcf7-form-control-wrap",
                    "data-name": "your-email"
                }, [(0, i.Lk)("input", {
                    size: "40",
                    maxlength: "400",
                    class: "wpcf7-form-control wpcf7-text wpcf7-validates-as-required",
                    "aria-required": "true",
                    "aria-invalid": "false",
                    value: "",
                    type: "text",
                    name: "your-email",
                    id: "your-email"
                })])]), (0, i.Lk)("p", null, [(0, i.Lk)("label", null, " O seu número de telefone*"), (0, i.Lk)("br"), (0, i.Lk)("span", {
                    class: "wpcf7-form-control-wrap",
                    "data-name": "your-number"
                }, [(0, i.Lk)("input", {
                    size: "40",
                    maxlength: "400",
                    class: "wpcf7-form-control wpcf7-text",
                    "aria-invalid": "false",
                    value: "",
                    type: "text",
                    name: "your-number",
                    id: "your-number"
                })])]), (0, i.Lk)("p", null, [(0, i.Lk)("label", null, " A sua mensagem*"), (0, i.Lk)("br"), (0, i.Lk)("span", {
                    class: "wpcf7-form-control-wrap",
                    "data-name": "your-message"
                }, [(0, i.Lk)("textarea", {
                    cols: "40",
                    rows: "10",
                    maxlength: "2000",
                    class: "wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required",
                    "aria-required": "true",
                    "aria-invalid": "false",
                    name: "your-message",
                    id: "your-message"
                })])]), (0, i.Lk)("p", {
                    style: {
                        "text-align": "center"
                    }
                }, [(0, i.Lk)("input", {
                    type: "button",
                    class: "btn btn-success",
                    value: "Enviar",
                    id: "enviar_mensagem",
                    onclick: "enviarForm()"
                }), (0, i.Lk)("span", {
                    class: "wpcf7-spinner"
                })])])])])], -1)]))
            }
            var Ma = {
                name: "FormularioContato"
            };
            const Na = (0, k.A)(Ma, [
                ["render", Fa]
            ]);
            var Ia = Na,
                Ta = {
                    name: "App",
                    components: {
                        PaginaInicial: x,
                        DescInicial: P,
                        PaginaResolucao: q,
                        Texto1: T,
                        ComoAjudar: Q,
                        Diferenciais: U,
                        QuemSomos2: Y,
                        QuemSomos3: Oa,
                        NossosClientes: ja,
                        FormularioContato: Ia
                    },
                    data() {
                        return {
                            isPopupOpen: !1,
                            isNavVisible: !1,
                            imageSrc: "",
                            activeSection: "",
                            modeloSite: document.getElementById("app").classList[0]
                        }
                    },
                    mounted: function () {
                        const a = {
                            root: null,
                            threshold: .5
                        };
                        this.observer = new IntersectionObserver(this.handleIntersection, a), this.$refs.pagina_inicial && this.observer.observe(this.$refs.pagina_inicial), this.$refs.pagina_quem_somos && this.observer.observe(this.$refs.pagina_quem_somos), this.$refs.pagina_como_ajudar && this.observer.observe(this.$refs.pagina_como_ajudar), this.$refs.pagina_nossos_clientes && this.observer.observe(this.$refs.pagina_nossos_clientes)
                    },
                    methods: {
                        scroolTo: function (a) {
                            const s = "pagina_inicial" == a ? 0 : 50,
                                e = a,
                                o = document.querySelector("#" + e),
                                i = -50,
                                l = o.getBoundingClientRect().top,
                                n = l + window.pageYOffset + i + s;
                            window.scrollTo({
                                top: n,
                                behavior: "smooth"
                            })
                        },
                        handleIntersection(a) {
                            a.forEach((a => {
                                a.isIntersecting && (this.activeSection = a.target.id)
                            }))
                        },
                        beforeDestroy() {
                            this.observer.disconnect()
                        },
                        openPopup(a) {
                            this.imageSrc = `../public./img/solucoes/solucao${a}.jpeg`, this.isPopupOpen = !0
                        },
                        closePopup() {
                            this.isPopupOpen = !1
                        },
                        toggleMenu: function () {
                            this.isNavVisible = !this.isNavVisible
                        },
                        menuFalse: function () {
                            this.isNavVisible = !1
                        }
                    }
                };
            const Da = (0, k.A)(Ta, [
                ["render", b]
            ]);
            var za = Da;
            (0, o.Ef)(za).mount("#app")
        }
    },
        s = {};

    function e(o) {
        var i = s[o];
        if (void 0 !== i) return i.exports;
        var l = s[o] = {
            exports: {}
        };
        return a[o].call(l.exports, l, l.exports, e), l.exports
    }
    e.m = a,
        function () {
            var a = [];
            e.O = function (s, o, i, l) {
                if (!o) {
                    var n = 1 / 0;
                    for (d = 0; d < a.length; d++) {
                        o = a[d][0], i = a[d][1], l = a[d][2];
                        for (var r = !0, c = 0; c < o.length; c++)(!1 & l || n >= l) && Object.keys(e.O).every((function (a) {
                            return e.O[a](o[c])
                        })) ? o.splice(c--, 1) : (r = !1, l < n && (n = l));
                        if (r) {
                            a.splice(d--, 1);
                            var t = i();
                            void 0 !== t && (s = t)
                        }
                    }
                    return s
                }
                l = l || 0;
                for (var d = a.length; d > 0 && a[d - 1][2] > l; d--) a[d] = a[d - 1];
                a[d] = [o, i, l]
            }
        }(),
        function () {
            e.n = function (a) {
                var s = a && a.__esModule ? function () {
                    return a["default"]
                } : function () {
                    return a
                };
                return e.d(s, {
                    a: s
                }), s
            }
        }(),
        function () {
            e.d = function (a, s) {
                for (var o in s) e.o(s, o) && !e.o(a, o) && Object.defineProperty(a, o, {
                    enumerable: !0,
                    get: s[o]
                })
            }
        }(),
        function () {
            e.g = function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (a) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function () {
            e.o = function (a, s) {
                return Object.prototype.hasOwnProperty.call(a, s)
            }
        }(),
        function () {
            e.p = "/"
        }(),
        function () {
            var a = {
                524: 0
            };
            e.O.j = function (s) {
                return 0 === a[s]
            };
            var s = function (s, o) {
                var i, l, n = o[0],
                    r = o[1],
                    c = o[2],
                    t = 0;
                if (n.some((function (s) {
                    return 0 !== a[s]
                }))) {
                    for (i in r) e.o(r, i) && (e.m[i] = r[i]);
                    if (c) var d = c(e)
                }
                for (s && s(o); t < n.length; t++) l = n[t], e.o(a, l) && a[l] && a[l][0](), a[l] = 0;
                return e.O(d)
            },
                o = self["webpackChunk"] = self["webpackChunk"] || [];
            o.forEach(s.bind(null, 0)), o.push = s.bind(null, o.push.bind(o))
        }();
    var o = e.O(void 0, [504], (function () {
        return e(7669)
    }));
    o = e.O(o)
})();
//# sourceMappingURL=app.2dd36881.js.map