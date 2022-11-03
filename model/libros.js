const libros = [
   { titulo: 'El ingenioso hidalgo don Quijote de La Mancha', autor: 'Miguel de Cervantes', año: 1605, id: '1'},
   { titulo: 'Harry Potter' , autor: 'J.K. Rowling', año: 1997, id: '2' },
   { titulo: 'Historia de dos ciudades' , autor: 'Charles Dickens', año: 1859, id: '3' },
]

const findLibro  = id => {
   return libros.find(l => l.id == id)
}

const findLibros = _ => {
   return libros
}

const saveLibro = libro => {
   libro.año = parseInt(libro.año)
   const id = parseInt(libros[libros.length-1].id)+1
   libro.id = String(id) // libro.id = id
   libros.push(libro)
   return libro
}

const updateLibro = (libro, id) => {
   libro.id = id
   const index = libros.findIndex(l => l.id == id)
   libros.splice(index, 1, libro)

   return libro
}

const deleteLibro = id => {
   const index = libros.findIndex(l => l.id == id)
   const libro = libros.splice(index, 1)[0]

   return libro
}

export default {
   findLibro,
   findLibros,
   saveLibro,
   updateLibro,
   deleteLibro
}