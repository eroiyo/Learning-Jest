class Calculator{
    constructor(a,b){
        this.first = a;
        this.second = b;
    } 

    sum(){
        return this.first+this.second;
    }
    multiply(){
        return this.first*this.second;
    }
    divide(){
        return this.first/this.second;
    }
    rest(){
        return this.first-this.second;
    }
}

module.exports = Calculator;