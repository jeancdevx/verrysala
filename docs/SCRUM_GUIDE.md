# 📚 Guía SCRUM para VerrySala

## 🏗️ Fundamentos de SCRUM

### ¿Qué es SCRUM?

SCRUM es un marco de trabajo ágil que ayuda a los equipos a entregar software de
alta calidad de manera iterativa e incremental. Se basa en sprints cortos,
feedback continuo y adaptación constante.

### Principios Ágiles Aplicados:

1. **Individuos e interacciones** sobre procesos y herramientas
2. **Software funcionando** sobre documentación extensiva
3. **Colaboración con el cliente** sobre negociación contractual
4. **Respuesta ante el cambio** sobre seguir un plan

---

## 👥 ROLES EN EL EQUIPO

### 🎯 Product Owner

**Responsable**: [Tu nombre] **Responsabilidades**:

- Definir y priorizar el Product Backlog
- Escribir User Stories claras
- Validar que el producto cumpla la visión
- Tomar decisiones sobre scope y features
- Comunicar con stakeholders (profesores, usuarios finales)

### 🏃‍♂️ Scrum Master

**Responsable**: [Tu nombre - rol dual] **Responsabilidades**:

- Facilitar ceremonias SCRUM
- Eliminar impedimentos del equipo
- Coaching en metodología ágil
- Proteger al equipo de interrupciones externas
- Promover mejora continua

### 👨‍💻 Development Team

**Responsable**: [Tu nombre - rol dual]  
**Responsabilidades**:

- Estimar Story Points
- Desarrollar funcionalidades según DoD
- Participar en ceremonias SCRUM
- Auto-organización del trabajo
- Entregar incrementos de producto funcionando

---

## 📅 CEREMONIAS SCRUM

### 🎯 Sprint Planning (4 horas para sprint de 2 semanas)

#### **Parte 1: ¿QUÉ vamos a hacer?** (2 horas)

**Participantes**: Product Owner + Scrum Master + Dev Team  
**Objetivo**: Seleccionar User Stories para el sprint

**Agenda**:

1. **Review del Sprint Goal** (30 min)
   - Presentar objetivo del sprint
   - Alinear expectativas y prioridades
2. **Refinamiento del Backlog** (60 min)
   - Review de User Stories prioritizadas
   - Clarificar Criterios de Aceptación
   - Validar que stories estén "Ready"
3. **Selección de Sprint Backlog** (30 min)
   - Considerar velocity histórica
   - Confirmar capacidad del sprint
   - Commitment del equipo

#### **Parte 2: ¿CÓMO lo vamos a hacer?** (2 horas)

**Participantes**: Scrum Master + Dev Team  
**Objetivo**: Descomponer User Stories en tareas técnicas

**Agenda**:

1. **Task Breakdown** (90 min)
   - Descomponer cada User Story en tareas
   - Estimar effort de cada tarea (horas)
   - Identificar dependencias técnicas
2. **Sprint Backlog Final** (30 min)
   - Validar que tasks cubren todos los ACs
   - Confirmar que el trabajo es factible
   - Plan de desarrollo para los próximos días

---

### 🏃‍♂️ Daily Scrum (15 minutos diarios)

**Horario sugerido**: 9:00 AM cada día  
**Participantes**: Dev Team + Scrum Master (Product Owner opcional)

#### **Formato - 3 preguntas**:

1. **¿Qué hice ayer?**
   - Tareas completadas
   - Progress hacia Sprint Goal
2. **¿Qué voy a hacer hoy?**
   - Tareas planificadas
   - Enfoque del día
3. **¿Hay algún impedimento?**
   - Bloqueos técnicos
   - Dependencias externas
   - Necesidad de ayuda

#### **Para proyecto individual** (Auto-Daily):

```markdown
## Daily Scrum - [Fecha]

### ✅ Ayer completé:

- [Tarea 1 completada]
- [Tarea 2 completada]

### 🎯 Hoy trabajaré en:

- [Tarea prioritaria del día]
- [Tarea secundaria si hay tiempo]

### 🚫 Impedimentos:

- [Bloqueo o duda técnica]
- [Recurso necesario]

### 📊 Sprint Progress:

- Story Points completados: X/Total
- Días restantes: Y
- On track: ✅/❌
```

---

### 👀 Sprint Review (2 horas)

**Participantes**: Todo el Scrum Team + Stakeholders  
**Objetivo**: Mostrar el incremento de producto y obtener feedback

**Agenda**:

1. **Demo del Incremento** (60 min)
   - Mostrar funcionalidades completadas
   - User Stories cumplidas vs planificadas
   - Live demo en ambiente de desarrollo
2. **Feedback y Adaptación** (45 min)
   - Recopilar feedback de stakeholders
   - Discutir cambios en el mercado/contexto
   - Actualizar Product Backlog si es necesario
3. **Métricas y Próximos Pasos** (15 min)
   - Review de velocity conseguida
   - Avance hacia objetivos del proyecto
   - Preview del próximo sprint

---

### 🔄 Sprint Retrospective (1.5 horas)

**Participantes**: Scrum Team solamente  
**Objetivo**: Inspeccionar el proceso y definir mejoras

**Formato - Start/Stop/Continue**:

#### 🟢 **START (Empezar a hacer)**

- ¿Qué prácticas nuevas deberíamos adoptar?
- ¿Qué herramientas nos ayudarían?
- ¿Qué procesos faltan?

#### 🔴 **STOP (Dejar de hacer)**

- ¿Qué nos está frenando?
- ¿Qué prácticas no agregan valor?
- ¿Qué procesos son ineficientes?

#### 🟡 **CONTINUE (Seguir haciendo)**

- ¿Qué está funcionando bien?
- ¿Qué prácticas debemos mantener?
- ¿Qué nos ayuda a ser productivos?

#### **Action Items**:

```markdown
## Retrospective Sprint X - Action Items

### 🎯 Compromiso para próximo sprint:

- [ ] [Acción específica] - Responsable: [Nombre] - Fecha: [DD/MM]
- [ ] [Acción específica] - Responsable: [Nombre] - Fecha: [DD/MM]

### 📊 Métricas a trackear:

- [Métrica 1]: [Valor objetivo]
- [Métrica 2]: [Valor objetivo]
```

---

## 🏗️ ARTEFACTOS SCRUM

### 📋 Product Backlog

**Definición**: Lista priorizada de funcionalidades, mejoras y correcciones del
producto.

**Características de un buen Product Backlog**:

- **DEEP**:
  - **D**etailed appropriately (más detalle = mayor prioridad)
  - **E**stimated (con Story Points)
  - **E**mergent (evoluciona constantemente)
  - **P**rioritized (orden claro de importancia)

**Estructura de User Story**:

```markdown
## HU-XXX: [Título descriptivo]

**Como** [tipo de usuario]  
**Quiero** [funcionalidad deseada]  
**Para** [beneficio o valor obtenido]

### Criterios de Aceptación:

- [ ] [Criterio específico y testeable 1]
- [ ] [Criterio específico y testeable 2]
- [ ] [Criterio específico y testeable 3]

### Story Points: X

### Prioridad: Alta/Media/Baja

### Tags: [frontend, backend, database, etc.]

### Mockups/Referencias:

[Links a diseños o ejemplos]

### Notas adicionales:

[Contexto técnico o de negocio]
```

---

### 🎯 Sprint Backlog

**Definición**: Subset del Product Backlog seleccionado para el Sprint + plan
para entregarlas.

**Incluye**:

- User Stories comprometidas para el sprint
- Tasks técnicas desglosadas
- Estimaciones en horas de cada task
- Sprint Goal claramente definido

**Template de Sprint Backlog**:

```markdown
# Sprint X Backlog

## 🎯 Sprint Goal

[Objetivo claro y medible del sprint]

## 📊 Métricas del Sprint

- **Duración**: [Fecha inicio] - [Fecha fin]
- **Story Points comprometidos**: X
- **Velocity objetivo**: X SP
- **Capacity**: X horas de desarrollo

## 📋 User Stories Incluidas

### HU-XXX: [Título] (X SP)

**Status**: Not Started | In Progress | Done

#### Tasks:

- [ ] **T001**: [Descripción task] - Est: X hrs - Asignado: [Nombre]
- [ ] **T002**: [Descripción task] - Est: X hrs - Asignado: [Nombre]

#### Criterios de Aceptación:

- [ ] [AC 1]
- [ ] [AC 2]
```

---

### 📈 Increment

**Definición**: La suma de todos los elementos del Product Backlog completados
durante un Sprint + incrementos de sprints anteriores.

**Características**:

- Debe cumplir Definition of Done
- Potencialmente entregable
- Funciona de forma integrada
- Incrementa el valor del producto

---

## 🎯 ESTIMACIÓN CON STORY POINTS

### ¿Por qué Story Points?

- **Abstracción**: Se enfocan en complejidad, no en tiempo
- **Relatividad**: Comparación entre historias
- **Velocidad**: Mejora la predicción del equipo

### 🔢 Escala de Fibonacci Modificada

```
1 punto  = Task trivial (cambio CSS, fix typo)
2 puntos = Task simple (componente básico)
3 puntos = Task pequeña (formulario simple)
5 puntos = Task mediana (integración API)
8 puntos = Task grande (sistema complejo)
13 puntos = Task muy grande (feature completa)
21 puntos = Epic (debe dividirse)
```

### 🎯 Planning Poker (para equipos)

**Proceso**:

1. Product Owner presenta User Story
2. Desarrolladores hacen preguntas de clarificación
3. Cada dev elige una carta en secreto
4. Revelan cartas simultáneamente
5. Si hay discrepancia, discuten y re-estiman
6. Llegan a consenso

### 🏠 Para Proyecto Individual

**Técnica de estimación relativa**:

1. Toma una historia de referencia (ej: "Login básico" = 3 SP)
2. Compara cada nueva historia: ¿Es más simple/compleja?
3. Usa la escala Fibonacci como referencia
4. Considera estos factores:
   - **Complejidad técnica**
   - **Cantidad de trabajo**
   - **Riesgo/incertidumbre**
   - **Conocimiento del dominio**

---

## 📏 DEFINITION OF READY (DoR)

**Para que una User Story entre en un Sprint debe cumplir**:

### 📝 Contenido:

- [ ] Título claro y descriptivo
- [ ] Historia redactada en formato "Como...Quiero...Para..."
- [ ] Criterios de Aceptación específicos y testeable
- [ ] Story Points estimados
- [ ] Prioridad asignada

### 🎨 Diseño:

- [ ] Mockups o wireframes disponibles (si aplica)
- [ ] Flujo de usuario definido
- [ ] Estados de error considerados
- [ ] Responsive design especificado

### 🔧 Técnico:

- [ ] Dependencias identificadas
- [ ] APIs/integraciones definidas
- [ ] Criterios de performance (si aplica)
- [ ] Consideraciones de seguridad

### 💼 Negocio:

- [ ] Valor de negocio claro
- [ ] Stakeholder identificado
- [ ] Riesgos evaluados

---

## ✅ DEFINITION OF DONE (DoD)

**Para considerar trabajo completado**:

### 🔨 Desarrollo:

- [ ] Código implementado según estándares
- [ ] Code review completado (self-review mínimo)
- [ ] Sin errores de TypeScript/ESLint
- [ ] Componentes responsive
- [ ] Optimizaciones de performance aplicadas

### 🧪 Testing:

- [ ] Unit tests escritos y pasando (>80% coverage)
- [ ] Integration tests para APIs
- [ ] Manual testing completado
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing realizado

### 📱 UI/UX:

- [ ] Design system consistency
- [ ] Accesibilidad básica (ARIA labels, keyboard nav)
- [ ] Loading states implementados
- [ ] Error states manejados
- [ ] Empty states diseñados

### 🔒 Calidad:

- [ ] Validaciones de seguridad
- [ ] Manejo de errores robusto
- [ ] No memory leaks
- [ ] SEO básico (si aplica)

### 🚀 Deploy:

- [ ] Deploy en development environment
- [ ] Database migrations ejecutadas (si aplica)
- [ ] Environment variables configuradas
- [ ] Monitoring/logging implementado

### 📚 Documentación:

- [ ] README actualizado
- [ ] API documentation (si aplica)
- [ ] User-facing features documentadas

---

## 📊 MÉTRICAS Y KPIs

### 📈 Velocity

**Definición**: Story Points completados por sprint  
**Uso**: Predicción de capacidad futura

```
Sprint 1: 16 SP completados
Sprint 2: 21 SP completados
Sprint 3: 18 SP completados
Velocity promedio: 18.3 SP
```

### 🔥 Burn-down Chart

**Tracking diario del trabajo restante**:

```
Día 1: 21 SP restantes
Día 3: 18 SP restantes
Día 5: 13 SP restantes
Día 7: 8 SP restantes
Día 10: 0 SP restantes ✅
```

### 📊 Burn-up Chart

**Tracking del trabajo completado vs scope**:

- Línea verde: Story Points completados
- Línea azul: Scope total del proyecto
- Gap entre líneas: Trabajo restante

### 🎯 Sprint Goal Achievement

**Porcentaje de Sprint Goals cumplidos**:

- Meta: >90% de goals cumplidos
- Track: Razones de no cumplimiento
- Improve: Ajustar planning o scope

---

## 🛠️ HERRAMIENTAS RECOMENDADAS

### 📋 Gestión de Proyecto:

- **GitHub Projects**: Para backlog y kanban
- **Jira** (alternativa premium): Más features avanzadas
- **Trello** (alternativa simple): Para equipos pequeños

### 📊 Tracking:

- **Excel/Google Sheets**: Para métricas y charts
- **GitHub Insights**: Velocity y contribution tracking
- **Burndown for GitHub**: Extension para burn-down charts

### 💬 Comunicación:

- **Slack/Discord**: Daily standups y comunicación
- **Zoom/Meet**: Sprint ceremonies
- **Notion**: Documentación centralizada

### 🔧 Desarrollo:

- **VS Code**: IDE principal
- **GitHub**: Control de versiones y CI/CD
- **Vercel**: Deploy y preview environments
- **Supabase**: Backend como servicio

---

Esta guía te dará todos los fundamentos necesarios para implementar SCRUM
efectivamente en tu proyecto de red social ambiental. ¿Hay algún concepto
específico que quieras que profundice más?
