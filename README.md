# Utils Library

`Utils Library` es una librería de utilidades en TypeScript diseñada para facilitar tareas comunes en el desarrollo de aplicaciones. Por el momento, contiene funciones útiles para trabajar con cadenas de texto.

## Funcionalidades

### 1. Capitalizar la primera letra de una cadena

La función `capitalizeFirstLetter` toma una cadena y devuelve la misma cadena con la primera letra en mayúscula. Si la cadena proporcionada es `null` o está vacía, devolverá una cadena vacía.

#### Uso:

```typescript
import { capitalizeFirstLetter } from 'utils-library/string';

const str = "hello world";
const result = capitalizeFirstLetter(str);
console.log(result); // Output: "Hello world"
```
