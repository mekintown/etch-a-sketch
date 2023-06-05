const grids = document.querySelector(".grids");
const colorPicker = document.querySelector(".colorPicker")
let isMouseDown = false;
function createGrid(pixel) {
    grids.style.setProperty('grid-template-rows', `repeat(${pixel}, 1fr)`);
    grids.style.setProperty('grid-template-columns', `repeat(${pixel}, 1fr)`);
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


createGrid(120);