# 📋 Product Backlog - VerrySala

## Sprint Backlog Management

### 🏃‍♂️ Sprint 1 - Fundación del Proyecto

**Fecha inicio**: [Por definir]  
**Fecha fin**: [Por definir]  
**Sprint Goal**: Establecer la infraestructura base y sistema de usuarios
funcional

#### Tareas Técnicas Sprint 1:

##### HU-001: Registro de Usuario (5 pts)

- **T001**: Configurar Supabase Auth (2 pts)
  - Configurar proyecto Supabase
  - Configurar variables de entorno
  - Instalar dependencias (@supabase/supabase-js)
- **T002**: Crear componente de registro (2 pts)
  - Formulario con validación (react-hook-form + zod)
  - Integración con Supabase Auth
  - Manejo de errores y loading states
- **T003**: Configurar flujo de confirmación por email (1 pt)
  - Template de email en Supabase
  - Página de confirmación
  - Redirecciones apropiadas

##### HU-002: Autenticación de Usuario (3 pts)

- **T004**: Crear componente de login (1 pt)
  - Formulario de login
  - Validación de campos
- **T005**: Implementar gestión de sesiones (1 pt)
  - Context/Provider para auth state
  - Middleware para rutas protegidas
- **T006**: Crear recuperación de contraseña (1 pt)
  - Flow de reset password
  - Página de cambio de contraseña

##### HU-003: Perfil de Usuario (8 pts)

- **T007**: Diseñar esquema de perfil en DB (1 pt)
  - Tabla profiles en Supabase
  - Relaciones con auth.users
- **T008**: Crear página de perfil (3 pts)
  - Layout de perfil
  - Mostrar información del usuario
  - Responsive design
- **T009**: Implementar edición de perfil (3 pts)
  - Formulario de edición
  - Upload de avatar
  - Validación de username único
- **T010**: Configuración de privacidad básica (1 pt)
  - Toggle de perfil público/privado
  - Configuración en base de datos

#### Definition of Ready (DoR) para Sprint 1:

- [ ] Supabase project creado y configurado
- [ ] Next.js 15 project inicializado
- [ ] Shadcn/ui configurado
- [ ] Tailwind CSS configurado
- [ ] Variables de entorno definidas
- [ ] Diseños de UI disponibles (Figma/mockups)

---

### 🏃‍♂️ Sprint 2 - Sistema de Publicaciones Base

**Sprint Goal**: Usuarios pueden crear y visualizar publicaciones con imágenes

#### Tareas Técnicas Sprint 2:

##### HU-004: Crear Publicación (13 pts)

- **T011**: Configurar Storage en Supabase (2 pts)
  - Bucket para imágenes
  - Políticas de seguridad RLS
  - Configuración de resize automático
- **T012**: Crear esquema de publicaciones (2 pts)
  - Tabla posts en DB
  - Relaciones con profiles
  - Índices para performance
- **T013**: Componente de creación de post (4 pts)
  - Form con drag & drop para imágenes
  - Preview de imagen
  - Editor de texto enriquecido básico
- **T014**: Upload e procesamiento de imágenes (3 pts)
  - Compresión client-side
  - Upload a Supabase Storage
  - Generación de thumbnails
- **T015**: Sistema de tags ambientales (2 pts)
  - Componente de selector de tags
  - Base de datos de tags predefinidos
  - Autocompletado de tags

##### HU-005: Ver Publicaciones (8 pts)

- **T016**: Componente Card de publicación (3 pts)
  - Layout responsive
  - Optimización de imágenes (Next.js Image)
  - Información de metadata
- **T017**: Lista de publicaciones con paginación (3 pts)
  - Infinite scroll implementation
  - Loading skeletons
  - Empty states
- **T018**: Queries optimizadas (2 pts)
  - Joins eficientes con profiles
  - Paginación server-side
  - Caché estratégico

---

### 🏃‍♂️ Sprint 3 - Interacciones Básicas

**Sprint Goal**: Usuarios pueden interactuar con publicaciones mediante likes y
comentarios

#### Tareas Técnicas Sprint 3:

##### HU-006: Editar/Eliminar Publicación (5 pts)

- **T019**: Implementar permisos de autor (1 pt)
  - Verificación server-side
  - UI condicional para botones
- **T020**: Modal de edición de post (2 pts)
  - Formulario pre-rellenado
  - Validaciones
- **T021**: Soft delete implementation (2 pts)
  - Campo deleted_at en DB
  - Filtros en queries
  - Admin recovery interface

##### HU-007: Sistema de Likes (5 pts)

- **T022**: Esquema de likes en DB (1 pt)
  - Tabla likes
  - Constraints de unicidad
- **T023**: Componente Like button (2 pts)
  - Animaciones micro-interactions
  - Optimistic updates
  - Contador real-time
- **T024**: Queries de likes optimizadas (2 pts)
  - Agregaciones eficientes
  - Caché de contadores
  - Real-time subscriptions

##### HU-008: Sistema de Comentarios (13 pts)

- **T025**: Esquema de comentarios (2 pts)
  - Tabla comments
  - Relaciones con posts y users
  - Threading structure para respuestas
- **T026**: Componente de lista de comentarios (4 pts)
  - Threading visual
  - Paginación anidada
  - Ordenamiento por fecha
- **T027**: Formulario de nuevo comentario (3 pts)
  - Validación de contenido
  - Mention de usuarios (@username)
  - Preview antes de enviar
- **T028**: Sistema de edición/eliminación (2 pts)
  - Inline editing
  - Confirmaciones
  - Historial de ediciones
- **T029**: Notificaciones de comentarios (2 pts)
  - Real-time notifications
  - Email notifications (opcional)
  - Mark as read functionality

---

## 🎯 Criterios de Aceptación Detallados

### Para Desarrolladores:

#### Estándares de Código:

```typescript
// Ejemplo de estructura esperada para components
interface ComponentProps {
  // Props tipadas con TypeScript
}

export function Component({ prop }: ComponentProps) {
  // Hooks en orden: estado, efectos, callbacks
  // JSX con className usando Tailwind
  // Manejo de errores y loading states
}
```

#### Database Patterns:

```sql
-- Ejemplo de tabla con RLS
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deleted_at TIMESTAMP WITH TIME ZONE
);

-- RLS Policy ejemplo
CREATE POLICY "Users can view public posts" ON posts
  FOR SELECT USING (deleted_at IS NULL);
```

#### Testing Requirements:

- Unit tests para utils y hooks
- Component tests para UI components
- Integration tests para API calls
- E2E tests para user flows críticos

---

## 📊 Tracking y Métricas

### Burn-down Chart Template:

```
Sprint X - Story Points Remaining
Day 1: [Total SP]
Day 2: [Remaining SP]
...
Day 10: 0 SP (Goal)
```

### Velocity Tracking:

- **Sprint 1 Goal**: 16 SP
- **Sprint 2 Goal**: 21 SP
- **Sprint 3 Goal**: 23 SP

### Impediments Log:

- **Fecha**: [DD/MM/YYYY]
- **Impedimento**: [Descripción]
- **Impacto**: [Alto/Medio/Bajo]
- **Resolución**: [Plan de acción]
- **Estado**: [Abierto/Resuelto]

---

## 🔄 Retrospective Template

### What went well? ✅

- [Elemento positivo 1]
- [Elemento positivo 2]

### What didn't go well? ❌

- [Challenge 1]
- [Challenge 2]

### What can we improve? 🔧

- [Acción de mejora 1]
- [Acción de mejora 2]

### Action Items for next Sprint: 📋

- [ ] [Acción específica con responsable]
- [ ] [Acción específica con responsable]

---

Este backlog detallado te permitirá gestionar cada sprint de manera efectiva.
¿Quieres que ajustemos alguna parte o profundicemos en algún sprint específico?
