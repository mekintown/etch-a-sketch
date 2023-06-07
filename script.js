const grids = document.querySelector(".grids");
const colorPicker = document.querySelector(".colorPicker");
const slideValue = document.querySelector(".sliderValue");
const pixelPicker = document.querySelector(".pixelPicker");
const root = document.querySelector(":root");
const clearBtn = document.querySelector(".clear-btn")

let isMouseDown = false;

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
            grid.style.setProperty('background-color', `${colorPicker.value}`);
        })
        grids.appendChild(grid);
    }
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
