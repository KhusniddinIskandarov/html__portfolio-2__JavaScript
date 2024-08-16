let button1 = document.querySelector(' .button1');
let button2 = document.querySelector(' .button2');
let inputExperience = document.querySelector(' .inputExperience');
let a = 1;

button2.addEventListener('click', () => {
    a++;
    console.log(a);
    inputExperience.value = a;
});

button1.addEventListener('click', () => {
    if (a > 0) {
        a--;
        console.log(a);
        inputExperience.value = a;
    }
});



