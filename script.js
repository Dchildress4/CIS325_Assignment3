const button = document.getElementById('myButton');
const image = document.getElementById('myImage');
const images = ['Baby.jpg', 'Toddler.jpg', 'Kid.jpg', 'Pre-teen.jpg', 'High School.jpg'];
let currIndex = 0;

image.src = images[currIndex];

button.addEventListener('click', function() {
    currIndex = (currIndex + 1) % images.length;
    image.src = images[currIndex];
    customFunction();

});

function customFunction() {
    console.log('Changed the picture');
}