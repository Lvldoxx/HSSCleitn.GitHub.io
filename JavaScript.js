const buttons = document.querySelectorAll('.square-button');

buttons.forEach(button => {
  button.addEventListener('mouseenter', e => {
    e.target.style.width = '110px';
    e.target.style.height = '110px';
  });
  button.addEventListener('mouseleave', e => {
    e.target.style.width = '100px';
    e.target.style.height = '100px';
  });
});
