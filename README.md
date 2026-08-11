# Premium Car Vix — Deploy no GitHub Pages

## Passo a passo (5 minutos)

### 1. Crie um repositório no GitHub
- Acesse github.com → botão "New repository"
- Nome sugerido: `premium-car-vix`
- Deixe **Public**
- Clique em "Create repository"

### 2. Suba os arquivos
No terminal, dentro da pasta do projeto:
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/premium-car-vix.git
git push -u origin main
```

Ou arraste os arquivos direto pela interface do GitHub (Upload files).

### 3. Ative o GitHub Pages
- No repositório: **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: **main** / **(root)**
- Clique em **Save**

### 4. Aguarde ~1 minuto
O link vai aparecer no topo da página Settings → Pages:
```
https://SEU_USUARIO.github.io/premium-car-vix/
```

## Domínio personalizado (opcional)
Se quiser `www.premiumcarvix.com.br` apontando pro site:
1. Compre o domínio (registrobr.org.br)
2. Em Settings → Pages → Custom domain: coloque o domínio
3. No painel do domínio, crie um CNAME apontando para `SEU_USUARIO.github.io`

## Estrutura de arquivos
```
premium-car-vix/
├── index.html
├── css/style.css
├── js/main.js
└── assets/
    ├── logo-transparente.png
    ├── video-bg.mp4
    ├── feedback.png
    ├── galeria-1.png
    └── galeria-2.png
```
