// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//

// And add it to the DOM in the .header-container component

    // Elements
function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');
    const today = new date();

    spanDate.textContent = today;
    h1.textContent = 'Lambda Times';
    spanTemp.textContent = '98°';

    // styles
    header.classList.add('header');
    date.classList.add('date');
    date.classList.add('temp');

    //structure
    header.appendChild(spanDate);
    header.appendChild(h1);
    header.appendChild(spanTemp);

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(header());