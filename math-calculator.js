// math-calculator.js

/**
 * A simple calculator for mathematical derivatives and integrals.
 * Provides step-by-step solutions for given functions.
 */

class MathCalculator {
    // Function to calculate the derivative of a given function
    static derivative(func, variable) {
        const h = 1e-10; // A small number for approximation
        return (func(variable + h) - func(variable - h)) / (2 * h);
    }

    // Function to calculate the integral of a given function using the trapezoidal rule
    static integral(func, a, b, steps = 1000) {
        const stepSize = (b - a) / steps;
        let integralValue = 0;
        for (let i = 0; i < steps; i++) {
            const x1 = a + i * stepSize;
            const x2 = a + (i + 1) * stepSize;
            integralValue += (func(x1) + func(x2)) * stepSize / 2;
        }
        return integralValue;
    }

    // Example usage of derivative and integral methods
    static example() {
        const func = x => Math.pow(x, 2); // Example function: f(x) = x^2
        const point = 2;
        console.log(`Derivative of f at x=${point}:`, this.derivative(func, point));
        console.log(`Integral of f from 0 to 2:`, this.integral(func, 0, 2));
    }
}

// Run the example
MathCalculator.example();