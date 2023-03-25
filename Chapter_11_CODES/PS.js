// Problem 1
class complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }

    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
    get real() {
        return this._real
    }

    get imaginary() {
        return this._imaginary
    }

    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }

    set real(newReal) {
        this._real = newReal
    }
}

let a = new complex(2, 3)
let b = new complex(4, 5)
a.add(b)
console.log(a.real + "  " + a.imaginary)
