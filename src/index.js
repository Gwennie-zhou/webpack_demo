// 定义一个组件
import _ from 'lodash'
import './style.css'
import Bg from "./bg.jpg"

function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'world'], ' ')
    element.classList.add('hello')

    const bg = new Image()
    bg.src = Bg
    bg.classList.add("bg")
    element.appendChild(bg)

    return element
}

document.body.appendChild(component())