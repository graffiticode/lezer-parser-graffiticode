# @lezer/graffiticode

This is a Graffiticode grammar for the [lezer](https://lezer.codemirror.net/) parser system.

## Graffiticode Syntax

The Graffiticode language supports:

1. **JSON Compatible Values**:
   - Objects: `{ "key": value, ... }`
   - Arrays: `[value, value, ...]`
   - Strings: `"text"`
   - Numbers: `123`, `123.456`, `1e10`
   - Booleans: `true`, `false`
   - Null: `null`

2. **Trailing Commas**:
   - Objects and arrays can have optional trailing commas: `[1, 2, 3,]`, `{"a": 1, "b": 2,}`

3. **Let Definitions**:
   - Bind values with the `let` keyword
   - Let definitions must be terminated with `..`
   - Example: `let = 42..`

4. **Programs**:
   - A program is a sequence of statements
   - Statements can be let definitions or expressions
   - Example:
     ```
     let = {
       "name": "value",
       "items": [1, 2, 3]
     }..
     
     [4, 5, 6]
     ```

## Usage

To use this parser, add it to your project:

```bash
npm install @lezer/graffiticode
```

Then import and use it in your code:

```javascript
import {parser} from "@lezer/graffiticode"

let tree = parser.parse("let = 42..")
console.log(tree.toString())  // Logs the syntax tree
```

## Development

To build the parser:

```bash
npm run build
```

To run tests:

```bash
npm run test
```