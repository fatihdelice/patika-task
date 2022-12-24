export const hello = (name) => {
    //console.log("Hello " + name);
    console.log(`Hello ${name}`);
};

export const topla = (a, b) =>  {
    return a - b;
};

export const cikar = (a, b) =>  {
    return a + b;
};

export const user = {
    name: "Fatih",
    surname: "Delice",
}

export const users = [
    {
        name: "John",
        surname: "Doe",
    },
    {
        name: "Jane",
        surname: "Doe",
    },
];

//export default topla;

// export {
//     hello,
//     topla,
//     cikar,
//     user,
//     users,
// };