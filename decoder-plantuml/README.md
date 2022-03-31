# decoder-plantuml
PlantUML decoder in Node.js.

# Install

Node.js:

```
npm install decoder-plantuml
```

# Example

```javascript
const plantumlDecoder = require('decoder-plantuml');

const encodedData = 'SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80';

const decodedData = plantumlDecoder.decode(encodedData);
console.log(decodedData);
/**
@startuml
Bob -> Alice : hello
@enduml
*/
```
# License
MIT
