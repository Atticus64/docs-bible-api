
# Chapter info endpoint

`/api/read/<Version>/<BookName> | <Abrev>/<Chapter>/`

Este endpoint devuelve el versículo/versículos de la cita solicitada

## Condiciones

* `<Version>` debe ser una versión valida de la biblia soportada por la api

Puede ver las versiones soportadas en la seccion de [Versions](/api/versions)

* `<BookName>` debe ser un libro válido dentro de la versiónque se solicita

Puede ver los libros soportados en la seccion de [Books](/api/books#libros-y-abreviaturas)

* `<Abrev>` debe ser una abreviatura válida dentro del libro que se solicita

Puede ver las abreviaturas soportadas en la seccion de [Books](api/books#libros-y-abreviaturas)

* `<Chapter>` debe ser un capítulo válido dentro del libro que se solicita


Example: 

* https://bible-api.deno.dev/api/read/rv1960/genesis/1

### Interface de la Reponse

```ts
export interface Verse {
    verse: string;
    number: number;
    study: string;
    id: number;
}

export interface Chapter {
    testament: string;
    name: string;
    num_chapters: number;
    chapter: number;
    vers: Verse[];
}

```

### Response 

```json
{
  "testament": "old",
  "name": "Genesis",
  "num_chapters": 50,
  "chapter": 1,
  "vers": [
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
    },
    // ... todos los versículos del capítulo 1
  ]
}
```

