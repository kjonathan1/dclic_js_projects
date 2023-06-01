let addButton = document.getElementById('add');
let form = document.getElementById('form');
let close = document.getElementById('close');
let posts = document.getElementById('posts');

addButton.addEventListener('click', () => {
    form.style.visibility = 'visible';
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let titre = document.getElementById("title").value;
    let file = document.getElementById("file").value;
    let description = document.getElementById("description").value;
    
    // capturer la date du post ,
    let date = new Date();
     let datefr=date.toLocaleDateString('fr-FR',{
        weekday:'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    // creer les element du DOM;
    let divElement = document.createElement('div');
    let SpanElement = document.createElement('span');
    let pElement = document.createElement('p');
    let imgElement = document.createElement('img');
    let h2Element = document.createElement('h2');

    h2Element.innerHTML = titre;
    SpanElement.innerHTML = datefr;
    pElement.innerHTML = description;
    imgElement.src = file;

    divElement.appendChild(h2Element);
    divElement.appendChild(SpanElement);
    divElement.appendChild(pElement);
    divElement.appendChild(imgElement);

    posts.appendChild(divElement);
    form.reset();
    form.style.visibility = 'hidden';
});

close.addEventListener('click', () => {
    form.style.visibility = 'hidden';
});


