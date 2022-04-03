const body = document.querySelector('body')
let wrapper = document.querySelector('.wrapper')

createGrid(5);

function createGrid(nmbOfRows) {

    wrapper.style.gridTemplateColumns = `repeat(${nmbOfRows}, 1fr)`
    wrapper.style.gridTemplateRows = `repeat(${nmbOfRows}, 1fr)`

    for (i = 0; i < nmbOfRows**2; i++) {
        let div = document.createElement('div');
        div.classList.add(`${i}`);
        div.innerHTML = `${i}`;
        wrapper.appendChild(div);
    };
    
    const divs = document.querySelectorAll('div')
    divs.forEach(div => {
        if (div.className != 'wrapper') {
            div.style.border = '2px solid black';
            div.style.backgroundColor = 'burlywood';
        };
    });

    divs.forEach(div => {
        if (div.className != 'wrapper') {
            div.addEventListener('mouseenter', function(e) {
                console.log(e);
                e.target.style.backgroundColor = 'red';
            });
        };
    });
};


function deleteGrid() {
    wrapper.replaceChildren();
};

const button = document.querySelector('.btn')
button.addEventListener('click', function() {
    deleteGrid();
    let n = prompt('reset');
    createGrid(n);
});