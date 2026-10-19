# Notícias

Portal de notícias estático desenvolvido com HTML, CSS e JavaScript. O projeto reúne uma página inicial com destaques e páginas de leitura organizadas pelos temas política, segurança, educação e saúde.

## Recursos

- Carrossel de imagens com links para as matérias, avanço automático a cada três segundos e botões de navegação anterior e seguinte.
- Menu compartilhado entre as páginas, com acesso à página inicial e a uma matéria de cada tema.
- Área de destaques e lista de notícias com links para fontes externas.
- Quatro páginas de matérias, com títulos, textos, imagens e informações editoriais inseridos diretamente no HTML.

O conteúdo é mantido nos arquivos do repositório. Não há busca, filtros dinâmicos por categoria, API de notícias, autenticação ou painel de publicação.

## Tecnologias e estrutura

- **HTML:** conteúdo e navegação entre páginas.
- **CSS:** estilos compartilhados, Flexbox e CSS Grid.
- **JavaScript:** controle do carrossel por eventos de clique, temporizador e transformação CSS.

O site não utiliza framework, bibliotecas externas, banco de dados ou processo de build.

```text
index.html        # Página inicial e carrossel
noticia1.html     # Educação
noticia2.html     # Política
noticia3.html     # Saúde
noticia4.html     # Segurança
script.js         # Comportamento do carrossel da página inicial
css/estilo.css    # Estilos do portal
imagem/           # Imagens usadas nas páginas
```

## Como executar

Requisito: navegador com JavaScript habilitado para o carrossel.

```sh
git clone https://github.com/Heitorsv001/Noticias.git
cd Noticias
```

Abra `index.html` no navegador. Não há dependências para instalar nem variáveis de ambiente.

Opcionalmente, com Python 3 instalado, execute na raiz:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Acesse `http://127.0.0.1:8000/` e use `Ctrl+C` para encerrar. Os links para fontes externas exigem conexão com a internet.

## Estado e limites

O portal demonstra composição de páginas e interação no navegador. As matérias são conteúdo estático e não representam um serviço de atualização jornalística em tempo real. Os itens do menu direcionam a páginas específicas, sem listagens de categoria.

Os 49 caminhos locais referenciados nas páginas foram encontrados na revisão documental. O comportamento do carrossel foi analisado no código, mas não foi executado em navegador nesta revisão. O CSS contém grid adaptável, porém isso não comprova a adaptação de toda a interface a telas pequenas ou sua acessibilidade.

As imagens versionadas são imagens editoriais, não capturas do portal. Ainda é necessário adicionar capturas reais para apresentação visual do projeto.

## Créditos e repositório

Os rodapés registram Bruna Martins, Ana Luiza Lima e Heitor Vareiro como responsáveis pelo Projeto Web 2. Mantido na conta [Heitorsv001](https://github.com/Heitorsv001).

Repositório original: [Heitorsv001/Noticias](https://github.com/Heitorsv001/Noticias).
