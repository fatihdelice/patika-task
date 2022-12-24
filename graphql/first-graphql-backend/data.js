const authors = [
    {
        id: '1',
        name: "Albert",
        surname: "Camus",
        age: 50,
    },
    {
        id: '2',
        name: "Fatih",
        surname: "Delice",
        age: 23,
    },
];

const books = [
    {
        id: '1',
        title: 'Yabancı',
        author_id: '1',
        score: 9.5,
        isPublished: true,
    },
    {
        id: '2',
        title: 'Yabancı 2',
        author_id: '1',
        score: 7,
        isPublished: false,
    },
    {
        id: '3',
        title: 'The Stranger',
        author_id: '2',
        score: 7.5,
        isPublished: true,
    },
];

module.exports = { books, authors };