# 3 en Raya con Ranking

Juego de 3 en raya (Tic-tac-toe) con sistema de ranking implementado utilizando tecnologías modernas de desarrollo web.

## Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React para desarrollo web
- **React 19** - Biblioteca para construcción de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **TailwindCSS** - Framework de CSS
- **React Confetti** - Efectos visuales de confeti

### Backend
- **Node.js** - Entorno de ejecución para JavaScript
- **Express** - Framework web para Node.js
- **TypeScript** - Superset tipado de JavaScript
- **MongoDB** (mongoose) - Base de datos NoSQL
- **Jest** - Framework de testing
- **Supertest** - Librería para testing de HTTP
- **Cors** - Middleware para manejo de CORS
- **Dotenv** - Manejo de variables de entorno

## Requisitos Previos
- Node.js (versión 18 o superior)
- MongoDB instalado y ejecutándose localmente
- npm o yarn como gestor de paquetes

## Instalación y Configuración

### Backend
1. Navegar al directorio del backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` en la raíz del backend con las siguientes variables:
```
MONGODB_URI=mongodb://ejemplo:27017/tictactoe
PORT=3001
```

4. Iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

Para ejecutar los tests:
```bash
npm test
```

### Frontend
1. Navegar al directorio del frontend:
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:3000`

## Características
- Juego de 3 en raya interactivo
- Sistema de ranking
- Interfaz moderna y responsive
- Efectos visuales para victorias
- API RESTful para gestión de partidas

## Estructura del Proyecto

### Frontend
```
frontend/
├── src/
│   ├── app/               # Componentes y páginas principales
│   │   ├── tic-tac-toe/  # Componentes del juego
│   │   ├── ranking/      # Componentes del ranking
│   │   └── shared/       # Componentes compartidos
│   └── lib/              # Utilidades y definiciones
├── public/               # Archivos estáticos
└── ...                   # Archivos de configuración

```

### Backend
```
backend/
├── src/
│   ├── controllers/      # Controladores de la aplicación
│   ├── models/          # Modelos de datos
│   ├── routes/          # Rutas de la API
│   └── enums/           # Enumeraciones
│   └── interfaces/      # Interfaces
├── testing/             # Tests
└── ...                  # Archivos de configuración
```

## Scripts Disponibles

### Backend
- `npm run dev` - Inicia el servidor en modo desarrollo
- `npm run build` - Compila el proyecto
- `npm start` - Inicia el servidor en modo producción
- `npm test` - Ejecuta los tests

### Frontend
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor en modo producción
- `npm run lint` - Ejecuta el linter
