const eye = document.querySelectorAll('.eye');
const pass = document.querySelector('#senha');

const toggleEye = ()=>{
  document.querySelectorAll('.eye').forEach(eye => eye.classList.toggle('hide'))
  
  const type = pass.getAttribute('type') == 'password' ? 'text' : 'password'
  pass.setAttribute('type', type)
}

eye.forEach(item => item.addEventListener('click', toggleEye))