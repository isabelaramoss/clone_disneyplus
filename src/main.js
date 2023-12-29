document.addEventListener('DOMContentLoaded', function(){
  //header visibility
  const heroSection = document.querySelector('.hero');
    //pegar altura
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function(){
                        //scroll no eixo Y (vertical)
    const posicaoAtual = window.scrollY

    if(posicaoAtual < alturaHero){
      ocultaElementosHeader();
    } else{
      exibeElementosHeader();
    }
  })


  const buttons = document.querySelectorAll('[data-tab-button]');
  // vv abrir e fechar faq
  const questions = document.querySelectorAll('[data-faq-question]');
  
  //Seçãoa de atrações, programações das abas 
  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(botao){
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add('shows__list--is-active');
      removeBotaoAtivo();
      botao.target.classList.add('shows__tabs__button--is-active');
    })
  }

  //Seção FAQ e accordion
  for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', abreOuFechaResposta);
  }
})


//ocultar elemento do header
function ocultaElementosHeader(){
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

//exibe elemento do header
function exibeElementosHeader(){
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}


function abreOuFechaResposta(elemento){
  const classe = 'faq__questions__item--is-open';
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}

function escondeTodasAbas(){
  const tabsContainer = document.querySelectorAll('[data-tab-id]');
  for(let i = 0; i < tabsContainer.length; i++){
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}

function removeBotaoAtivo(){
  const buttons = document.querySelectorAll('[data-tab-button]');

  for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }

}