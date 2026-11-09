# 🍕 Pizzería Mamma Mía - Hito 5

Este hito se enfoca en la implementación de **React Router Dom** para transformar la aplicación en una Single Page Application (SPA), permitiendo la navegación fluida entre múltiples vistas sin recargar el navegador.

## 🚀 Cambios e Implementaciones

### 1. Reorganización de la Estructura de Carpetas
- Se creó la carpeta `src/pages/` para separar las vistas completas de la aplicación.
- Se trasladaron los componentes `Home`, `RegisterPage`, `LoginPage`, `Cart` y `Pizza` a esta nueva estructura de páginas, corrigiendo todas las rutas relativas de importación.

### 2. Configuración del Enrutador
- Envoltura global de la aplicación con `<BrowserRouter>` en el archivo `main.jsx`.
- Definición de las rutas principales dentro de `<Routes>` en `App.jsx`.

### 3. Rutas Implementadas (7 en total)
- **`/`**: Muestra la vista del catálogo general (`Home`).
- **`/register`**: Acceso al formulario de registro (`RegisterPage`).
- **`/login`**: Acceso al formulario de inicio de sesión (`LoginPage`).
- **`/cart`**: Muestra el resumen de compras (`Cart`).
- **`/pizza/p001`**: Detalle dinámico de un producto específico (`Pizza`).
- **`/profile`**: Nueva vista de perfil de usuario (`Profile`).
- **`*` / `/404`**: Ruta comodín para capturar enlaces rotos que renderiza el componente `NotFound`.

### 4. Navegación Dinámica (`Navbar.jsx`)
- Se reemplazaron las etiquetas tradicionales por el componente `<Link>` de React Router para habilitar la navegación instantánea.
- Se mantuvieron todos los botones visibles de forma simultánea en la barra superior para facilitar el testeo completo de los endpoints de la aplicación.

---

## 💻 Ejecución del Proyecto

1. Asegúrate de tener el backend corriendo en el puerto `5000`.
2. En la carpeta del frontend, ejecuta:
   ```bash
   npm run dev
   ```
3. Navega e interactúa con la barra de menú en `http://localhost:5173`.
