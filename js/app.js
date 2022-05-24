'use strict';

// ********** GLOBAL VARIABLES **********
let voteCount = 10;
let allProducts = [];


// ********** DOM VARIABLES **********
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let showResultsBtn = document.getElementById('show-results-button');
let resultsList = document.getElementById('results-list');

// *********** CONSTRUCTOR **********

function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;

  allProducts.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');


// *********** HELPER FUNCTIONS/EXECUTABLE CODE ******
function getRandomIndex(){
  return Math.floor(Math.random()*allProducts.length);
}

function renderImgs(){

  let prodOneIndex = getRandomIndex();
  let prodTwoIndex = getRandomIndex();
  let prodThreeIndex = getRandomIndex();

  // validation to make sure the nums are unique
  // use a container and
  while(prodOneIndex === prodTwoIndex ||
  prodOneIndex === prodThreeIndex || prodTwoIndex === prodOneIndex || prodTwoIndex === prodThreeIndex || prodThreeIndex === prodOneIndex || prodThreeIndex === prodTwoIndex){
    prodOneIndex = getRandomIndex();
    prodTwoIndex = getRandomIndex();
    prodThreeIndex = getRandomIndex();
  }

  imgOne.src = allProducts[prodOneIndex].photo;
  imgOne.alt = allProducts[prodOneIndex].name;
  allProducts[prodOneIndex].views++;

  imgTwo.src = allProducts[prodTwoIndex].photo;
  imgTwo.alt = allProducts[prodTwoIndex].name;
  allProducts[prodTwoIndex].views++;

  imgThree.src = allProducts[prodThreeIndex].photo;
  imgThree.alt = allProducts[prodThreeIndex].name;
  allProducts[prodThreeIndex].views++;
}

renderImgs();

// ********** EVENT HANDLERS **********
function handleClick(event) {
  voteCount--;

  let imgClicked = event.target.alt;

  for(let i = 0; i < allProducts.length; i++){
    if(imgClicked === allProducts[i].name){
      allProducts[i].votes++;
    }
  }
  renderImgs();

  if(voteCount ===0){
    imgContainer.removeEventListener('click', handleClick);
  }
}


// button needs to not work until voting is over
function handleShowResults(){
  if(voteCount === 0){
    for(let i = 0; i < allProducts.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${allProducts[i].name}: shown ${allProducts[i].views} times: voted ${allProducts[i].votes} times.`;
      resultsList.appendChild(liElement);
    }
  }
}

// ********** EVENT LISTENERS **********

imgContainer.addEventListener('click', handleClick);
showResultsBtn.addEventListener('click', handleShowResults);


