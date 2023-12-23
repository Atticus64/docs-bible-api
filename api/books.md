
# Books endpoints

## Libro en especifico

`/api/book/<BookName>`

Este endpoint devuelve la información de un libro de la Biblia.

* https://bible-api.deno.dev/api/book/genesis

### Response


```ts
interface ResponseBook {
	name: string
	abrev: string	
	chapters: number
	testament: string
}
```

> La propiedad `BookName` necesita ser un libro de la biblia valido o una abreviatura

```ts
const books = [
    'genesis',
    'exodo',
    'levitico',
    'numeros',
    // ...
]
```

## Libros y Abreviaturas Soportadas por la Api

::: details Todos los libros y las abreviaturas soportadas

```ts
[
  {
    name: "Genesis",
    abrev: "GN",
  },
  {
    name: "Exodo",
    abrev: "EX",
  },
  {
    name: "Levitico",
    abrev: "LV",
  },
  {
    name: "Numeros",
    abrev: "NM",
  },
  {
    name: "Deuteronomio",
    abrev: "DT",
  },
  {
    name: "Josue",
    abrev: "JOS",
  },
  {
    name: "Jueces",
    abrev: "JUE",
  },
  {
    name: "Rut",
    abrev: "RT",
  },
  {
    name: "1-Samuel",
    abrev: "1S",
  },
  {
    name: "2-Samuel",
    abrev: "2S",
  },
  {
    name: "1-Reyes",
    abrev: "1R",
  },
  {
    name: "2-Reyes",
    abrev: "2R",
  },
  {
    name: "1-Cronicas",
    abrev: "1CR",
  },
  {
    name: "2-Cronicas",
    abrev: "2CR",
  },
  {
    name: "Esdras",
    abrev: "ESD",
  },
  {
    name: "Nehemias",
    abrev: "NEH",
  },
  {
    name: "Ester",
    abrev: "EST",
  },
  {
    name: "Job",
    abrev: "JOB",
  },
  {
    name: "Salmos",
    abrev: "SAL",
  },
  {
    name: "Proverbios",
    abrev: "PR",
  },
  {
    name: "Eclesiastes",
    abrev: "EC",
  },
  {
    name: "Cantares",
    abrev: "CNT",
  },
  {
    name: "Isaias",
    abrev: "IS",
  },
  {
    name: "Jeremias",
    abrev: "JER",
  },
  {
    name: "Lamentaciones",
    abrev: "LM",
  },
  {
    name: "Ezequiel",
    abrev: "EZ",
  },
  {
    name: "Daniel",
    abrev: "DN",
  },
  {
    name: "Oseas",
    abrev: "OS",
  },
  {
    name: "Joel",
    abrev: "JL",
  },
  {
    name: "Amos",
    abrev: "AM",
  },
  {
    name: "Abdias",
    abrev: "ABD",
  },
  {
    name: "Jonas",
    abrev: "JON",
  },
  {
    name: "Miqueas",
    abrev: "MI",
  },
  {
    name: "Nahum",
    abrev: "NAH",
  },
  {
    name: "Habacuc",
    abrev: "HAB",
  },
  {
    name: "Sofonias",
    abrev: "SOF",
  },
  {
    name: "Hageo",
    abrev: "HAG",
  },
  {
    name: "Zacarias",
    abrev: "ZAC",
  },
  {
    name: "Malaquias",
    abrev: "MAL",
  },
  {
    name: "Mateo",
    abrev: "MT",
  },
  {
    name: "Marcos",
    abrev: "MR",
  },
  {
    name: "Lucas",
    abrev: "LC",
  },
  {
    name: "Juan",
    abrev: "JN",
  },
  {
    name: "Hechos",
    abrev: "HCH",
  },
  {
    name: "Romanos",
    abrev: "RO",
  },
  {
    name: "1-Corintios",
    abrev: "1CO",
  },
  {
    name: "2-Corintios",
    abrev: "2CO",
  },
  {
    name: "Galatas",
    abrev: "GA",
  },
  {
    name: "Efesios",
    abrev: "EF",
  },
  {
    name: "Filipenses",
    abrev: "FIL",
  },
  {
    name: "Colosenses",
    abrev: "COL",
  },
  {
    name: "1-Tesalonicenses",
    abrev: "1TS",
  },
  {
    name: "2-Tesalonicenses",
    abrev: "2TS",
  },
  {
    name: "1-Timoteo",
    abrev: "1TI",
  },
  {
    name: "2-Timoteo",
    abrev: "2TI",
  },
  {
    name: "Tito",
    abrev: "TIT",
  },
  {
    name: "Filemon",
    abrev: "FLM",
  },
  {
    name: "Hebreos",
    abrev: "HE",
  },
  {
    name: "Santiago",
    abrev: "STG",
  },
  {
    name: "1-Pedro",
    abrev: "1P",
  },
  {
    name: "2-Pedro",
    abrev: "2P",
  },
  {
    name: "1-Juan",
    abrev: "1JN",
  },
  {
    name: "2-Juan",
    abrev: "2JN",
  },
  {
    name: "3-Juan",
    abrev: "3JN",
  },
  {
    name: "Judas",
    abrev: "JUD",
  },
  {
    name: "Apocalipsis",
    abrev: "AP",
  }
]

```
:::

### Peticion usando typescript

```ts
const resp = await fetch("https://bible-api.deno.dev/api/book/genesis")

const data = await resp.json()

console.log(data) 
/**
 *  { 
 * 		name: "Genesis", 
 * 	 	abrev: "GEN", 
 * 		chapters: 50, 
 * 		testament: "Antiguo Testamento" 
 *  }
*/
```

## Obtener todos los libros

`/api/books`

Este endpoint devuelve todos los libros de la biblia

* https://bible-api.deno.dev/api/books

```ts
interface Book {
    name: string
    abrev: string
    chapters: number
    testament: string
}

type books = Book[] 

```


### Peticion usando curl

```bash 
curl https://bible-api.deno.dev/api/books
```

### Response 

```json
[
  {
    name: "Genesis",
    abrev: "GN",
    chapters: 50,
    testament: "Antiguo Testamento"
  },
  {
    name: "Exodo",
    abrev: "EX",
    chapters: 40,
    testament: "Antiguo Testamento"
  },
  {
    name: "Levitico",
    abrev: "LV",
    chapters: 27,
    testament: "Antiguo Testamento"
  }
  // ... y asi trae todos los libros
]
```

## Libros por testamento 

### Libros del Antiguo testamento

`/api/books/oldTestament`

Este endpoint devuelve todos los libros de la biblia que cumplan
con la condicion de que la key `testament` sea `Antiguo Testamento`

* https://bible-api.deno.dev/api/books/oldTestament

### Libros del Nuevo testamento

`/api/books/oldTestament`

Este endpoint devuelve todos los libros de la biblia que cumplan
con la condicion de que la key `testament` sea `Nuevo Testamento`

* https://bible-api.deno.dev/api/books/newTestament

Asi que ambos entregan como respuesta

```ts
type books = Book[]
```
