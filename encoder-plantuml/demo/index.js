const plantumlEncoder = require('../lib/encoder.min');
const decodedData = 
`@startuml
Bob -> Alice : hello
@enduml`
const encodedData = plantumlEncoder.encode(decodedData);
console.log(encodedData) // SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80

const url = 'http://www.plantuml.com/plantuml/img/' + encodedData;