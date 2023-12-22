
# Books info endpoint

`/api/book/<BookName>`

* https://bible-api.deno.dev/api/book/genesis

> The `BookName` needs to be some of the bible books like

```ts
const books = [
	"genesis",
	"exodo",
	// ... and so on

]
```

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

