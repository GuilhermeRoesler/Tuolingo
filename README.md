# Tuolingo 🦉

Este projeto é uma recriação da interface do popular aplicativo de aprendizagem de idiomas, **Duolingo**, utilizando tecnologias web fundamentais. O foco principal é replicar o design visual ("Dark Mode"), as animações e a interatividade básica da plataforma.

![](img/demo.png)

## 📋 Sobre o Projeto

O **Tuolingo** simula a experiência do utilizador na versão web do Duolingo. O projeto inclui a página inicial (dashboard) com a trilha de aprendizagem e uma interface de exercícios de tradução.

Este projeto foi desenvolvido para fins educacionais, focando na estruturação de layouts complexos com CSS Flexbox e manipulação do DOM com JavaScript.

## 🚀 Funcionalidades

- **Interface Fiel:** Design inspirado no "Dark Mode" do Duolingo, incluindo cores, ícones e tipografia (fontes DIN Round).
- **Dashboard Interativo:**
- Menu lateral de navegação (Aprender, Praticar, Ligas, Loja, Escolas).
- Cabeçalho com estatísticas (bandeira do curso, ofensiva, cristais).
- Trilha de unidades com efeitos de _hover_ e animações nos ícones.

- **Sistema de Exercícios:**
- Tela de tradução (Inglês -> Português).
- Personagens animados (Junior).
- Validação básica de resposta (verifica se o campo não está vazio).
- Feedback visual de "Correto" ou "Incorreto" com painéis inferiores animados.

- **Responsividade e Animações:** Efeitos de transição nos botões e elementos da interface.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica das páginas.
- **CSS3:**
- **Flexbox:** Utilizado extensivamente para o layout e alinhamento dos componentes.
- **@font-face:** Importação das fontes personalizadas do Duolingo.
- **Animações CSS:** Para efeitos de destaque (ex: botão "Começar" a flutuar).

- **JavaScript (Vanilla):**
- Manipulação de eventos (DOM) para navegação entre telas.
- Lógica simples de validação de exercícios.
- Alteração dinâmica de estilos e classes.

## 📂 Estrutura de Arquivos

- `Tuolingo.html`: Arquivo principal contendo a estrutura de ambas as "telas" (Dashboard e Exercício).
- `Tuolingo.css`: Folhas de estilo para o tema escuro e componentes.
- `Tuolingo.js`: Lógica de interação, cliques e validação.
- `img/`: Pasta contendo os ícones e imagens (Junior, Fogo, Gema, etc.).
- `fonts/`: Arquivos das fontes tipográficas utilizadas.

## 🔧 Como Executar

1. Clone este repositório ou descarregue os arquivos.
2. Certifique-se de que as pastas `img` e `fonts` estão no mesmo diretório que os arquivos `.html`, `.css` e `.js`.
3. Abra o arquivo `Tuolingo.html` no seu navegador de preferência.

## 📸 Demonstração

O projeto conta com duas visualizações principais:

1. **Home:** A árvore de lições onde o utilizador escolhe a unidade.
2. **Exercício:** A tela de prática onde o utilizador interage com inputs e botões de verificação.

---

_Desenvolvido por Guilherme Roesler_
