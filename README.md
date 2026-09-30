# Portfólio — Felipe Ocanha

Site estático e responsivo com tema escuro/neon, chuva de bits e conteúdo em português e inglês, baseado no currículo fornecido.

## Conteúdo

- `locales/pt-BR.js`: textos em português.
- `locales/en-US.js`: textos em inglês.
- `assets/style.css`: tema e layout responsivo.
- `assets/app.js`: renderização, idiomas e animação.
- `index.html`: estrutura da página.

Para editar o conteúdo, altere os arquivos de `locales`, mantendo as mesmas chaves nos dois idiomas. O idioma escolhido é salvo no navegador. A animação respeita a preferência por redução de movimento. Fontes do Google Fonts têm alternativas locais caso não carreguem.

## Visualizar

Abra `index.html` no navegador. Não há dependências de build. Também é possível usar um servidor estático na pasta do projeto.

## Publicar no GitHub Pages

1. Envie os arquivos para a branch `main` do repositório no GitHub.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como Source.
3. Em **Actions**, acompanhe o workflow **Deploy portfolio to GitHub Pages**. Ele também pode ser iniciado manualmente.
4. A URL publicada aparecerá em **Settings → Pages** e no ambiente `github-pages`.

O workflow está em `.github/workflows/pages.yml`. Se a branch principal tiver outro nome, ajuste `branches`. Os caminhos relativos permitem hospedar tanto na raiz quanto em um repositório de projeto (`/<repositorio>/`).

As traduções dos cargos e cursos são descritivas. O conteúdo foi atualizado a partir de `Profile (5).pdf`, incluindo as atribuições por cargo no Grupo Boticário. O currículo não informa projetos ou métricas de resultado; por isso, essas informações não foram acrescentadas.
