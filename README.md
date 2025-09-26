# �️ VerrySala - Red Social Ambiental de Salaverry

**VerrySala** es una red social enfocada en la conciencia ambiental de la playa
de Salaverry, La Libertad, Perú. Los usuarios pueden compartir imágenes de
problemas ambientales específicos de nuestra playa, reflexionar sobre ellos y
generar engagement a través de likes, comentarios y reposts para crear una
comunidad local comprometida con la preservación de Salaverry.

## 🎯 Propósito del Proyecto

Este proyecto está desarrollado como parte del curso de Medio Ambiente,
utilizando metodología ágil SCRUM para crear una plataforma que fomente la
reflexión y acción sobre temas ambientales a través de:

- 📸 **Compartir evidencia local**: Fotos de problemas ambientales específicos
  en la playa de Salaverry
- 💭 **Reflexión comunitaria**: Invitar al diálogo sobre el cuidado de nuestra
  playa local
- 🤝 **Engagement social**: Likes, comentarios y reposts para amplificar el
  mensaje ambiental
- �️ **Impacto local**: Generar una comunidad salaverry comprometida con la
  preservación de su playa

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Estilos**: [Tailwind CSS](https://tailwindcss.com) +
  [Shadcn/ui](https://ui.shadcn.com)
- **Base de datos**: [Supabase](https://supabase.io) (PostgreSQL + Auth +
  Storage)
- **Lenguaje**: TypeScript
- **Deployment**: [Vercel](https://vercel.com)
- **Control de versiones**: Git + GitHub
- **Metodología**: SCRUM Ágil

## 📚 Documentación SCRUM

Este proyecto sigue metodología SCRUM completa enfocada en el desarrollo de
VerrySala. Consulta la documentación detallada:

- 📋 **[Planificación SCRUM](docs/SCRUM_PLANNING.md)** - Épicas, historias de
  usuario y sprints para VerrySala
- 📖 **[Guía SCRUM](docs/SCRUM_GUIDE.md)** - Conceptos, roles y ceremonias
  aplicadas al proyecto
- 📝 **[Product Backlog](docs/PRODUCT_BACKLOG.md)** - Backlog detallado y tareas
  técnicas
- 📄 **[Templates SCRUM](docs/SCRUM_TEMPLATES.md)** - Templates para ceremonias
  y tracking

### 🏃‍♂️ Roadmap de Desarrollo

| Sprint       | Duración  | Objetivo                                    | Story Points |
| ------------ | --------- | ------------------------------------------- | ------------ |
| **Sprint 1** | 2 semanas | Fundación del Proyecto (Auth + Perfiles)    | 16 SP        |
| **Sprint 2** | 2 semanas | Sistema de Publicaciones Base               | 21 SP        |
| **Sprint 3** | 2 semanas | Interacciones Básicas (Likes + Comentarios) | 23 SP        |
| **Sprint 4** | 2 semanas | Features Avanzadas (Reposts + Búsqueda)     | 21 SP        |
| **Sprint 5** | 2 semanas | Feed Inteligente                            | 21 SP        |
| **Sprint 6** | 2 semanas | Moderación y Pulido                         | 15 SP        |

**Duración total estimada**: 12 semanas

## 🚀 Getting Started

### Prerrequisitos

- Node.js 18+
- npm/yarn/pnpm
- Cuenta en Supabase
- Cuenta en Vercel (para deploy)

### Instalación

1. **Clona el repositorio**:

```bash
git clone https://github.com/jeancdevx/verrysala.git
cd verrysala
```

2. **Instala dependencias**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configura variables de entorno**:

```bash
cp .env.example .env.local
# Edita .env.local con tus credenciales de Supabase
```

4. **Ejecuta el servidor de desarrollo**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Abre [http://localhost:3000](http://localhost:3000)** en tu navegador.

### Estructura del Proyecto

```
verrysala/
├── app/                    # Next.js 15 App Router
├── components/             # Componentes React reutilizables
│   └── ui/                # Componentes de Shadcn/ui
├── docs/                  # Documentación SCRUM
├── hooks/                 # Custom React hooks
├── lib/                   # Utilidades y configuraciones
└── styles/                # Estilos globales
```

## 📋 Features Principales

### ✅ Completadas

- [ ] Sistema de autenticación (registro/login)
- [ ] Perfiles de usuario personalizables
- [ ] Creación de publicaciones con imágenes
- [ ] Feed de publicaciones
- [ ] Sistema de likes
- [ ] Sistema de comentarios
- [ ] Sistema de reposts
- [ ] Búsqueda de contenido
- [ ] Feed personalizado
- [ ] Herramientas de moderación

### 🎯 Épicas del Proyecto

1. **👥 Gestión de Usuarios** - Sistema completo de auth y perfiles
2. **📱 Sistema de Publicaciones** - Crear y gestionar contenido ambiental
3. **💝 Interacciones Sociales** - Likes, comentarios y reposts
4. **📰 Feed y Descubrimiento** - Algoritmos de contenido y búsqueda
5. **🛡️ Moderación y Seguridad** - Tools para mantener la calidad

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests con coverage
npm run test:coverage

# Ejecutar tests E2E
npm run test:e2e
```

## 🚀 Deployment

Este proyecto está configurado para deployment automático en Vercel:

1. **Conecta tu repositorio** con Vercel
2. **Configura variables de entorno** en Vercel Dashboard
3. **Deploy automático** en cada push a main

```bash
# Deploy manual
npm run build
npm run start
```

## 📊 Metodología de Desarrollo

### SCRUM Implementation:

- **Sprints**: 2 semanas cada uno
- **Velocity**: 16-24 Story Points por sprint
- **Ceremonies**: Sprint Planning, Daily Scrums, Reviews, Retrospectives
- **Tools**: GitHub Projects, Burndown charts, Velocity tracking

### Definition of Done:

- ✅ Código implementado y testeado
- ✅ Code review completado
- ✅ UI responsive y accesible
- ✅ Deploy en desarrollo exitoso
- ✅ Documentación actualizada

## 🤝 Contribución

Este es un proyecto educativo desarrollado individualmente como parte del curso
de Medio Ambiente. Sin embargo, el feedback y sugerencias son bienvenidos.

### Proceso de Desarrollo:

1. Crear rama feature desde `main`
2. Desarrollar siguiendo los criterios de aceptación
3. Ejecutar tests y validaciones
4. Crear Pull Request con descripción detallada
5. Review y merge a `main`

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE) - ver el archivo
LICENSE para detalles.

## �️ Impacto Ambiental Local Esperado

VerrySala busca generar conciencia ambiental específicamente para la playa de
Salaverry a través de:

- **Documentación visual** de problemas ambientales reales en la playa de
  Salaverry
- **Educación local** mediante reflexiones compartidas sobre nuestra playa
- **Viralización** de contenido ambiental específico de Salaverry, La Libertad
- **Conexión comunitaria** entre residentes y visitantes comprometidos con
  Salaverry
- **Acción local** para la preservación y cuidado de nuestra playa
- **Turismo responsable** que respete y cuide el ecosistema de Salaverry

---

**Desarrollado con � para Salaverry, La Libertad, Perú 🇵🇪**
