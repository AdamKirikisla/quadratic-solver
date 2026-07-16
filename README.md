# Quadratic Formula Calculator

<img src="images/favicon.svg" width="100" align="right">
 
 
A simple web calculator that solves `ax² + bx + c = 0` — including complex roots when the discriminant is negative.
 
**Live demo:** https://adamkirikisla.github.io/quadratic-solver/
 
## Features
 
- Solves all three cases based on the discriminant:
  - Two real roots
  - One repeated root
  - Two complex conjugate roots (e.g. `x = -1 + 2i`)
- Handles decimal and negative inputs
- Built with plain HTML, CSS, and JavaScript — no frameworks or libraries
## How it works
 
The calculator computes the discriminant `D = b² - 4ac` and branches on its sign:
 
- `D > 0` → two distinct real roots
- `D = 0` → one repeated real root
- `D < 0` → two complex conjugate roots, computed as `-b/2a ± (√|D|/2a)i`
## Tech stack
 
- HTML5
- CSS3
- Vanilla JavaScript
