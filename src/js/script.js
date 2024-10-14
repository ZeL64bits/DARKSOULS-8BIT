const buttons = document.querySelector(".newgame");
const overlay = document.getElementsByClassName('overlay')

links.forEach(link => {
  link.addEventListener('click', function(event){
    event.preventDefault();
    overlay.style.display = 'block';

    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
  })
})

overlay.addEventListener('clicl', function() {
  overlay.style.display = "none";
})
