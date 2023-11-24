const horas = document.getElementById('horas')
const min = document.getElementById('min')
const seg = document.getElementById('seg')



const relogio = setInterval(function time() {
  let dateToday = new Date();

  let h = dateToday.getHours()
  let m = dateToday.getMinutes()
  let s = dateToday.getSeconds()

  if (h < 10) h = '0' + h
  if (m < 10) m = '0' + m
  if (s < 10) s = '0' + s

  horas.textContent = h
  min.textContent = m
  seg.textContent = s
})