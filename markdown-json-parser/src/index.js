const marked = require('marked')

const jsdom = require('jsdom')
class MarkdownJsonParser {
    constructor() {

    }

    /**
     * 
     * @param {*} markdown markdown文本
     * @returns 
     */
     table2json(markdown) {
        const tableStr = marked.marked(markdown) // html内容
        let JSDOM = jsdom.JSDOM
        let document = new JSDOM(tableStr).window.document
        let table = document.createRange().createContextualFragment(tableStr).firstChild;
        
        let data = [];
        let headers = [];
        for (let i = 0; i < table.rows[0].cells.length; i++) {
            headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
        }
        for (let i = 1; i < table.rows.length; i++) {
            let tableRow = table.rows[i];
            let rowData = {};
            for (let j = 0; j < tableRow.cells.length; j++) {
                rowData[headers[j]] = tableRow.cells[j].innerHTML;
            }
            data.push(rowData);
        }
        return data;
    }
}
module.exports = new MarkdownJsonParser();