var header = document.querySelector("header")

window.addEventListener('scroll', () => {
  // Verifica se o scroll vertical passou de 100px
  if (window.scrollY > 100) {
    header.classList.add("fixed_center")
  }
  else{
    header.classList.remove("fixed_center")
  }
});

