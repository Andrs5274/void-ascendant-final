# Void Ascendant

Landing page interactiva desarrollada como proyecto final, utilizando **Astro, React, TypeScript y Tailwind CSS**.

El proyecto presenta el universo ficticio de **Void Ascendant**, permitiendo explorar agentes, modos de juego, recompensas de comunidad y completar un formulario de prerregistro con validación en el cliente.

## Sitio publicado

El proyecto se encuentra desplegado en Vercel:

**https://void-ascendant-final.vercel.app**

## Tecnologías utilizadas

- Astro
- React
- TypeScript
- Tailwind CSS v4
- React Hook Form
- Zod
- Vite
- Git
- GitHub
- Vercel

## Características principales

### Diseño responsive

La interfaz fue desarrollada siguiendo un enfoque **Mobile First**, adaptándose a diferentes resoluciones:

- Teléfonos móviles
- Tablets
- Laptops
- Monitores de escritorio

Se utilizaron los breakpoints responsive de Tailwind CSS para adaptar tamaños, grids, navegación y distribución del contenido.

### Navegación responsive

El encabezado principal fue desarrollado como un componente React interactivo.

En escritorio muestra la navegación completa, mientras que en dispositivos móviles utiliza un menú desplegable controlado mediante `useState`.

### Sistema de agentes

La sección de agentes utiliza React para permitir al usuario seleccionar diferentes personajes.

Cada agente contiene:

- Nombre
- Rol
- Imagen
- Descripción
- Ataque
- Defensa
- Energía

Al seleccionar un personaje, sus estadísticas se actualizan dinámicamente sin recargar la página.

### Modos de juego

El proyecto incluye una sección dedicada a distintos modos de juego disponibles dentro del universo de Void Ascendant.

Los modos se generan a partir de datos tipados mediante TypeScript y componentes Astro.

### Recompensas de comunidad

La sección de recompensas presenta diferentes objetivos de prerregistro.

Cada nivel contiene un requisito y una recompensa que podría ser desbloqueada conforme aumente la cantidad de jugadores registrados.

### Formulario de prerregistro

El formulario fue desarrollado utilizando:

- React Hook Form
- Zod
- TypeScript

Incluye validación para:

- Nombre completo
- Correo electrónico
- Plataforma
- Aceptación de la política de privacidad

Actualmente el formulario implementa la validación del lado del cliente. No almacena información en una base de datos.

### FAQ

Se incluye una sección de preguntas frecuentes con información general sobre:

- Lanzamiento
- Plataformas
- Prerregistro
- Recompensas

### Política de privacidad

Astro utiliza un sistema de rutas basado en archivos.

Por esta razón:

```text
src/pages/index.astro
```

genera:

```text
/
```

mientras que:

```text
src/pages/politica-privacidad.astro
```

genera:

```text
/politica-privacidad
```

La política puede consultarse desde:

**https://void-ascendant-final.vercel.app/politica-privacidad**

## Arquitectura del proyecto

Astro funciona como framework principal y administra las páginas, layouts y contenido estático.

React se utiliza únicamente en las secciones que requieren interacción.

```text
Astro
├── Layout
├── Pages
├── Hero
├── Modos de juego
├── Recompensas
├── FAQ
└── Footer

React
├── Header responsive
├── Selector de agentes
└── Formulario de prerregistro
```

Esta arquitectura permite evitar JavaScript innecesario en las partes estáticas del sitio.

Los componentes React interactivos utilizan la directiva:

```astro
client:load
```

para ser hidratados en el navegador.

## Estructura del proyecto

```text
void-ascendant-final/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── components/
│   │   ├── AgentCard.tsx
│   │   ├── Agents.tsx
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── GameModes.astro
│   │   ├── Hero.astro
│   │   ├── RegistrationForm.tsx
│   │   ├── ResponsiveHeader.tsx
│   │   └── Rewards.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── politica-privacidad.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Instalación

Para ejecutar el proyecto localmente es necesario tener instalado Node.js.

Clonar el repositorio:

```bash
git clone https://github.com/Andrs5274/void-ascendant-final.git
```

Entrar al proyecto:

```bash
cd void-ascendant-final
```

Instalar las dependencias:

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Astro iniciará un servidor local, normalmente disponible en:

```text
http://localhost:4321
```

## Compilar para producción

Para comprobar que el proyecto puede compilar correctamente:

```bash
npm run build
```

Astro generará la versión optimizada del proyecto dentro de:

```text
dist/
```

## Previsualizar la versión de producción

Después de ejecutar el build:

```bash
npm run preview
```

Esto permite revisar localmente la versión compilada antes del despliegue.

## TypeScript

El proyecto utiliza configuración estricta de TypeScript.

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

Los datos, Props y estados de los componentes cuentan con tipos definidos evitando el uso innecesario de `any`.

Ejemplo:

```ts
type Agent = {
  id: AgentId;
  name: string;
  role: string;
  description: string;
  image: string;
  attack: number;
  defense: number;
  energy: number;
};
```

## Flujo de trabajo con Git

El desarrollo se realizó utilizando ramas de Git.

```text
main
  │
  └── feature/ui
          │
          ├── desarrollo
          ├── commits
          ├── push
          └── Pull Request
                   │
                   ▼
                  main
```

Los cambios desarrollados en `feature/ui` fueron integrados en `main` mediante un Pull Request en GitHub.

Antes de integrar los cambios se comprobó correctamente la compilación del proyecto mediante:

```bash
npm run build
```

## Despliegue

El proyecto está conectado a GitHub y desplegado mediante Vercel.

El flujo de despliegue es:

```text
Cambios locales
      ↓
Git commit
      ↓
GitHub
      ↓
main
      ↓
Vercel
      ↓
Build automático
      ↓
Producción
```

De esta manera, Vercel puede generar automáticamente nuevas versiones del sitio cuando se actualiza la rama de producción.

## Autor

**Andrés Rodríguez**

GitHub:

**https://github.com/Andrs5274**

## Proyecto académico

Este proyecto fue desarrollado con fines académicos para aplicar conceptos de desarrollo web moderno, incluyendo:

- Arquitectura basada en componentes
- React
- Props y estado
- TypeScript estricto
- Tailwind CSS
- Diseño responsive
- Astro
- Arquitectura de islas
- Git y GitHub
- Ramas y Pull Requests
- Build de producción
- Despliegue continuo con Vercel

---

**Void Ascendant**  
El vacío te está llamando.
