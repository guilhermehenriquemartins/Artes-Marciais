function apareceMenu() {
  if (items.style.display == 'block') {
    items.style.display = 'none'
  } else {
    items.style.display = 'block'
  }
}

function clickKrav() {
  textokravmaga.style.display = 'block'
  textokungfu.style.display = 'none'
  textomuaythai.style.display = 'none'
}

function clickKung() {
  textokravmaga.style.display = 'none'
  textomuaythai.style.display = 'none'
  textokungfu.style.display = 'block'
}

function clickMuay() {
  textomuaythai.style.display = 'block'
  textokravmaga.style.display = 'none'
  textokungfu.style.display = 'none'
}