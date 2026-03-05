class Libro {
  constructor(titulo, autor, genero, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.año = Number(año); 
    this.disponible = true;    
  }

  info() {
    const estado = this.disponible ? "Disponible" : "Prestado";
    return `${this.titulo} de ${this.autor} (${this.año}) - ${estado}`;
  }
}

class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
    this.libros = [];
    }

    
    existeLibro(libroExistente) {
    for (let libro of this.libros) { 
    if (libro.titulo === libroExistente) {
      return true;
    }
  }
  return false;
}

}
