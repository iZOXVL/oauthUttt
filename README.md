# OAuth App con GitHub y Google en Next.js

Esta aplicación demuestra la implementación de autenticación OAuth 2.0 utilizando los proveedores de GitHub y Google, construida con Next.js. Se utiliza Auth0 para manejar la autenticación de manera segura y eficiente, mientras que los datos de los usuarios se almacenan en una base de datos PostgreSQL alojada en Neon.tech. Prisma se utiliza como ORM para facilitar las operaciones de la base de datos, haciendo que el desarrollo sea más eficiente y menos propenso a errores.

## Características Principales

- **Autenticación OAuth 2.0**: Soporte para iniciar sesión con cuentas de GitHub y Google.
- **Next.js Framework**: Utiliza las mejores prácticas de Next.js para renderizado del lado del servidor y generación de sitios estáticos.
- **Auth0**: Implementación segura y fácil de la autenticación.
- **Base de Datos PostgreSQL**: Almacenamiento de datos en una base de datos PostgreSQL alojada en Neon.tech.
- **Prisma ORM**: Acceso y manejo simplificado de la base de datos.

## Empezando

Para ejecutar esta aplicación en tu entorno local, sigue los siguientes pasos:

### Pre-requisitos

- Node.js (recomendamos la última versión LTS)
- Una cuenta en Auth0
- Una base de datos PostgreSQL (puedes configurar una gratis en Neon.tech)

### Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/iZOXVL/oauthUttt.git
cd oauthUttt
npm install
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno creando un archivo .env en la raíz del proyecto con el siguiente contenido (reemplaza los valores de ejemplo con tus propias credenciales):

- DATABASE_URL="postgresql://armvil.lagr:Jl1a3TVPHPPM@ep-sweet-meadow-a5hsr130-pooler.us-east-2.aws.neon.tech/users?  sslmode=require&pgbouncer=true"
- DIRECT_URL="postgresql://armvil.lagr:Jl1a3TVPHP08@ep-sweet-meadow-a5hsr130.us-east-2.aws.neon.tech/users?sslmode=require"

- GITHUB_CLIENT_ID="98ab10ce033c812378b5"
- GITHUB_CLIENT_SECRET="241c36a0bb16a9808b111b008448f4ddb47e854a"

- GOOGLE_CLIENT_ID=
- GOOGLE_CLIENT_SECRET=

- AUTH_SECRET="sY/dNo8mc5TOdNtUC06/DD78P0Kbz0/wZF5mqrl6Y+I="

4. Ejecuta el proyecto:

```bash
npm run dev
```

Ahora deberías poder acceder a la aplicación en http://localhost:3000.


