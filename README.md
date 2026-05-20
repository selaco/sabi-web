# SABI - Web estàtica per Cloudflare Pages

Web estàtica per al projecte SABI, un omakase català-japonès de petit format al Barri Vell de Girona.

## Estructura

```text
sabi-web/
|-- assets/
|   `-- README.md
|-- index.html
|-- styles.css
|-- script.js
`-- README.md
```

## Com provar-la en local

Obre `index.html` directament al navegador.

També pots servir la carpeta amb qualsevol servidor estàtic senzill. No hi ha build step, dependències ni frameworks.

## Cloudflare Pages

Configuració recomanada:

- Framework preset: `None`
- Build command: buit
- Build output directory: `/`

## Imatges

La carpeta `assets/` està preparada per afegir fotografies pròpies de barra, ceràmica, fusta i producte de temporada. Mentrestant, la web mostra placeholders visuals amb gradients i textures CSS.

## Reserves

El formulari és visual i no envia dades reals. Per producció cal connectar-lo a Cloudflare Workers, un servei de formularis o una eina de reserves externa.
