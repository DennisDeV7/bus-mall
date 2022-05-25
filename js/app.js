'use strict';

// ********** GLOBAL VARIABLES **********
let voteCount = 25;
let allProducts = [];


// ********** DOM VARIABLES **********
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let showResultsBtn = document.getElementById('show-results-button');
let resultsList = document.getElementById('results-list');

// ********** CANVAS Reference **********
let ctx = document.getElementById('myChart');

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

let indexArray = [];

function renderImgs(){

  while(indexArray.length < 6){
    let randomNum = getRandomIndex();
    if(!indexArray.includes(randomNum)){
      indexArray.push(randomNum);
    }
  }

  let prodOneIndex = indexArray.shift();
  let prodTwoIndex = indexArray.shift();
  let prodThreeIndex = indexArray.shift();

  console.log(`${prodOneIndex}, ${prodTwoIndex}, ${prodThreeIndex}`);

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

// ********** Render Chart **********
function renderChart(){

  let productNames = [];
  let productVotes = [];
  let productViews = [];

  for(let i = 0; i < allProducts.length; i++){
    productNames.push(allProducts[i].name);
    productVotes.push(allProducts[i].votes);
    productViews.push(allProducts[i].views);
  }


  let myChartObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // 1
          'rgba(54, 162, 235, 0.2)', // 2
          'rgba(255, 206, 86, 0.2)', // 3
          'rgba(75, 192, 192, 0.2)', // 4
          'rgba(153, 102, 255, 0.2)', // 5
          'rgba(255, 159, 64, 0.2)', // 6
          'rgba(252, 115, 3, 0.2)', // 7
          'rgba(177, 252, 3, 0.2)', // 8
          'rgba(3, 252, 177, 0.2)', // 9
          'rgba(61, 3, 252, 0.2)', // 10
          'rgba(252, 3, 190, 0.2)', // 11
          'rgba(252, 3, 53, 0.2)', // 12
          'rgba(252, 3, 3, 0.2)', // 13
          'rgba(252, 219, 3, 0.2)', // 14
          'rgba(32, 252, 3, 0.2)', // 15
          'rgba(50, 92, 77, 0.2)', // 16
          'rbga(50, 70, 92, 0.2)', // 17
          'rgba(64, 50, 92, 0.2)', // 18
          'rgba(92, 50, 68, 0.2)', // 19
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)', // 1
          'rgba(54, 162, 235, 0.2)', // 2
          'rgba(255, 206, 86, 0.2)', // 3
          'rgba(75, 192, 192, 0.2)', // 4
          'rgba(153, 102, 255, 0.2)', // 5
          'rgba(255, 159, 64, 0.2)', // 6
          'rgba(252, 115, 3, 0.2)', // 7
          'rgba(177, 252, 3, 0.2)', // 8
          'rgba(3, 252, 177, 0.2)', // 9
          'rgba(61, 3, 252, 0.2)', // 10
          'rgba(252, 3, 190, 0.2)', // 11
          'rgba(252, 3, 53, 0.2)', // 12
          'rgba(252, 3, 3, 0.2)', // 13
          'rgba(252, 219, 3, 0.2)', // 14
          'rgba(32, 252, 3, 0.2)', // 15
          'rgba(50, 92, 77, 0.2)', // 16
          'rbga(50, 70, 92, 0.2)', // 17
          'rgba(64, 50, 92, 0.2)', // 18
          'rgba(92, 50, 68, 0.2)', // 19
        ],
        borderWidth: 1,
      },
      {
        label: '# of Views',
        data: productViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // 1
          'rgba(54, 162, 235, 0.2)', // 2
          'rgba(255, 206, 86, 0.2)', // 3
          'rgba(75, 192, 192, 0.2)', // 4
          'rgba(153, 102, 255, 0.2)', // 5
          'rgba(255, 159, 64, 0.2)', // 6
          'rgba(252, 115, 3, 0.2)', // 7
          'rgba(177, 252, 3, 0.2)', // 8
          'rgba(3, 252, 177, 0.2)', // 9
          'rgba(61, 3, 252, 0.2)', // 10
          'rgba(252, 3, 190, 0.2)', // 11
          'rgba(252, 3, 53, 0.2)', // 12
          'rgba(252, 3, 3, 0.2)', // 13
          'rgba(252, 219, 3, 0.2)', // 14
          'rgba(32, 252, 3, 0.2)', // 15
          'rgba(50, 92, 77, 0.2)', // 16
          'rbga(50, 70, 92, 0.2)', // 17
          'rgba(64, 50, 92, 0.2)', // 18
          'rgba(92, 50, 68, 0.2)', // 19
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)', // 1
          'rgba(54, 162, 235, 0.2)', // 2
          'rgba(255, 206, 86, 0.2)', // 3
          'rgba(75, 192, 192, 0.2)', // 4
          'rgba(153, 102, 255, 0.2)', // 5
          'rgba(255, 159, 64, 0.2)', // 6
          'rgba(252, 115, 3, 0.2)', // 7
          'rgba(177, 252, 3, 0.2)', // 8
          'rgba(3, 252, 177, 0.2)', // 9
          'rgba(61, 3, 252, 0.2)', // 10
          'rgba(252, 3, 190, 0.2)', // 11
          'rgba(252, 3, 53, 0.2)', // 12
          'rgba(252, 3, 3, 0.2)', // 13
          'rgba(252, 219, 3, 0.2)', // 14
          'rgba(32, 252, 3, 0.2)', // 15
          'rgba(50, 92, 77, 0.2)', // 16
          'rbga(50, 70, 92, 0.2)', // 17
          'rgba(64, 50, 92, 0.2)', // 18
          'rgba(92, 50, 68, 0.2)', // 19
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(ctx, myChartObj);
}

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

  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
}


// button needs to not work until voting is over
function handleShowResults(){
  if(voteCount === 0){
    renderChart();
    showResultsBtn.removeEventListener('click', handleShowResults);
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


