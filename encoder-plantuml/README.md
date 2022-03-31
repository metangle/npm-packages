# encoder-plantuml
PlantUML encoder in Node.js.

# Install

Node.js:

```
npm install encoder-plantuml
```

# Example

```javascript
const plantumlEncoder = require('encoder-plantuml');

const decodedData = 
`@startuml
Bob -> Alice : hello
@enduml`;

const encodedData = plantumlEncoder.encode(decodedData);
console.log(encodedData) // SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80
```
```javascript
const url = 'http://www.plantuml.com/plantuml/img/' + encodedData;

// ![image](https://www.plantuml.com/plantuml/img/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80)
```

The URL can then be used to display the diagram:

![image](https://www.plantuml.com/plantuml/img/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80)

# License
MIT
