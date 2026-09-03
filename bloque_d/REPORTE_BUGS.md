# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** [Escribe tu Nombre y Apellido]  
**Paralelo:** [E1 / E2] | **Fecha:** [DD/MM/2026]  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** La hoja de estilos no se cargaba porque el enlace apuntaba a un archivo CSS inexistente.
- **Causa Raíz:** El atributo `href` tenía el nombre `estilos-rotos.css` en lugar del nombre real del archivo.
- **Solución Aplicada:** Se corrigió el enlace para que apunte a `estilos.css`.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** El cuerpo de la página no aplicaba correctamente el diseño flexbox y el botón no mostraba el cursor esperado.
- **Causa Raíz:** Se usaron los valores inválidos `display: flexer` y `cursor: pointing-hand`.
- **Solución Aplicada:** Se cambiaron por `display: flex` y `cursor: pointer`.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** El promedio se calculaba, pero no se mostraba en el elemento de resultado.
- **Causa Raíz:** El código usaba la propiedad inexistente `textContnt` y seleccionaba un campo que no existía.
- **Solución Aplicada:** Se corrigió la propiedad a `textContent`, se ajustó el selector al campo `#nota2` y se convirtieron los valores con `parseFloat`.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [ ] Presioné F12 en el navegador.
- [ ] Fui a la pestaña **Console**.
- [ ] Verifiqué que **NO aparezca ningún error en rojo**.

La prueba automatizada del Bloque D confirma que los archivos, selectores y correcciones de HTML, CSS y JavaScript cumplen los requisitos.
