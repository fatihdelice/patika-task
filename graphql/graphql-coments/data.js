const users = [
    {
        id: '1',
        fullName: 'Fatih Delice',
        age: 23,
    },
    {
        id: '2',
        fullName: 'John Doe',
        age: 25,
    },
];

const posts = [
    {
        id: '1',
        title: "Fatih'in gönderisi",
        user_id: '1',
    },
    {
        id: '2',
        title: "Fatih'in diğer gönderisi",
        user_id: '1',
    },
    {
        id: '3',
        title: "John'un gönderisi",
        user_id: '2',
    },
];

const comments = [
    {
        id: '1',
        text: 'Bu Johna ait bir yorum',
        post_id: '1',
        user_id: '2',
    },
    {
        id: '2',
        text: 'Bu da Fatihe ait bir yorum',
        post_id: '1',
        user_id: '1',
    },
    {
        id: '3',
        text: 'Lorem ipsum 3',
        post_id: '2',
        user_id: '2',
    },
    {
        id: '4',
        text: 'Lorem ipsum 4',
        post_id: '3',
        user_id: '1',
    },
];

module.exports = {
    users,
    posts,
    comments,
};