# Search verses endpoint

## Query information

`/api/read/<Version>/search?q=<Query>`

* `q` La query es requerida y es de tipo string
* `testament` El testamento por defecto  es `"both"` para buscar en ambos testamentos
* `take` El take representa el numero de elementos a traer por pagina
* `page` El page representa el numero de pagina a traer 

```ts
interface Parameters {
  q: string
  testament?: "old" | "new" | "both"
  take?: number
  page?: number
}
```

## Respuesta 

La propiedad `data` puede venir sin elementos si no se encuentran coincidencias

```ts
type VerseFound = {
  verse: string;
  study: string;
  number: number;
  id: number;
  book: string;
  chapter: number;
}

interface SearchResponse {
  data: VerseFound[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    pageCount: number;
  }
}
```

## Minimal query

* https://bible-api.deno.dev/api/read/nvi/search?q=Dios

```
curl https://bible-api.deno.dev/api/read/nvi/search?q=Dios
```

## Take y Page 

Esta query debería traer los 5 versículos que encuentre con la busqueda 
de la query Dios correspondientes a la página 2

* https://bible-api.deno.dev/api/read/nvi/search?q=Dios&take=5&page=2

```
curl https://bible-api.deno.dev/api/read/nvi/search?q=Dios&take=5&page=2
```

## Testament

Esta query debería traer los 5 versículos que encuentre con la busqueda 
de la query Dios correspondientes a la página 2 y solamente buscar en el nuevo testamento

* https://bible-api.deno.dev/api/read/nvi/search?q=Dios&take=5&page=2&testament=new

```
curl -X GET \
      "https://bible-api.deno.dev/api/read/nvi/search?q=Dios&take=5&page=2&testament=new"
```




