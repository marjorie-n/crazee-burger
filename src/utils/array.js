export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array));
}
//test for OrderPage functions
// const fruits = [
//     {
//         name: "apple",
//     },
//     {
//         name: "banana",
//     }
// ]
// const fruitsShallowCopy = [...fruits];
// const fruitsDeepCopy = deepClone(fruits);

// fruitsShallowCopy[1].name = "orange";
// fruitsDeepCopy[1].name = "orange";

// console.log("fruits:",fruits);
// console.log("fruitsDeepCopy:",fruitsDeepCopy);
// console.log("fruitsShallowCopy:",fruitsShallowCopy);
