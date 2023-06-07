const grids = document.querySelector(".grids");
const colorPicker = document.querySelector(".colorPicker");
const slideValue = document.querySelector(".sliderValue");
const pixelPicker = document.querySelector(".pixelPicker");
const root = document.querySelector(":root");
const clearBtn = document.querySelector(".clear-btn")
const rainbowBtn = document.querySelector(".rainbow-btn");

let isMouseDown = false;
let isRainbowBtnClicked = false;

createGrid(pixelPicker.value);

function createGrid(pixel) {
    grids.style.setProperty('grid-template-rows', `repeat(${pixel}, 1fr)`);
    grids.style.setProperty('grid-template-columns', `repeat(${pixel}, 1fr)`);
    grids.textContent = '';
    for (let i = 0, stop = pixel**2; i < stop; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mousedown', () => {
            isMouseDown = true;
        })
        grid.addEventListener('mouseup', () => {
            isMouseDown = false;
        })
        grid.addEventListener('mousemove', (e) => {
            if(!isMouseDown) return;
            if (isRainbowBtnClicked) {
                grid.style.setProperty('background-color', getRandomColor());
            }
            else {
                grid.style.setProperty('background-color', `${colorPicker.value}`);
            }
        })
        grids.appendChild(grid);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

pixelPicker.addEventListener('input', () => {
    slideValue.textContent = pixelPicker.value;
    createGrid(pixelPicker.value);
});

colorPicker.addEventListener('input', () => {
    pixelPicker.style.setProperty('accent-color', `${colorPicker.value}`);
    slideValue.style.setProperty('background-color', `${colorPicker.value}`);
});

clearBtn.addEventListener('click', () => {
    createGrid(pixelPicker.value);
})

rainbowBtn.addEventListener('click', () => {
    isRainbowBtnClicked = !isRainbowBtnClicked
    rainbowBtn.classList.toggle("rainbow");
})
