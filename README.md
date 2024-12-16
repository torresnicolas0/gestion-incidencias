# Gestión de Incidencias - Proyecto Angular & Firebase

## Descripción del Proyecto

Este proyecto es un prototipo inicial de una aplicación de gestión de incidencias en tiempo real para una empresa tecnológica. Ha sido desarrollado en Angular, utilizando Firebase para la autenticación y el almacenamiento de datos. La arquitectura es modular y se ha estructurado para facilitar la escalabilidad, el mantenimiento y la extensión futura del código. Sin embargo, es importante destacar que el proyecto está **incompleto** y que hay múltiples funcionalidades y requerimientos que aún no se han implementado debido a limitaciones de tiempo.

---

## Estado Actual del Proyecto

Actualmente, la aplicación permite:

- **Autenticación básica con Firebase:**
  - Registro y acceso con email.
  - Acceso con Google.
- **Creación de incidencias y usuarios en Firestore:**
  - Puedes crear incidencias y usuarios, y estos datos se almacenan en la base de datos de Firebase.
- **UI con Angular Material y componentes reutilizables:**
  - Barra de herramientas (toolbar) y grilla con filtros.
- **Uso de un servicio de snack-bar para mensajes en la interfaz.**
- **Centralización de textos y constantes:**
  - Existe un archivo `app/shared/constants` que permite manejar textos de la UI de forma centralizada, pensado para facilitar la internacionalización y cambios de contenido futuros.

---

## Funcionalidades Incompletas

Este prototipo no cumple con todos los requisitos establecidos. Estas son algunas de las carencias más notorias:

- **Autenticación Avanzada:**
  - Falta el doble factor de autenticación (2FA).
- **Gestión de Roles de Usuario:**
  - No se ha implementado el manejo de roles (Administrador, Usuario).
- **Comentarios en Incidencias:**
  - No se ha completado el sistema de comentarios en tiempo real asociado a cada incidencia.
- **Búsqueda, Filtrado Avanzado y Dashboard:**
  - No se han integrado búsquedas, filtrados avanzados ni un dashboard con métricas.
- **Estados y Prioridades de las Incidencias:**
  - No se han implementado las funcionalidades de estados (Abierto, Resuelto, etc.) ni prioridades (Baja, Crítica, etc.).
- **Internacionalización (i18n):**
  - No se han aplicado múltiples idiomas.
- **Backend y Roles:**
  - No hay backend propio más allá de Firebase.
  - La lógica de asignación de incidencias a usuarios y manejo de roles está por desarrollar.
- **Pruebas Unitarias y Cobertura de Código:**
  - No se ha implementado el conjunto de pruebas unitarias requerido.
- **Optimización, OnPush, Lazy Loading:**
  - Aún no se han aplicado las optimizaciones sugeridas.

---

## Configuración Inicial

Antes de ejecutar el proyecto, debes configurar las credenciales de Firebase en `src/environments/environment.ts`. Reemplaza los valores en `firebase` con tus propias claves:

```typescript
export const environment = {
  production: true,
  firebase: {
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    appId: "x:xxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxx",
  },
};
```

---

## Instrucciones de Instalación y Ejecución

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/torresnicolas0/gestion-incidencias.git
   cd gestion-incidencias
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Ejecuta la aplicación en modo desarrollo:**

   ```bash
   ng serve
   ```

   La app estará disponible en `http://localhost:4200/`.

---

## Tecnologías y Bibliotecas Utilizadas

- **Angular**: Framework principal para la construcción de la SPA.
- **Firebase** (Authentication, Firestore): Backend-as-a-Service para autenticación, base de datos y hosting.
- **Angular Material**: Conjunto de componentes UI.
- **ESLint**: Herramienta para el linting y mantenimiento de la calidad del código.
- **TypeScript**: Lenguaje principal del proyecto.
- **SCSS**: Preprocesador CSS para estilos.

---

## Decisiones Técnicas Importantes

- **Arquitectura Modular:**\
  Se organizó el código por features (auth, incidents, users, comments, etc.) con el fin de mantener una estructura escalable y ordenada.

- **Uso de Firebase:**\
  Se eligió Firebase para acelerar la implementación de autenticación y almacenamiento en tiempo real.

- **UI Centralizada:**\
  Se creó un archivo `constants` para centralizar textos y configuraciones, pensando a futuro en la i18n y la coherencia en la UI.

---

## Reflexión Personal

El desarrollo de este prototipo, aunque incompleto, deja varias lecciones:

- La complejidad de ciertos requerimientos (comentarios en tiempo real, 2FA, roles) requiere una planificación más detallada y mayor tiempo de implementación.
- La modularidad y arquitectura inicial sientan las bases para seguir creciendo en funcionalidad sin perder la coherencia.
- Usar Firebase facilita mucho la autenticación y el manejo de datos, pero para lógica más compleja es posible que un backend personalizado sea más flexible.

---

## Conclusión

Este proyecto es un punto de partida. Aún queda camino por recorrer para alcanzar los requerimientos originales y convertirlo en un sistema de gestión de incidencias completo y robusto. Sin embargo, la arquitectura, las tecnologías y las prácticas aplicadas hasta ahora permiten continuar con el desarrollo de forma ordenada.
