# �️ VerrySala - Planificación SCRUM

## Visión del Producto

**VerrySala** es una red social enfocada en la conciencia ambiental de la playa
de Salaverry, La Libertad, Perú. Los usuarios pueden compartir imágenes de
problemas ambientales específicos de nuestra playa, reflexionar sobre ellos y
generar engagement a través de likes, comentarios y reposts para crear una
comunidad local comprometida con la preservación de Salaverry.

## Stack Tecnológico

- **Frontend**: Next.js 15 + TypeScript
- **Estilos**: Tailwind CSS + Shadcn/ui
- **Backend**: Supabase (Base de datos + Auth + Storage)
- **Deployment**: Vercel
- **Control de versiones**: Git + GitHub
- **Metodología**: SCRUM

---

## 📋 Product Backlog

### 🏔️ ÉPICAS

#### 1. **ÉPICA: Gestión de Usuarios**

**Descripción**: Como plataforma social, necesitamos un sistema completo de
gestión de usuarios para permitir registro, autenticación y perfiles
personalizados.

#### 2. **ÉPICA: Sistema de Publicaciones**

**Descripción**: Como red social ambiental, necesitamos que los usuarios puedan
crear, compartir y gestionar publicaciones con contenido visual y textual sobre
temas ambientales.

#### 3. **ÉPICA: Interacciones Sociales**

**Descripción**: Como red social, necesitamos facilitar la interacción entre
usuarios a través de likes, comentarios y reposts para fomentar el engagement.

#### 4. **ÉPICA: Feed y Descubrimiento**

**Descripción**: Como plataforma de contenido, necesitamos un sistema de feed
personalizado y herramientas de descubrimiento de contenido relevante.

#### 5. **ÉPICA: Moderación y Seguridad**

**Descripción**: Como plataforma responsable, necesitamos herramientas de
moderación y seguridad para mantener un ambiente sano y constructivo.

---

## 👥 HISTORIAS DE USUARIO

### 🔐 **Gestión de Usuarios**

#### HU-001: Registro de Usuario

**Como** visitante del sitio  
**Quiero** registrarme con mi email y crear una cuenta  
**Para** poder acceder a la plataforma y crear contenido

**Criterios de Aceptación:**

- [ ] Formulario de registro con email, contraseña y confirmación
- [ ] Validación de email único
- [ ] Contraseña segura (mínimo 8 caracteres)
- [ ] Confirmación por email
- [ ] Redirección automática después del registro

**Story Points:** 5

---

#### HU-002: Autenticación de Usuario

**Como** usuario registrado  
**Quiero** iniciar sesión con mis credenciales  
**Para** acceder a mi cuenta y funcionalidades de la plataforma

**Criterios de Aceptación:**

- [ ] Formulario de login con email y contraseña
- [ ] Validación de credenciales
- [ ] Manejo de errores de autenticación
- [ ] Opción "Recordarme"
- [ ] Recuperación de contraseña

**Story Points:** 3

---

#### HU-003: Perfil de Usuario

**Como** usuario autenticado  
**Quiero** crear y editar mi perfil  
**Para** personalizar mi presencia en la plataforma

**Criterios de Aceptación:**

- [ ] Foto de perfil
- [ ] Nombre de usuario único
- [ ] Biografía personal
- [ ] Información de contacto opcional
- [ ] Configuración de privacidad básica

**Story Points:** 8

---

### 📱 **Sistema de Publicaciones**

#### HU-004: Crear Publicación

**Como** usuario autenticado  
**Quiero** crear una publicación con imagen y texto  
**Para** compartir problemas o bellezas ambientales de la playa de Salaverry con
la comunidad

**Criterios de Aceptación:**

- [ ] Subir imagen (formato JPG, PNG, WebP)
- [ ] Añadir descripción/reflexión de texto sobre la situación en Salaverry
- [ ] Preview antes de publicar
- [ ] Geolocalización automática (si está en Salaverry)
- [ ] Tags ambientales predefinidos específicos para playas

**Story Points:** 13

---

#### HU-005: Ver Publicaciones

**Como** usuario  
**Quiero** ver las publicaciones de otros usuarios  
**Para** informarme sobre la situación ambiental actual de la playa de Salaverry

**Criterios de Aceptación:**

- [ ] Lista de publicaciones en formato card
- [ ] Mostrar imagen, texto, autor y fecha de la publicación
- [ ] Mostrar ubicación si fue tomada en Salaverry
- [ ] Carga infinita o paginación
- [ ] Responsive design
- [ ] Optimización de imágenes

**Story Points:** 8

---

#### HU-006: Editar/Eliminar Publicación

**Como** usuario autor de una publicación  
**Quiero** editar o eliminar mi contenido  
**Para** corregir errores o remover contenido no deseado

**Criterios de Aceptación:**

- [ ] Botón de edición solo para el autor
- [ ] Modal de confirmación para eliminar
- [ ] Editar texto (no imagen)
- [ ] Historial de ediciones
- [ ] Soft delete con posibilidad de recuperación

**Story Points:** 5

---

### 💝 **Interacciones Sociales**

#### HU-007: Sistema de Likes

**Como** usuario autenticado  
**Quiero** dar like a publicaciones  
**Para** mostrar mi apreciación por el contenido

**Criterios de Aceptación:**

- [ ] Botón de like/unlike
- [ ] Contador de likes visible
- [ ] Animación visual del like
- [ ] No permitir múltiples likes del mismo usuario
- [ ] Lista de usuarios que dieron like

**Story Points:** 5

---

#### HU-008: Sistema de Comentarios

**Como** usuario autenticado  
**Quiero** comentar en publicaciones  
**Para** participar en discusiones sobre la situación ambiental de Salaverry

**Criterios de Aceptación:**

- [ ] Campo de texto para comentarios
- [ ] Mostrar comentarios ordenados por fecha
- [ ] Editar/eliminar propios comentarios
- [ ] Responder a comentarios (threading)
- [ ] Contador de comentarios
- [ ] Promover discusiones constructivas sobre soluciones locales

**Story Points:** 13

---

#### HU-009: Sistema de Reposts

**Como** usuario autenticado  
**Quiero** repostear contenido  
**Para** amplificar mensajes ambientales importantes

**Criterios de Aceptación:**

- [ ] Botón de repost
- [ ] Opción de añadir comentario al repost
- [ ] Mostrar autor original claramente
- [ ] Contador de reposts
- [ ] Prevenir auto-reposts

**Story Points:** 8

---

### 📰 **Feed y Descubrimiento**

#### HU-010: Feed Principal

**Como** usuario autenticado  
**Quiero** ver un feed personalizado  
**Para** descubrir contenido relevante de la comunidad

**Criterios de Aceptación:**

- [ ] Algoritmo de feed cronológico
- [ ] Mezcla de contenido seguido y popular
- [ ] Infinite scroll
- [ ] Refresh para actualizar
- [ ] Estado de carga y vacío

**Story Points:** 21

---

#### HU-011: Búsqueda de Contenido

**Como** usuario  
**Quiero** buscar publicaciones y usuarios  
**Para** encontrar contenido específico sobre zonas o problemas ambientales de
Salaverry

**Criterios de Aceptación:**

- [ ] Barra de búsqueda global
- [ ] Filtros por tipo de contenido (basura, fauna marina, etc.)
- [ ] Búsqueda por tags específicos de Salaverry
- [ ] Autocompletado con lugares conocidos de la playa
- [ ] Historial de búsquedas

**Story Points:** 13

---

### 🛡️ **Moderación y Seguridad**

#### HU-012: Reportar Contenido

**Como** usuario  
**Quiero** reportar contenido inapropiado  
**Para** mantener la calidad y seguridad de la plataforma

**Criterios de Aceptación:**

- [ ] Botón de reporte en publicaciones
- [ ] Categorías de reporte predefinidas
- [ ] Sistema de moderación básico
- [ ] Notificaciones de estado del reporte
- [ ] Bloqueo temporal de contenido reportado

**Story Points:** 8

---

## 🔄 SPRINTS PLANIFICADOS

### **Sprint 1 (2 semanas)** - Fundación del Proyecto

**Objetivo**: Establecer la base técnica y sistema de usuarios

**Historias incluidas:**

- HU-001: Registro de Usuario (5 pts)
- HU-002: Autenticación de Usuario (3 pts)
- HU-003: Perfil de Usuario (8 pts)

**Total Story Points**: 16 **Capacidad del equipo**: 16-20 pts por sprint

---

### **Sprint 2 (2 semanas)** - Sistema de Publicaciones Base

**Objetivo**: Implementar funcionalidad core de publicaciones

**Historias incluidas:**

- HU-004: Crear Publicación (13 pts)
- HU-005: Ver Publicaciones (8 pts)

**Total Story Points**: 21

---

### **Sprint 3 (2 semanas)** - Interacciones Básicas

**Objetivo**: Habilitar interacciones sociales fundamentales

**Historias incluidas:**

- HU-006: Editar/Eliminar Publicación (5 pts)
- HU-007: Sistema de Likes (5 pts)
- HU-008: Sistema de Comentarios (13 pts)

**Total Story Points**: 23

---

### **Sprint 4 (2 semanas)** - Features Avanzadas

**Objetivo**: Completar funcionalidades sociales y descubrimiento

**Historias incluidas:**

- HU-009: Sistema de Reposts (8 pts)
- HU-011: Búsqueda de Contenido (13 pts)

**Total Story Points**: 21

---

### **Sprint 5 (2 semanas)** - Feed y Seguridad

**Objetivo**: Implementar feed inteligente y herramientas de moderación

**Historias incluidas:**

- HU-010: Feed Principal (21 pts)

**Total Story Points**: 21

---

### **Sprint 6 (2 semanas)** - Pulido y Moderación

**Objetivo**: Finalizar features de seguridad y optimización

**Historias incluidas:**

- HU-012: Reportar Contenido (8 pts)
- Optimizaciones y correcciones de bugs
- Testing y preparación para producción

**Total Story Points**: 15

---

## 📊 ESTIMACIÓN Y VELOCITY

### Puntuación Fibonacci para Story Points:

- **1**: Tarea muy simple (< 1 hora)
- **2**: Tarea simple (1-2 horas)
- **3**: Tarea pequeña (medio día)
- **5**: Tarea mediana (1 día)
- **8**: Tarea grande (2-3 días)
- **13**: Tarea muy grande (1 semana)
- **21**: Tarea épica (2 semanas)

### Velocity Estimada:

- **Equipo**: 1 desarrollador
- **Capacidad por sprint**: 16-24 story points
- **Duración total estimada**: 12 semanas (6 sprints de 2 semanas)

---

## ✅ DEFINITION OF DONE (DoD)

Para considerar una historia como "Done", debe cumplir:

### Técnico:

- [ ] Código implementado y funcionando
- [ ] Tests unitarios escritos y pasando
- [ ] Código revisado (self-review mínimo)
- [ ] Sin errores de TypeScript
- [ ] Responsive design verificado
- [ ] Performance optimizada

### Funcional:

- [ ] Todos los criterios de aceptación cumplidos
- [ ] Funcionalidad probada manualmente
- [ ] UI/UX coherente con el diseño
- [ ] Accesibilidad básica implementada
- [ ] Documentación actualizada

### Calidad:

- [ ] No hay bugs críticos
- [ ] Validaciones de seguridad implementadas
- [ ] Integración con Supabase funcionando
- [ ] Deploy en ambiente de desarrollo exitoso

---

## 🎯 MÉTRICAS DE ÉXITO

### Técnicas:

- Velocity del equipo por sprint
- Burndown chart por sprint
- Cobertura de tests > 80%
- Performance scores > 90

### Producto:

- Número de usuarios registrados
- Engagement rate (likes, comentarios, reposts)
- Tiempo promedio en la plataforma
- Tasa de retención de usuarios

---

Esta planificación SCRUM te dará una base sólida para desarrollar tu red social
ambiental de manera organizada y eficiente. ¿Te gustaría que profundicemos en
algún aspecto específico o ajustemos alguna parte de la planificación?
