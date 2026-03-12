1. Clase Libro
Se encarga de moldear cada libro

-Propiedades: Almacena la información básica: titulo, autor, genero y año.
-Estado: Incluye una propiedad disponible (booleano) que cambia según los préstamos.
-Método disponibilidad(): Se encarga de transformar los datos internos en una frase legible que indica si el libro está listo para llevar o ya está prestado.

2. Clase Biblioteca
Funciona como el contenedor del sistema entero
Almacenamiento: Utiliza un arreglo (this.libros) para guardar todas las instancias de la clase Libro.
Gestiona el flujo de préstamos, verificando la existencia y el estado de cada objeto antes de modificarlo.
Realiza filtros por género devolviendo sub-arreglos con los objetos encontrados.
Cálculo de Totales: Recorre la colección para contar y reportar el estado general de la biblioteca.

3. Ejecución
Se puede ejecutar a través de consola local o utilizando el index.html para cargar el script.