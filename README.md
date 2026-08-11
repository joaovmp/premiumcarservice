# Premium Car Vix — Site

Site estático em HTML/CSS/JS puro. Sem dependências, sem build step.

## Estrutura

```
premium-car-vix/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/           ← coloque as imagens aqui
└── README.md
```

## Como usar

1. Abra `index.html` direto no browser — funciona sem servidor.
2. Para deploy: suba os arquivos em qualquer host estático (GitHub Pages, Vercel, Netlify, Hostgator etc).

## Personalizar

### Número do WhatsApp
Busque `wa.me/5527999999999` no `index.html` e substitua pelo número real (com DDI, sem espaços ou traços).

### Endereço / e-mail
No `index.html`, seção `<footer>`, substitua `contato@premiumcarvix.com.br` pelo contato real.

### Fotos da galeria
Cada item `.gi` na seção `#galeria` tem um SVG placeholder.
Para substituir por foto real:

```html
<!-- Antes (placeholder SVG) -->
<div class="gi-fill" aria-hidden="true">
  <svg>...</svg>
</div>

<!-- Depois (foto real) -->
<img src="assets/nome-da-foto.jpg" alt="Descrição do trabalho" loading="lazy">
```

No `css/style.css`, descomente o bloco comentado sobre `.gi img`:
```css
.gi img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.gi:hover img { transform: scale(1.04); }
```

### Números dos stats (hero)
No `index.html`, localize os elementos `data-target`:
```html
<div class="meta-num" data-target="500" data-suffix="+">0+</div>
```
Troque o valor de `data-target` e `data-suffix` conforme os números reais do negócio.

### Cores
No `css/style.css`, seção `:root`, todas as variáveis estão centralizadas:
```css
--gold:       #B8963E;  /* dourado principal */
--gold-light: #D4AC5A;  /* dourado hover */
--silver:     #D8D8D8;  /* texto principal */
```

## Fontes
Carregadas via Google Fonts (requer internet).
Para uso offline, baixe Oswald e DM Sans em fontes.google.com e ajuste os `@font-face` no CSS.

## Acessibilidade
- Marcação semântica (nav, section, article, footer, h1-h3)
- `aria-label` nas seções
- `aria-hidden` em elementos decorativos
- `focus-visible` com outline dourado
- `prefers-reduced-motion` respeitado via JS
