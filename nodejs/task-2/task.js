const posts = [
    { title: "Post 1", body: "Text 1" },
    { title: "Post 2", body: "Text 2" },
    { title: "Post 3", body: "Text 3" },
];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.title);
    });
};

listPosts();

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('BIR HATA OLUSTU');
    });

    return promise1;
};

async function showPosts() {
    try {
        await addPost({ title: "Post 4", author: "Text 4" });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();