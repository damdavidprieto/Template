# 🧪 Investigación: Arquitectura Web Components Modernos

![Status: Archived](https://img.shields.io/badge/Status-Archivado%20%2F%20Research-orange?style=flat-square)
![Tech: Lit](https://img.shields.io/badge/Core-Lit-325cff?style=flat-square)
![Tech: TypeScript](https://img.shields.io/badge/Lang-TypeScript-blue?style=flat-square)
![Tech: Vite](https://img.shields.io/badge/Build-Vite-purple?style=flat-square)

> **Nota de Archivo**
> Este repositorio contiene el código fuente de una investigación técnica realizada en **2024**. Se conserva "as-is" con fines de referencia y portfolio, representando un snapshot de las mejores prácticas exploradas en ese momento.

## 🎯 Propósito y Alcance

Este proyecto fue concebido como un entorno de experimentación ("sandbox") para explorar la viabilidad y ergonomía de construir aplicaciones web complejas utilizando estándares modernos, alejándose de los frameworks monolíticos tradicionales.

Los objetivos clave de investigación fueron:
*   **Rendimiento Nativo**: Evaluar la eficiencia de los Web Components (vía Lit).
*   **DX (Developer Experience)**: Validar el flujo de trabajo con Vite y ES Modules.
*   **Robustez**: Implementar una arquitectura tipada estrictamente con TypeScript.
*   **Gestión de Estado**: Probar patrones de estado atómico con Zustand en un entorno de componentes web.

## 🏗️ Arquitectura del Sistema

El código sigue una estructura modular orientada a dominios visuales, diseñada para la escalabilidad:

| Directorio | Propósito |
|------------|-----------|
| `src/components/commons` | **Átomos**: Elementos UI indivisibles (Botones, Inputs, Iconos). |
| `src/components/composes` | **Moléculas/Organismos**: Paneles complejos y widgets funcionales. |
| `src/layouts` | **Plantillas**: Estructuras maestras de página (Login, Dashboard). |
| `src/views` | **Páginas**: Puntos de entrada de la aplicación. |

## 🛠️ Stack Tecnológico

*   **Core**: [Lit](https://lit.dev/) - Librería ligera para Web Components.
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) - Superset tipado de Javascript.
*   **Tooling**: [Vite](https://vitejs.dev/) - Entorno de desarrollo de próxima generación.
*   **State**: [Zustand](https://github.com/pmndrs/zustand) - Gestión de estado.
*   **API Mocking**: Swagger Client.

## 🚀 Reproducción del Entorno (Legacy)

Instrucciones para reproducir el entorno de desarrollo original (requiere Node.js compatible con versiones de 2024):

1.  **Clonar y acceder**
    ```bash
    cd template
    ```
2.  **Instalar dependencias**
    ```bash
    npm install
    ```
3.  **Ejecutar dev server**
    ```bash
    npm run dev
    ```

---
*Desarrollado como parte de una iniciativa de I+D personal.*