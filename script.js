const body = document.querySelector('body')
let wrapper = document.querySelector('.wrapper')

createGrid(2);

function createGrid(nmbOfRows) {
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

    
    
    wrapper.style.gridTemplateColumns = `repeat(${nmbOfRows}, 1fr)`
    wrapper.style.gridTemplateRows = `repeat(${nmbOfRows}, 1fr)`
    
    /*
    wrapper.style.cssText = 'grid-template-columns: repeat(10, 1fr);'
    wrapper.style.cssText = 'grid-template-rows: repeat(10, 1fr);'
    */
};

/*
for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add(`${i}`);
    div.innerHTML = `${i}`;
    wrapper.appendChild(div);
};

const divs = document.querySelectorAll('div')
divs.forEach(div => {
    if (div.className != 'wrapper') {
        div.style.border = '2px solid black';
        div.style.backgroundColor = 'burlywood'
    }
})
*/



const button = document.querySelector('.btn')
button.addEventListener('click', function() {
    prompt('reset');
    createGrid();
});