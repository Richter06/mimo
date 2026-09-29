# Mimo

> Landing page experimental para uma doceria artesanal fictícia, criada como peça de showcase para a **Rouxinol**.

Mimo é um projeto de front-end focado em **direção de arte, composição editorial, tipografia, movimento e interação**. A proposta não é funcionar como um e-commerce completo, mas sim demonstrar como uma marca de alimentação pode ganhar uma presença digital autoral sem depender de uma estrutura visual genérica.

A experiência foi construída em React e Vite, com animações divididas entre **Motion** para interações de interface e **GSAP + ScrollTrigger** para sequências e movimentos ligados ao scroll.

---

## Visão geral

A página funciona como uma landing page única, composta por sete blocos principais:

1. **Hero** — apresenta a marca e estabelece a direção visual.
2. **Philosophy** — manifesto da Mimo e princípios da marca.
3. **Menu** — vitrine de produtos.
4. **Highlight** — destaque editorial de um produto.
5. **Gifting** — experiência interativa para descoberta de presentes.
6. **Orders** — CTA principal para encomendas.
7. **Footer** — encerramento da narrativa e navegação.

A experiência foi pensada para alternar entre **imagem, tipografia, espaço negativo, movimento e microinterações**, evitando transformar cada seção em um conjunto de cards independentes.

---

## Stack

| Tecnologia | Uso |
|---|---|
| **React 19** | Componentização e composição da interface |
| **Vite 8** | Dev server e build |
| **Motion** | Animações de entrada, hover, drag e microinterações |
| **GSAP 3** | Animações de introdução e efeitos ligados ao scroll |
| **ScrollTrigger** | Sincronização de animações com a rolagem |
| **CSS** | Layout, responsividade, tipografia e identidade visual |
| **Google Fonts** | Cormorant Garamond + DM Sans |
| **Unsplash** | Fotografias utilizadas como conteúdo visual |

### Dependências principais

```json
{
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "motion": "^13.4.6",
  "gsap": "^3.15.0"
}
```

---

## Direção visual

A identidade da Mimo combina uma estética de **doceria editorial** com uma linguagem contemporânea.

### Paleta

| Token | Valor | Função |
|---|---|---|
| `--ink` | `#171214` | Texto escuro / encerramento |
| `--plum` | `#321b27` | Grandes áreas escuras |
| `--berry` | `#7a2145` | Cor de ação e destaque |
| `--rose` | `#e9a0a9` | Contraste suave |
| `--butter` | `#f2d58a` | Destaques e CTAs |
| `--cream` | `#fff8ec` | Fundo principal |
| `--muted` | `#6e6265` | Texto secundário |

### Tipografia

- **Cormorant Garamond** — títulos, palavras de impacto e assinatura visual.
- **DM Sans** — navegação, descrições, labels e textos funcionais.

A combinação cria contraste entre uma voz mais editorial/afetiva e uma camada funcional mais limpa.

---

## Arquitetura

A aplicação é uma SPA simples. O ponto de entrada monta `App`, que organiza as seções na ordem da experiência.

```text
App
├── Header
├── main
│   ├── Hero
│   ├── Philosophy
│   ├── Menu
│   ├── Highlight
│   ├── Gifting
│   └── Orders
└── Footer
```

Cada seção possui seu próprio componente React e seu próprio arquivo CSS.

Não existe roteamento, backend, banco de dados ou gerenciamento global de estado. Os dados demonstrativos ficam próximos dos componentes que os consomem.

---

## Estrutura de arquivos

> O projeto executável está dentro da pasta `mimo/` deste repositório.

```text
mimo/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Philosophy.jsx
│   │   ├── Philosophy.css
│   │   ├── Menu.jsx
│   │   ├── Menu.css
│   │   ├── Highlight.jsx
│   │   ├── Highlight.css
│   │   ├── Gifting.jsx
│   │   ├── Gifting.css
│   │   ├── Orders.jsx
│   │   ├── Orders.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

# Componentes

## Header

**Arquivos:** `src/components/Header.jsx`, `Header.css`

Responsável pela navegação global.

Elementos:

- wordmark **Mimo**;
- links para Doces, Sobre e Encomendas;
- CTA **Pedir um mimo**;
- navegação reduzida em telas pequenas.

A navegação usa âncoras internas:

```text
#inicio
#doces
#mimo
#encomendas
```

O componente utiliza Motion para a entrada inicial e para microinterações de hover/tap.

---

## Hero

**Arquivos:** `Hero.jsx`, `Hero.css`

É a abertura visual da página.

### Estrutura

- fotografia de fundo;
- camada de contraste;
- eyebrow `doceria artesanal`;
- título principal;
- descrição curta;
- CTA circular;
- elemento tipográfico decorativo.

### Movimento

A entrada é controlada pelo GSAP em `App.jsx`.

A sequência apresenta:

1. zoom inicial da fotografia;
2. entrada do overlay;
3. eyebrow;
4. título linha por linha;
5. texto introdutório;
6. CTA circular;
7. elemento decorativo.

Durante o scroll, a fotografia recebe parallax e o conteúdo sofre deslocamento/opacidade progressivos.

---

## Philosophy

**Arquivos:** `Philosophy.jsx`, `Philosophy.css`

Transforma o conceito da marca em uma composição tipográfica.

O manifesto principal é construído com:

```text
DOCE
NÃO
PRECISA
DE
MOTIVO.
```

Cada palavra possui uma entrada independente usando Motion.

Também existe um ticker horizontal com:

- chocolate de verdade;
- frutas frescas;
- cremes delicados;
- feito à mão;
- pequenos lotes.

O ticker é duplicado para criar um loop contínuo e pausa quando o usuário passa o mouse sobre ele.

A seção também inclui uma textura de ruído criada diretamente em CSS através de SVG/Data URI, evitando uma imagem externa adicional.

---

## Menu

**Arquivos:** `Menu.jsx`, `Menu.css`

Funciona como a vitrine principal da marca.

Os produtos são mantidos em um array local:

```js
{
  name,
  type,
  price,
  image
}
```

Atualmente são apresentados seis itens:

- Morango & baunilha;
- Chocolate intenso;
- Frutas vermelhas;
- Limão & merengue;
- Caramelo salgado;
- Pistache & frutas.

### Layout

Desktop:

- três colunas;
- deslocamentos verticais alternados;
- imagens em proporção editorial;
- metadados abaixo da fotografia.

Mobile:

- uma coluna;
- remoção dos deslocamentos;
- imagens quadradas.

Cada produto aponta para `#encomendas`, funcionando como atalho para conversão.

---

## Highlight

**Arquivos:** `Highlight.jsx`, `Highlight.css`

Seção de destaque com composição dividida entre:

- fotografia;
- conteúdo editorial;
- CTA textual.

O conteúdo apresenta o produto da vez:

> Chocolate, frutas vermelhas e nenhuma culpa.

A imagem possui:

- hover sutil com Motion;
- parallax de escala/posição via GSAP no scroll.

---

## Gifting

**Arquivos:** `Gifting.jsx`, `Gifting.css`

É a seção mais interativa da landing page.

### Deck de presentes

O componente mantém uma coleção maior de opções de doces e mostra três cartas simultaneamente.

A carta superior é interativa e pode ser arrastada horizontalmente.

O fluxo é:

```text
arrastar
   ↓
calcular distância
   ↓
atingiu o limite?
   ├── não → retorna ao centro
   └── sim → carta sai da tela
                    ↓
              próxima carta
```

O limite utilizado é:

```js
const SWIPE_THRESHOLD = 130
```

### Motion Values

A carta superior usa:

- `useMotionValue` para o eixo X;
- `useTransform` para rotação;
- `useAnimationControls` para a animação de saída;
- `useReducedMotion` para adaptar a saída quando necessário.

A rotação acompanha a direção do gesto:

```text
esquerda ← 0 → direita
 -14°     0°     14°
```

### Feedback

Enquanto a carta é arrastada, aparecem duas mensagens:

- `talvez não`;
- `sim, por favor`.

A opacidade e a escala são derivadas diretamente da posição horizontal.

### Stack

As cartas posteriores recebem:

- escala progressivamente menor;
- deslocamento vertical;
- pequena rotação alternada.

Isso cria a sensação de um baralho físico.

### Mobile

Em telas pequenas:

- as notas laterais são escondidas;
- `arraste para descobrir.` passa a aparecer centralizado acima do baralho;
- o feedback de swipe passa para baixo da carta;
- o restante da composição se adapta para uma coluna.

### Área de presente

Depois do deck existe uma mensagem editorial:

```text
Tem coisa que fica melhor
quando vem numa caixa.
```

Abaixo dela aparecem ocasiões e o CTA `montar uma caixa`.

---

## Orders

**Arquivos:** `Orders.jsx`, `Orders.css`

É o CTA principal da experiência.

A seção trabalha com uma composição mais gráfica:

```text
Tem festa?
    Tem doce.
```

Elementos:

- identificador `03 / 03`;
- asterisco decorativo;
- texto de apoio;
- CTA circular amarelo;
- marquee com tipos de encomenda;
- link para voltar ao começo.

O CTA circular funciona como objeto visual de ação, em vez de um botão retangular convencional.

O título recebe uma animação de entrada via GSAP + ScrollTrigger.

O marquee usa CSS animation e é pausado em `prefers-reduced-motion`.

---

## Footer

**Arquivos:** `Footer.jsx`, `Footer.css`

Encerramento visual da página.

A marca ocupa grande parte da área com tipografia display.

Links disponíveis:

- voltar ao começo;
- doces;
- encomendas.

O wordmark recebe uma microinteração horizontal com Motion.

---

# Sistema de animação

O projeto deliberadamente divide responsabilidades entre duas bibliotecas.

## Motion

Usado principalmente dentro dos componentes para interações locais:

- entrada com `whileInView`;
- hover;
- tap;
- drag;
- spring;
- transformações baseadas em Motion Values;
- animações de componentes isolados.

Isso mantém a lógica de interação próxima do elemento que a utiliza.

## GSAP

Usado em `App.jsx` para animações que dependem da página inteira ou do scroll:

- sequência de entrada do Hero;
- parallax do Hero;
- saída gradual do conteúdo do Hero;
- movimento do scribble;
- parallax do Highlight;
- entrada do headline de Orders;
- entrada do Footer.

O `gsap.context()` é utilizado para agrupar as animações e facilitar o cleanup quando o componente é desmontado.

---

# Acessibilidade e movimento reduzido

O projeto possui algumas decisões específicas para acessibilidade.

### Foco

Existe um estado global de `focus-visible`:

```css
:focus-visible {
  outline: 2px solid var(--berry);
  outline-offset: 4px;
}
```

### Imagens

As fotografias possuem `alt` descritivo.

Imagens secundárias utilizam `loading="lazy"`.

### Movimento reduzido

O projeto considera:

```text
prefers-reduced-motion: reduce
```

Há suporte em três camadas:

1. `MotionConfig reducedMotion="user"` no ponto de entrada;
2. verificações específicas no GSAP;
3. media queries CSS para pausar/reduzir animações.

No GSAP, as animações principais não são criadas quando o usuário solicita redução de movimento.

---

# Responsividade

Os componentes possuem breakpoints próprios quando a composição exige comportamento diferente.

Breakpoints recorrentes:

- `760px` — principal transição para mobile;
- `720px` — ajustes específicos da Philosophy;
- `700px` — ajustes do Hero;
- `600px` — ajustes do Footer;
- `520px` — refinamentos do Gifting;
- `480px` — refinamentos do Orders;
- `420px` — telas muito pequenas no Gifting;
- `900px`, `1000px` e `1100px` — ajustes intermediários.

A estratégia não é simplesmente reduzir tamanhos. Algumas composições mudam de estrutura:

- grids viram colunas únicas;
- side notes desaparecem;
- feedback do swipe muda de posição;
- navegação central some;
- deslocamentos editoriais são removidos;
- conteúdos passam a ocupar a largura disponível.

---

# SEO e HTML

O documento HTML utiliza:

- `lang="pt-BR"`;
- `charset="UTF-8"`;
- `viewport`;
- meta description;
- título específico da página.

A descrição atual é:

```text
Mimo — doceria artesanal feita para transformar pequenos momentos em vontade de repetir.
```

A estrutura semântica utiliza:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `footer`.

---

# Dados e conteúdo

O projeto é atualmente **front-end estático**.

Não existe API ou banco de dados.

Os dados de produtos ficam em arrays locais dentro de:

- `Menu.jsx`;
- `Gifting.jsx`.

Isso torna a demonstração simples de manter, mas significa que:

- preços são estáticos;
- produtos não são carregados de servidor;
- encomendas não são realmente enviadas;
- os CTAs atualmente navegam para âncoras internas.

Para transformar o projeto em produto real, o próximo passo seria substituir esses destinos por uma integração de contato, WhatsApp, formulário ou backend.

---

# Imagens e recursos externos

As fotografias dos produtos e do Hero são carregadas do **Unsplash** através de URLs externas.

Isso permite manter o repositório leve, mas cria dependência de terceiros para o conteúdo visual.

A tipografia também é carregada externamente pelo Google Fonts através de `@import` em `src/index.css`.

---

# Arquivos herdados do template

Alguns arquivos continuam no projeto por terem vindo da configuração inicial do Vite:

- `src/assets/react.svg`;
- `src/assets/vite.svg`;
- `src/assets/hero.png`;
- `public/icons.svg`;
- `public/favicon.svg`.

Eles não participam da composição principal atual da aplicação.

O `favicon.svg` ainda utiliza a arte padrão associada ao template/origem do projeto e pode ser substituído por uma identidade própria da Mimo em uma etapa futura.

---

# Configuração do ESLint

O projeto utiliza ESLint com:

- `@eslint/js`;
- `eslint-plugin-react-hooks`;
- `eslint-plugin-react-refresh`;
- `globals`.

O diretório `dist` é ignorado.

Os arquivos JavaScript e JSX são analisados com suporte a JSX e regras recomendadas para React Hooks e React Refresh.

---

# Scripts

Dentro de `mimo/`:

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Vite.

### Build

```bash
npm run build
```

Gera a versão de produção.

### Lint

```bash
npm run lint
```

Executa o ESLint no projeto.

### Preview

```bash
npm run preview
```

Serve localmente o build de produção.

---

# Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/Richter06/mimo.git
cd mimo/mimo
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

---

# Fluxo de renderização

A aplicação começa em `src/main.jsx`:

```text
main.jsx
   ↓
MotionConfig
   ↓
App.jsx
   ↓
Header
   ↓
main
   ├── Hero
   ├── Philosophy
   ├── Menu
   ├── Highlight
   ├── Gifting
   └── Orders
   ↓
Footer
```

O `MotionConfig` fornece a política global de movimento reduzido para os componentes que usam Motion.

O `App` centraliza apenas as animações GSAP de nível de página. A lógica específica de cada seção permanece dentro de seus próprios componentes.

---

# Decisões técnicas relevantes

## CSS separado por componente

Cada seção mantém seu próprio arquivo CSS.

Isso evita transformar `index.css` em um arquivo monolítico e facilita localizar:

- layout;
- responsividade;
- animações CSS;
- estados visuais;
- tokens específicos da seção.

## Estado local no Gifting

O deck não exige estado global.

`currentIndex` controla qual item está no topo e o restante da pilha é derivado desse índice.

Isso mantém a interação isolada no componente.

## CSS variables

A identidade visual é centralizada em `src/index.css`.

Alterar os tokens globais permite recalibrar a paleta sem reescrever cada componente.

## Âncoras em vez de roteamento

Como o projeto é uma landing page de página única, a navegação utiliza IDs e links internos em vez de uma biblioteca de routing.

---

# Observações de manutenção

Há um detalhe no sistema de scroll atualmente presente em `App.jsx`:

```js
gsap.to('.gifting__words', ...)
```

A estrutura atual do componente Gifting utiliza `.gifting__background-type` para a tipografia de fundo. Portanto, esse seletor GSAP não encontra o elemento atualmente renderizado e não produz efeito.

Isso não impede o funcionamento da seção, mas é um ponto de manutenção que pode ser corrigido caso o movimento horizontal da tipografia de fundo seja desejado novamente.

Outro ponto é o marquee de Orders: o conteúdo é repetido manualmente dentro de `.orders__marquee-track`. Caso a quantidade de itens seja alterada, a animação baseada em `translateX(-50%)` deve ser revisada para manter o loop visualmente contínuo.

---

# Estado atual

**Mimo está concluído como peça de showcase front-end.**

O foco do projeto está em demonstrar:

- composição editorial;
- direção visual;
- React componentizado;
- Motion;
- GSAP;
- ScrollTrigger;
- drag interaction;
- responsividade;
- acessibilidade básica;
- uso consciente de tipografia;
- microinterações;
- construção de uma landing page sem depender de um layout genérico.

O projeto não pretende representar um sistema comercial completo. Ele funciona como uma **demonstração de experiência digital para uma marca fictícia**, dentro da proposta da Rouxinol.

---

## Créditos de tecnologia

- React
- Vite
- Motion
- GSAP
- ScrollTrigger
- Google Fonts
- Unsplash

---

<p align="center">
  <strong>Mimo</strong><br />
  doceria artesanal · showcase Rouxinol
</p>
