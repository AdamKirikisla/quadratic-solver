// Form 
const form = document.querySelector("form");

// Buttons
const submitButton = document.querySelector('#submitButton');
const clearButton = document.querySelector('#clearButton');

// Clear button
clearButton.addEventListener("click", () => {
    document.querySelector("#result").textContent = "Solution:";
    document.querySelector("#case").textContent = "Case";
    document.querySelector("#d").textContent = "Discriminant";
}
);


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

    // Declare information variables
    const solution = document.querySelector('#result');
    const discriminantText = document.querySelector('#d');
    const caseText = document.querySelector('#case');

    // a cannot be 0
    if (a === 0) {
        solution.textContent = "a cannot be 0 — this isn't a quadratic equation.";
        caseText.textContent = "";
        discriminantText.textContent = "";
        return; // stops the rest of the function from running
    }

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

        d *= -1;
        const vertext = (-b / (2 * a))
        const root = Math.abs(Math.sqrt(d) / (2 * a));
        const roots = [vertext + ' + ' + root + ' i ', vertext + ' - ' + root + ' i '];
        return roots
    }



    // Conditional for discriminant cases
    if (d > 0) {
        console.log(twoRealRoots(d));
        solution.textContent = 'x = ' + twoRealRoots(d)[0] + ', or x = ' + twoRealRoots(d)[1];
        caseText.textContent = "Case: Two real roots ";
        discriminantText.textContent = 'Discriminant = ' + d;
    }
    else if (d === 0) {
        console.log(repeatedRoots(d));
        solution.textContent = 'x = ' + repeatedRoots(d);
        caseText.textContent = "Case: Repeated root ";
        discriminantText.textContent = 'Discriminant = ' + d;
    }

    else if (d < 0) {
        console.log(twoImgRoots(d));
        solution.textContent = 'x = ' + twoImgRoots(d)[0] + ', or x = ' + twoImgRoots(d)[1];
        caseText.textContent = "Case: Complex roots ";
        discriminantText.textContent = 'Discriminant = ' + d;
    }








})



