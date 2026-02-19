const button = document.getElementById('clickBtn');
const image = document.getElementById('myImage');
const mouseoverDiv = document.getElementById('mouseoverImage');
const images = [
    { src: 'Baby.jpg', age: '1 years old' },
    { src: 'Toddler.jpg', age: '4 years old' },
    { src: 'Kid.jpg', age: '7 years old' },
    { src: 'Pre-teen.jpg', age: '10 years old' },
    { src: 'High School.jpg', age: '17 years old' }];
let currIndex = 0;

image.src = images[currIndex].src;

button.addEventListener('click', function() {
    currIndex = (currIndex + 1) % images.length;
    image.src = images[currIndex].src;
    customFunction();
});

mouseoverDiv.addEventListener('mouseover', () => {
  alert(`I was ${images[currIndex].age} in this picture`);
});

function customFunction() {
    console.log('Changed the picture');
}
