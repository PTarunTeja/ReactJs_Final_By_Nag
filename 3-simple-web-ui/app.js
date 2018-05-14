

// using DOM-API

let alertBox = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');
showBtn.addEventListener('click', (e) => {
    alertBox.style.display = ''
});
hideBtn.addEventListener('click', (e) => {
    alertBox.style.display = 'none'
});


// Timer API


let imageEle = document.querySelector('#pov');
let images = [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/4.jpeg',
    'images/5.jpeg'
];

document.querySelector('#startBtn')
    .addEventListener('click', () => {

        let idx = 0;
        let interval = setInterval(() => {
            let imagePath = images[idx];
            imageEle.src = imagePath;
            idx++;
            if (idx === images.length) idx = 0
        }, 1000);

        document.querySelector('#stopBtn')
            .addEventListener('click', () => {
                clearInterval(interval);
            });


    });



// XHR / Fetch API
document.querySelector('#loadUsersBtn')
    .addEventListener('click', () => {
        let promise = fetch('https://jsonplaceholder.typicode.com/users')
        promise
            .then(response => response.json())
            .then(users => {
                document.querySelector('.jumbotron')
                    .innerText = JSON.stringify(users);
            });
    })


