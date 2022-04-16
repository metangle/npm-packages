/**
 * json blob 
 * 
 * return Promise object
 */
 const json2blob = {
    // json to blob
    j2b: (obj) => {
        return new Promise((resolve, reject) => {
            try {
                let data = obj;
                if (typeof data === 'object') {
                    data = JSON.stringify(obj);
                }
                const res =  new Blob([data], {
                    type: 'application/json'
                });
                resolve(res);
            }catch {
                console.error('Json to Blob: ERROR');
                reject('ERROR');
            }
        })
    },
    // blob to json
    b2j: (blob) => {
        return new Promise((resolve, reject) => {
            try {
                const reader = new FileReader();
                reader.readAsText(blob, 'utf-8');
                reader.onload = function (e) {
                    const readerres = reader.result;
                    const parseObj = JSON.parse(readerres);
                    resolve(parseObj);
                }
            }catch {
                console.error('Blob to Json: ERROR');
                reject('ERROR');
            }
        })
    },
    // blob to file 默认转成json文件
    b2f: (blob, fileName, contentType = 'json') => {
        let filename = fileName || 'demo';
        if (!filename.includes('.')) {
            filename = filename + '.' + contentType;
        }
        return new Promise((resolve, reject) => {
            try {
                const file = new File([blob], filename, {type: contentType, lastModified: Date.now()});
                resolve(file);
            }catch {
                console.error('Blob to File: ERROR');
                reject('ERROR');
            }
        })
    }
}

module.exports = json2blob;