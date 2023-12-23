# Verses info endpoint

`/api/read/<Version>/<BookName> | <Abrev> /<Chapter>/<Verse> | <Range>`

Este endpoint devuelve el versiculo/versiculos de la cita solicitada

### Condiciones

* `<Version>` debe ser una version valida de la biblia soportada por la api

Puede ver las versiones soportadas en la seccion de [Versions](/api/versions)

* `<BookName>` debe ser un libro valido dentro de la version que se solicita

Puede ver los libros soportados en la seccion de [Books](/api/books#libros-y-abreviaturas)

* `<Abrev>` debe ser una abreviatura valida dentro del libro que se solicita

Puede ver las abreviaturas soportadas en la seccion de [Books](api/books#libros-y-abreviaturas)

* `<Chapter>` debe ser un capitulo valido dentro del libro que se solicita
* `<Verse>` debe ser un versiculo valido dentro del capitulo que se solicita
* `<Range>` debe ser un rango valido de versiculos dentro del capitulo que se solicita


## Ejemplos  

Obtener por nombre del libro 

* https://bible-api.deno.dev/api/read/rv1960/genesis/1/1-3

Obtener por abreviatura del libro 

* https://bible-api.deno.dev/api/read/rv1960/gn/1/1-3

### Interface de la Response

```ts
export interface Verse {
    verse: string;
    number: number;
    study: string;
    id: number;
}

type Verses = Verse[] 
```

### Response 

```json
[
  {
    "verse": "En el principio creó Dios los cielos y la tierra.",
    "number": 1,
    "study": "La Creación",
    "id": 1
  },
  {
    "verse": "Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas.",
    "number": 2,
    "id": 2
  },
  {
    "verse": "Y dijo Dios: Sea la luz;  y fue la luz.",
    "number": 3,
    "id": 3
  }
]
```


