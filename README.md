# base-legal-repo

---

## 🛡️ Propiedad Intelectual y Autoría

**'project-name'** es una obra original concebida, diseñada y desarrollada íntegramente por **[Gabriel](https://github.com/gguzman89)**. 

Este proyecto nace de la búsqueda de soluciones robustas en la intersección de la gestión humana y la tecnología escalable. Cada línea de código refleja un compromiso con la calidad técnica y la evolución profesional.

### ⚖️ Licencia y Uso
El software se distribuye bajo la **Apache License 2.0**. 
> *“La libertad de usar y mejorar el código conlleva la responsabilidad de reconocer su origen.”* Puedes integrar, modificar y distribuir este trabajo siempre que se preserven los avisos de copyright y la atribución original.

### 🚀 Ecosistema Enterprise y Consultoría
Si bien el núcleo de este proyecto es abierto para la comunidad, está diseñado bajo estándares de alta disponibilidad (Node.js + TLS). Para necesidades que requieran un nivel superior de integración, ofrezco:

* **Arquitecturas a medida:** Implementaciones sobre entornos de nube.
* **Soporte Crítico:** Acuerdos de nivel de servicio (SLA) y mantenimiento preventivo.
* **Módulos Privados:** Desarrollo de funcionalidades exclusivas bajo demanda (Enterprise Tier).

📩 **Contacto Profesional:** [ggtpi0gabriel@gmail.com](mailto:ggtpi0gabriel@gmail.com)
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
