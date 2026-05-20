# SABI — Web estàtica per Cloudflare Pages

Web estàtica inicial per al projecte SABI, preparada per pujar a GitHub i desplegar amb Cloudflare Pages.

## Estructura

```text
sabi-cloudflare-web/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Com provar-la en local

Obre `index.html` directament al navegador.

També pots fer servir VS Code amb l'extensió **Live Server**.

## Com pujar-la a GitHub

```bash
git init
git add .
git commit -m "Initial SABI website"
git branch -M main
git remote add origin https://github.com/EL_TEU_USUARI/sabi-web.git
git push -u origin main
```

## Configuració recomanada a Cloudflare Pages

1. Entra a Cloudflare.
2. Ves a **Workers & Pages**.
3. Crea un projecte de **Pages**.
4. Tria **Connect to Git**.
5. Selecciona el repositori `sabi-web`.
6. Configuració:
   - Framework preset: `None`
   - Build command: deixar buit
   - Build output directory: `/`
7. Desplega.

## Notes

- El formulari de reserves és visual. Perquè funcioni realment a Cloudflare caldrà connectar-lo a un servei extern o crear una funció amb Cloudflare Workers.
- Canvia `reserves@sabi.cat`, Instagram i textos segons la versió final del projecte.
- Pots afegir imatges pròpies creant una carpeta `assets/` i referenciant-les al CSS o HTML.
