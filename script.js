const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
   button.addEventListener('click', function(){
       const atual = document.querySelector('.ativo');
       const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

       atual.classList.remove('ativo');
       document.getElementById(proximoPasso).classList.add('ativo');
   })

   const botao = document.getElementById('botaoFujão');

   botao.addEventListener('mouseover', () => {
       const larguraJanela = window.innerWidth;
       const alturaJanela = window.innerHeight;
       const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
       const novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

       botao.style.left = `${novaPosicaoX}px`;
       botao.style.top = `${novaPosicaoY}px`;
   });
})