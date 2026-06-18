# E-commerce IPSS - Portal de Comercio Electrónico

Este es un proyecto de comercio electrónico moderno y escalable construido con **React 19**, **TypeScript** y **Vite**, estilizado con **Bootstrap 5** y otimizado para la gestión del estado del servidor utilizando **TanStack Query (React Query)**.

---

## Instalación y Configuración

Sigue los siguientes pasos para clonar el repositorio e iniciar la aplicación localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/R4aveen/e-commerceIpss.git
cd e-commerceIpss
```

### 2. Instalar dependencias
Este proyecto utiliza `pnpm` como gestor de paquetes. Si necesitas instalar `pnpm`, puedes hacerlo ejecutando
```bash
curl -fsSL https://pnpm.io | sh -
```

O si utilizas powershell
```bash
iwr -useb https://pnpm.io | iex
```

puedes revisar la documentacion aqui [pnpm](https://pnpm.io/es/installation)


Para instalar todas las dependencias del proyecto, corre:
```bash
pnpm install
```

### 3. Servidor de desarrollo
Para iniciar la aplicación en modo desarrollo local:
```bash
pnpm run dev
```

### 4. Construir para producción
Para compilar y optimizar el sitio para producción:
```bash
pnpm run build
```

---

## Tecnologias y Librerías Utilizadas (por ahora)

El proyecto aprovecha un conjunto de tecnologías modernas para garantizar un rendimiento óptimo, tipado estricto y una experiencia de desarrollo fluida:

- **React 19 & TypeScript**: Estructura de componentes segura y tipado estricto para evitar errores en tiempo de ejecución.
- **Vite**: Bundler ultra rápido para el desarrollo local y empaquetado optimizado.
- **Bootstrap 5**: Framework de diseño CSS adaptable y flexible para la creación rápida de componentes visuales responsivos.
- **React Router DOM (v7)**: Sistema robusto de enrutamiento dinámico y modular para la navegación de la aplicación.
- **TanStack Query (v5)**: Administrador de estado asíncrono para gestionar peticiones de datos, caching de respuestas, re-intentos automáticos y estados de carga/error sin necesidad de boilerplate excesivo de Redux.

---

## Estructura del Proyecto (`src/`)

La arquitectura de carpetas está modularizada para facilitar el mantenimiento y la escalabilidad del sistema:

```text
src/
├── assets/         
├── components/     # Componentes reutilizables agrupados por su rol:
│   ├── layout/     # Contenedores estructurales (Container, Footer, Header, PageWrapper, Subheader, Wrapper).
│   ├── router/     # Routers específicos (ContentRouter, FooterRouter, HeaderRouter).
│   └── ui/         # Elementos de interfaz básica (Button, Card).
│       ├── Button/ # Componente Button con diferentes variantes.
│       └── Card/   # Componente Card con diferentes variantes.
├── config/         # Configuraciones globales de la app (ej. pages.config.ts para las rutas).
│   └── pages.config.ts # Configuraciones globales de la app con las rutas definidas.
├── constants/      # Constantes estáticas globales.
│   ├── border-width.ts # Constantes para el ancho de los bordes.
│   ├── colors.ts       # Constantes para los colores.
│   └── rounded.ts        # Constantes para los bordes redondeados.  
├── context/        # Proveedores de contexto globales (ej. ThemeContext para modo oscuro y estilos generales).
│   ├── ThemeContext.tsx
├── hooks/          # Hooks personalizados de React.
│   ├── useTheme.ts
│   ├── useProductHome.ts
├── interfaces/     # Definiciones de tipos e interfaces de TypeScript (ej. productoHome.interface.ts).
│   └── productoHome.interface.ts
├── mocks/          # Archivos JSON locales con datos de prueba (ej. home/products.json).
│   └── home/
│       └── products.json
├── pages/          # Vistas principales del sitio (ej. Home.page.tsx, Contact.page.tsx).
│   ├── Home.page.tsx # 
│   └── Contact.page.tsx
├── routes/         # Definiciones modulares de rutas según la sección (contentRoutes, headerRoutes, footerRoutes).
│   ├── contentRoutes.tsx # Aquí se definen las rutas que se mostrarán en el cuerpo de la página.
│   ├── headerRoutes.tsx # Aquí se declaran las rutas que se mostrarán en la cabecera.
│   └── footerRoutes.tsx # Aquí se declaran las rutas que se mostrarán en el pie de página.
├── store/          # Servicios y configuraciones de almacenamiento / querys (ej. services/productHome.ts).
│   └── services/
│       └── productHome.ts
├── templates/      # Diseños estructurales y plantillas base para las páginas.
│   ├── DefaultHeaderTemplate.tsx # Plantilla de cabecera por defecto.
│   ├── DefaultFooterTemplate.tsx # Plantilla de pie de página por defecto.
│   ├── DefaultLayoutTemplate.tsx # Plantilla de layout por defecto.
├── App.tsx         # Componente principal que coordina el Layout general y los enrutadores.
├── index.css       # Estilos globales y personalizaciones del tema.
└── main.tsx        # Punto de entrada de la aplicación donde se montan los proveedores globales (QueryClient, Browser Router, etc.).
```

---

## Arquitectura de Rutas y Navegación

El proyecto utiliza un sistema de **enrutamiento modular y descentralizado** que divide la página en tres áreas principales (Header, Content y Footer) controladas de manera independiente por rutas, ademas esta pensado para mantener un orden limpio, escalable, seguro y mantenible.

### 1. Configuración Centralizada (`src/config/pages.config.ts`)
Define el "Single Source of Truth" para todos los enlaces del sitio. Aquí se declaran los IDs, las URLs (`to`), los textos descriptivos y configuraciones adicionales de acceso o visibilidad para cada página:
```typescript
export interface PageConfig {
  id: string;
  to: string;
  text: string;
  icon?: string; ##<-- esto se usa para poder mostrar el icono dentro de una ruta 
  authority?: string[]; ##<-- esto se usa para la parte de los router para saber si mostrar o no la ruta  
  roles?: string[]; ##<-- esto se usa para la parte de los router para saber si mostrar o no la ruta segun el rol
  subPages?: Record<string, PageConfig>; ##<-- esto se utilizara para saber si una pagina hereda de otra
}

export const pagesConfig = {
  home: { id: 'home', to: '/', text: 'Home' },
  contact: { id: 'contact', to: '/contact', text: 'Contacto' },
} satisfies Record<string, PageConfig>;
```

### 2. Definición de Rutas por Sección (`src/routes/`)
Las rutas no se definen de manera monolítica, sino que se separan según la seccion visual en la que deben responder:
- **`contentRoutes.tsx`**: Asocia cada ruta con su componente de página correspondiente (ej. `/` con `HomePage`, `/contact` con `ContactPage`). Utiliza `React.lazy` para la carga perezosa de los archivos de página.
- **`headerRoutes.tsx`**: Controla qué cabecera o componente superior mostrar según la ruta (ej. `<DefaultHeaderTemplate />` para todas las rutas mediante `*`).
- **`footerRoutes.tsx`**: Controla qué pie de página mostrar. Permite ocultar el pie de página en rutas específicas asignándole `null` (como en el caso de la ruta de contacto).

### 3. Componentes de Enrutamiento (`src/components/router/`)
Contienen los enrutadores que renderizan los arrays de rutas definidos anteriormente:
- **`ContentRouter.tsx`**: Renderiza el árbol de componentes `<Routes>` recorriendo `contentRoutes`. Adicionalmente, implementa el componente `<Suspense>` con un indicador de carga (spinner de Bootstrap) para mostrar mientras se cargan las páginas de forma asíncrona.
- **`HeaderRouter.tsx`** y **`FooterRouter.tsx`**: Renderizan dinámicamente las cabeceras y pies de página según la URL del navegador.

### 4. Componente Integrador (`src/App.tsx`)
Se ensambla la cabecera, el contenido principal y el pie de página dentro del layout contenedor `Wrapper` el cual tiene la funcionalidad de darle un envoltorio consistente a todas las páginas :
```tsx
import Wrapper from "@/components/layout/Wrapper/Wrapper";
import HeaderRouter from "@/components/router/HeaderRouter";
import ContentRouter from "@/components/router/ContentRouter";
import FooterRouter from "@/components/router/FooterRouter";

function App() {
  return (
    <Wrapper>
      <HeaderRouter />
      <ContentRouter />
      <FooterRouter />
    </Wrapper>
  );
}
```

---

## Consumo y Validación de Datos

Para obtener información asíncrona de manera limpia y robusta, se utiliza un hook personalizado basado en TanStack Query en **`src/store/services/productHome.ts`**:

- **Validación de Datos**: Las interfaces del modelo de datos (`Product`, `ProductImage`, `ProductVariant`) se extraen del archivo centralizado `src/interfaces/productoHome.interface.ts` creado para prevenir inconsistencias.
- **Consumo Seguro**: Se implementa un método `fetchProducts` nativo que realiza una llamada `fetch` al mock JSON local, incluyendo bloques `try/catch` para la captura de errores en red o parsing, y comprobando la integridad de los campos esenciales antes de entregarlos al componente.
- **Uso en el Componente**: El componente `Home.page.tsx` consume la data invocando el hook `useGetProducts`, recibiendo estados booleanos limpios como `isLoading`, `isError` y el resultado tipado `data`.
