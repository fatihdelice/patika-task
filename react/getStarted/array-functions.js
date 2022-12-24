// const users = ["Fatih", "Ahmet", "Mehmet"];

const users = [
    {
        name: "Fatih",
        age: 24,
    },
    {
        name: "Ahmet",
        age: 18,
    },
    {
        name: "Mehmet",
        age: 30,
    },
];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/


// push
// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);



// map

// users.map((item) => {
//     console.log(item.name);
// })


//find

// const result = users.find((item) => item.name === "Fatih" && item.age > 20);
// console.log(result);


//filter

// const filtered = users.filter(({name, age}) => age > 20);
// console.log(filtered);


//some

// const some = users.some((item)=> item.name === "Fatih");
// console.log(some);


//every

// const every = users.every((item) => item.age > 25);
// console.log(every);



//includes

// const meyveler = ["elma", "armut", "muz", "kivi"];

// const isIncluded = meyveler.includes("elma");
// console.log(isIncluded);