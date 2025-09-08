
const login    = document.getElementById('modal-login');
const register = document.getElementById('modal-register');

function openModal(m){
  m?.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeModal(m){
  m?.classList.remove('is-open');
  if(!document.querySelector('.modal.is-open')){
    document.body.classList.remove('modal-open');
  }
}


document.getElementById('openLogin')?.addEventListener('click', e=>{
    e.preventDefault(); 
    openModal(login); 
});

document.getElementById('openRegister')?.addEventListener('click', e=>{ 
    e.preventDefault(); 
    openModal(register); 
});


document.getElementById('goRegister')?.addEventListener('click', e=>{ 
    e.preventDefault(); 
    closeModal(login);   
    openModal(register); 
});

document.getElementById('goLogin')?.addEventListener('click', e=>{ 
    e.preventDefault(); 
    closeModal(register); 
    openModal(login); 
});


document.querySelectorAll('.modal [data-close]').forEach(el=>{
  el.addEventListener('click', ()=> closeModal(el.closest('.modal')));
});


document.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal.is-open').forEach(m=>closeModal(m));
  }
});
