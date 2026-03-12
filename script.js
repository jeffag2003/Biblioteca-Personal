class Libro {
  constructor(titulo, autor, genero, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.año = Number(año); 
    this.disponible = true;    
  }

disponibilidad() {
    const estado = this.disponible ? "Disponible" : "Prestado";
    return `${this.titulo} de ${this.autor} (${this.año}) - ${estado}`;
  }
}

class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
    this.libros = [];
  }

  existeLibro(tituloABuscar) {
    for (let libro of this.libros) {
      if (libro.titulo === tituloABuscar) {
        return true;
      }
    }
    return false;
  }

  agregarLibro(nuevoLibro) {
    if (this.existeLibro(nuevoLibro.titulo)) {
      console.error(`Error: El libro "${nuevoLibro.titulo}" ya existe.`);
    } else {
      this.libros[this.libros.length] = nuevoLibro;
      console.log(`Confirmado: "${nuevoLibro.titulo}" agregado.`);
    }
  }

  buscarPorGenero(generoBuscado) {
    return this.libros.filter(libro => 
      libro.genero.toLowerCase() === generoBuscado.toLowerCase()
    );
  }

  prestar(titulo) {
    let libroEncontrado = null;

    for (let libro of this.libros) {
      if (libro.titulo === titulo) {
        libroEncontrado = libro;
        break;
      }
    }

    if (libroEncontrado === null) {
      throw new Error("El libro no existe en la biblioteca.");
    }

    if (libroEncontrado.disponible === false) {
      console.warn(`El libro "${titulo}" no está disponible actualmente.`);
    } else {
      libroEncontrado.disponible = false;
      console.log(`Préstamo exitoso: "${titulo}".`);
    }
  }

  estadisticas() {
    let total = this.libros.length;
    let disponibles = 0;
    let prestados = 0;

    for (let libro of this.libros) {
      if (libro.disponible) {
        disponibles++;
      } else {
        prestados++;
      }
    }

    console.log(`Estadísticas de ${this.nombre}`);
    console.log(`Libros totales: ${total}`);
    console.log(`Disponibles: ${disponibles}`);
    console.log(`Prestados: ${prestados}`);
  }
}


const miBiblioteca = new Biblioteca("Mi Biblioteca");

miBiblioteca.agregarLibro(new Libro("Cien años de soledad", "García Márquez", "Ficción", 1967));
miBiblioteca.agregarLibro(new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003));
miBiblioteca.agregarLibro(new Libro("Breve historia del tiempo", "Stephen Hawking", "Ciencia", 1988));
miBiblioteca.agregarLibro(new Libro("El Hobbit", "J.R.R. Tolkien", "Fantasía", 1937));
miBiblioteca.agregarLibro(new Libro("Steve Jobs", "Walter Isaacson", "Biografía", 2011));

miBiblioteca.agregarLibro(new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003));

try {
  miBiblioteca.prestar("Cien años de soledad");
  miBiblioteca.prestar("Cien años de soledad"); 
} catch (error) {
  console.error("Error:", error.message);
}

const ciencia = miBiblioteca.buscarPorGenero("ciencia");
console.log(
  "Libros de Ciencia:",
  ciencia.map((l) => l.disponibilidad())
);

miBiblioteca.estadisticas();