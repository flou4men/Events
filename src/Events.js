export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    for (const text of arr) {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });

        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let clicked = false;

    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent += ' ' + link.href;
            clicked = true;
        }
    });

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';

    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });

    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
