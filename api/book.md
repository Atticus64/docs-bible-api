
# Books info endpoint

`/api/book/<BookName>`

* https://bible-api.deno.dev/api/book/genesis

> La propiedad `BookName` necesita ser un libro de la biblia valido

```ts
const books = [
    'genesis',
    'exodo',
    'levitico',
    'numeros',
    // ...
]
```

::: details
 Todos los libros soportados

```ts
export const books = [
  'genesis',
  'exodo',
  'levitico',
  'numeros',
  'deuteronomio',
  'josue',
  'jueces',
  'rut',
  '1-samuel',
  '2-samuel',
  '1-reyes',
  '2-reyes',
  '1-cronicas',
  '2-cronicas',
  'esdras',
  'nehemias',
  'ester',
  'job',
  'salmos',
  'proverbios',
  'eclesiastes',
  'cantares',
  'isaias',
  'jeremias',
  'lamentaciones',
  'ezequiel',
  'daniel',
  'oseas',
  'joel',
  'amos',
  'abdias',
  'jonas',
  'miqueas',
  'nahum',
  'habacuc',
  'sofonias',
  'hageo',
  'zacarias',
  'malaquias',
  'mateo',
  'marcos',
  'lucas',
  'juan',
  'hechos',
  'romanos',
  '1-Corintios',
  '2-Corintios',
  'galatas',
  'efesios',
  'filipenses',
  'colosenses',
  '1-tesalonicenses',
  '2-tesalonicenses',
  '1-timoteo',
  '2-timoteo',
  'tito',
  'filemon',
  'hebreos',
  'santiago',
  '1-pedro',
  '2-pedro',
  '1-juan',
  '2-juan',
  '3-juan',
  'judas',
  'apocalipsis'
]
```
:::

### Request with typescript

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


### Response


```ts
interface ResponseBook {
	name: string
	abrev: string	
	chapters: number
	testament: string
}
```

