let bag = document.querySelector('.bag');
let bagDetails = document.querySelector('.bag-details');
let cancelBag = document.querySelector('.cancel-bag');

bag.addEventListener('click', function() {
  bagDetails.classList.toggle('show');
});

cancelBag.addEventListener('click', function(e) {
  if (bagDetails.classList.contains('show')) {
    bagDetails.classList.remove('show');
  }
});

bagDetails.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-item')) {
    console.log(e.target.parentNode.parentNode.remove());
  }
});
