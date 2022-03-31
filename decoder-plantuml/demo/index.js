const plantumlDecoder = require('../lib/decoder.min');
const encodedData = 'SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80';
const decodedData = plantumlDecoder.decode(encodedData);
console.log(decodedData);
/**
@startuml
Bob -> Alice : hello
@enduml
*/