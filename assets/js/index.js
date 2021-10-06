const obj = {
    name: "Pikachu",
    type: "Electric"
}
const arr = [1,2,3,4,5];
const str = "String";
const bool = true;
const num = 5;

// undefined
// null <- obj.__proto__.__proto__.__proto__

//     Object.prototype <- obj.__proto__.__proto__
//         Object.prototype <- obj.__proto__

//     Object.prototype <- arr.__proto__.__proto__
//         Array.prototype <- arr.__proto__

//     Object.prototype <- str.__proto__.__proto__
//         String.prototype <- str.__proto__

//     Object.prototype <- bool.__proto__.__proto__
//         Boolean.prototype <- bool.__proto__

//     Object.prototype <- num.__proto__.__proto__
//         Number.prototype <- num.__proto__

// obj.prototype.__proto__ === obj.__proto__ === class.prototype
// class.__proto__ === function body or native code