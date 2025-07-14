const firstBtn = document.querySelector('#btn-inline')
const secondBtn = document.querySelector('#btn-onclick')
const thirdBtn = document.querySelector('#btn-addEventListener')

secondBtn.onclick = () => alert('Перезапись обработчика')

const first = () => alert('Первый обработчик')
const second = () => () => alert('Второй обработчик')

thirdBtn.addEventListener('click', first)
thirdBtn.addEventListener('click', second, {once: true})

thirdBtn.removeEventListener('click', first)

const outer = document.querySelector('#outer')
const inner = document.querySelector('#inner')

outer.addEventListener('click', () => {
  console.log('Перехват')
}, {capture: true})

inner.addEventListener('click', () => {
  console.log('Перехват')
}, {capture: true})

outer.addEventListener('click', () => {
  console.log('Вплытие')
})

inner.addEventListener('click', () => {
  console.log('Вплытие')
})