/**
 *  鼠标划词菜单工具 
 *  */

// 样式
import style from './style'

/**
 * 获取选中文本
 * 
 * @params max 最大截取字符数 默认100
 * @returns text 选中文本 
 */
const getSelectText = () => {
    let selectionObj, text

    if (window.getSelection) {
        selectionObj = window.getSelection()
        text = selectionObj.toString()
    }

    return {
        selectedText: text.trim().slice(0, 100),
    }
}

const selection = {
    bind(el, binding) {
        const options = binding.value
        if (!Array.isArray(options)) return console.error(`[SelectionTip warn]: Invalid parameter: type check failed for parameter "options". Expected Array, got ${typeof options} with value ${options}.`)
        if (!(options && options.length)) return

        const oDiv = el
        let startX, startY, endX, endY
        oDiv.addEventListener('mousedown', function (e) {
            const dom = document.getElementById('selectionPopoverTool')
            dom && document.body.removeChild(dom)
            startX = e.pageX
            startY = e.pageY
        })
        oDiv.addEventListener('mouseup', function (e) {
            endX = e.pageX
            endY = e.pageY
            const x = startY <= endY ? startX : endX
            const y = startY <= endY ? startY : endY
            const obj = {
                ...getSelectText(),
                x,
                y
            }
            if (!obj.selectedText) return console.log(`[SelectionTip info]: Nothing is selected`)

            const dom = document.getElementById('selectionPopoverToolStyle')
            if (!dom) {
                const div = document.createElement('div')
                div.innerHTML = `<style id="selectionPopoverToolStyle">${style}</style>`
                document.getElementsByTagName('head')[0].appendChild(div.firstElementChild)
            }

            const wrapper = document.createElement('ul')
            wrapper.setAttribute('id', 'selectionPopoverTool')

            options.forEach(el => {
                const item = document.createElement('li')
                if (el.icon) {
                    const img = document.createElement('img')
                    img.width = 16
                    img.height = 16
                    img.src = el.icon
                    item.appendChild(img)
                }
                const text = document.createTextNode(el.label)
                item.appendChild(text)
                item.addEventListener('click', function (e) {
                    if (el.url) {
                        window.open(el.url, '_blank')
                    } else if (el.handler && (typeof el.handler === 'function')) {
                        el.handler(obj.selectedText)
                    }

                    wrapper.parentNode.removeChild(wrapper)
                })

                wrapper.appendChild(item)
            })

            document.body.appendChild(wrapper)

            wrapper.style.left = (obj.x - wrapper.offsetWidth / 2) + 'px'
            wrapper.style.top = (obj.y - wrapper.offsetHeight - 15) + 'px'
        })
    },
}

export default selection