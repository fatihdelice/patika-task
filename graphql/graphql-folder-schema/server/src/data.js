const users = [
    {
        id: "1",
        fullName: "Erkan Bal",
        age:40,
    },
    {
        id: "2",
        fullName: "Hamza Bob",
        age:25,
    },
    {
        id: "3",
        fullName: "Alex Kral",
        age:18,
    },
];

const posts = [
    {
        id: "1",
        title: "Erkan gönderisi",
        user_id: "1",
    },
    {
        id: "2",
        title: "Erkan diğer gönderisi",
        user_id: "1",
    },
    {
        id: "3",
        title: "Hamza gönderisi",
        user_id: "2",
    },
    {
        id: "4",
        title: "Alex gönderisi",
        user_id: "3",
    },
    {
        id: "3",
        title: "Alex gönderisi 2",
        user_id: "3",
    },
];

const comments = [
    {
        id: "1",
        text: "Lorem ipsum",
        post_id: "1",
        user_id: "1",
    },
    {
        id: "2",
        text: "ttt ipsum doler",
        post_id: "1",
        user_id: "2",
    },
    {
        id: "3",
        text: "ggg bar",
        post_id: "2",
        user_id: "2",
    },
    {
        id: "4",
        text: "foo bar baz",
        post_id: "1",
        user_id: "3",
    },
    {
        id: "5",
        text: "Lorem ipsum 6",
        post_id: "3",
        user_id: "2",
    },
    {
        id: "6",
        text: "Lorem ipsum 6",
        post_id: "4",
        user_id: "1",
    },
    {
        id: "7",
        text: "Lorem ipsum 7",
        post_id: "1",
        user_id: "4",
    },
];

module.exports = {
    users,
    posts,
    comments,
};