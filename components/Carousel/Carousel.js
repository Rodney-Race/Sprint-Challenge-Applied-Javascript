/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

// HTML:
  

  //Function creating carousel component
/*function createCarousel() {
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightBtn = document.createElement('div');

  // Reference to all of the images
  mountains.src = "./assets/carousel/mountains.jpeg";
  computers.src = "./assets/carousel/computer.jpeg";
  trees.src = "./assets/carousel/trees.jpeg";
  turntable.src = "./assets/carousel/turntable.jpeg";

  // Current index
  carousel.classList('carousel');
  leftBtn.classList('left-button');
  rightBtn.classList('right-button');

  carousel.appendChild(leftBtn);
  carousel.appendChild(mountains);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightBtn);

  // Click handler
  const pArr = [mountains, computer, trees, turnable,];
  mountains.style.display = 'flex';
  pArr.forEach(() => {
    rightBtn.addEventListener('click', () => {
      if (mountains.style.display = 'flex') {
        mountains.style.display = none;
        computer.style.dispaly = 'flex';
      }else if (computer.style.display = 'flex'){
        computer.style.display = 'none';
        trees.style.display = 'flex';
      }
    });
  });
  return carousel;
}

const container = document.querySelector('.carousel-container');
const create = CreateCarousel();
container.appendChild(create)