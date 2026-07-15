// Form 
const form = document.querySelector("form");

// Buttons
const submitButton = document.querySelector('#submitButton');


// Forms Event
form.addEventListener('submit', e => {
    e.preventDefault();

    // Declare User Inputs
    const constA = document.querySelector('#a');
    const constB = document.querySelector('#b');
    const constC = document.querySelector('#c');

    // Get The Actual Constant Value
    const a = Number(constA.value)
    const b = Number(constB.value)
    const c = Number(constC.value)
    console.log("Submitted");

    // Discriminant Logic
    const d = Math.pow(b, 2) - (4 * a * c);



    // Case 1: D > 0 → two distinct real roots
    const twoRealRoots = (d) => {

        const root1 = (-b + Math.sqrt(d)) / (2 * a);
        const root2 = (-b - Math.sqrt(d)) / (2 * a);
        const roots = [root1, root2];
        return roots
    }

    // Case 2: D = 0 → one repeated root
    const repeatedRoots = (d) => {

        const root = (-b + Math.sqrt(d)) / (2 * a);
        return root
    }


    // Case 3: D < 0 → two distinct imaginary roots
    const twoImgRoots = (d) => {

        const root1 = (-b + Math.sqrt(d)) / (2 * a);
        const root2 = (-b - Math.sqrt(d)) / (2 * a);
        const roots = [root1, root2];
        return roots
    }

    // Solution output
    const solution = document.querySelector('#result');

    // Conditional for discriminant cases
    if (d > 0) {
        console.log(twoRealRoots(d));
        solution.textContent = 'x = ' + twoRealRoots(d)[0] + ', or x = ' + twoRealRoots(d)[1];
    }
    else if (d === 0) {
        console.log(repeatedRoots(d));
        solution.textContent = 'x = ' + repeatedRoots(d);
    }








})



