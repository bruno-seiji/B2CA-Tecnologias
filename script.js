var header = document.querySelector("header")

window.addEventListener('scroll', () => {
  // Verifica se o scroll vertical passou de 100px
  if (window.scrollY > 100) {
    header.classList.add("fixed")
  }
  else{
    header.classList.remove("fixed")
  }
});

