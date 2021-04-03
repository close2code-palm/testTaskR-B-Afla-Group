const radios = document.querySelectorAll('radio');
const select = document.querySelector('select');
const currentPrice = document.querySelector('.finalPrice').textContent;
const currentLicense = document.querySelector('.useplan')

const newPrice = (plan, quantity) => plan * quantity;

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    let currsel = document.querySelector('option:selected').nodeValue;
    currentPrice ='TOTAL: ' + newPrice(currsel, this.nodeValue)
  })
};

select.addEventListener('change', function(event) {
  let currplan = document.querySelector('radio:selected').nodeValue;
  currentLicense.textContent = 'Selected plan:  #' + event.target.value;
  currentPrice = 'TOTAL: ' + newPrice(currplan, this.nodeValue)
})