
# Versions endpoints

`/api/versions`

Este endpoint devuelve una lista de todas las versiones disponibles.

* https://bible-api.deno.dev/api/versions

### Interface de la Response

```ts
interface Version {
    name: string;
    version: string;
    uri: string;
}

type Versions = Version[];
```


### Response

```json
[  
  {
    "name": "Reina Valera 1960",
    "version": "rv1960",
    "uri": "/api/read/rv1960"
  },
  {
    "name": "Reina Valera 1995",
    "version": "rv1995",
    "uri": "/api/read/rv1995"
  },
  {
    "name": "Nueva version internacional",
    "version": "nvi",
    "uri": "/api/read/nvi"
  },
  {
    "name": "Dios habla hoy",
    "version": "dhh",
    "uri": "/api/read/dhh"
  },
  {
    "name": "Palabra de Dios para todos",
    "version": "pdt",
    "uri": "/api/read/pdt"
  }
  //... Versiones que se vayan agregando
]
```

