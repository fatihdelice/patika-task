import { nanoid } from "nanoid";

const Mutation ={
    // User
    createUser: (parent, { data }) => {
        const user = { id: nanoid(), ...data };
        users.push(user);
        return user;
    },
    updateUser: (parent, { id, data }) => {
        const user_index = users.findIndex((user) => user.id === id);
        if (user_index === -1) {
            throw new Error("User not found.");
        }
        const updated_user = (users[user_index] = {
            ...users[user_index], // önceki tutulan veriler
            ...data, // data altındaki güncellenen veriler
        });

        return updated_user;
    },
    deleteUser: (parent, { id }) => {
        const user_index = users.findIndex((user) => user.id === id);
        if (user_index === -1) {
            throw new Error("User not found");
        }
        const deleted_user = users[user_index];
        users.splice(user_index, 1);
        return deleted_user;
    },
    deleteAllUsers: (parent, args) => {
        const length = users.length;
        users.splice(0, length)
        return {
            count: length,
        };
    },
    // Post
    createPost: (parent, { data }) => {
        const post = { id: nanoid(), ...data };
        posts.push(post);
        return post;
    },
    updatePost: (parent, { id, data }) => {
        const post_index = posts.findIndex((post) => post.id === id);
        if (post_index === -1) {
            throw new Error("Post not found.");
        }
        const updated_post = (posts[post_index] = {
            ...posts[post_index], // önceki tutulan veriler
            ...data, // data altındaki güncellenen veriler
        });

        return updated_post;
    },
    deletePost: (parent, { id }) => {
        const post_index = posts.findIndex((post) => post.id === id);
        if (post_index === -1) {
            throw new Error("User not found");
        }
        const deleted_post = posts[post_index];
        users.splice(post_index, 1);
        return deleted_post;
    },
    deleteAllPosts: (parent, args) => {
        const length = posts.length;
        posts.splice(0, length)
        return {
            count: length,
        };
    },
    // Comment
    createComment: (parent, { data }) => {
        const comment = { id: nanoid(), ...data };
        comment.push(comment);
        return comment;
    },
    updateComment: (parent, { id, data }) => {
        const comment_index = comments.findIndex((comment) => comment.id === id);
        if (comment_index === -1) {
            throw new Error("Comment not found");
        }

        const updated_comment = (comments[comment_index] = {
            ...comments[comment_index],
            ...data,
        });
        return updated_comment;
    },
    deleteComment: (parent, { id }) => {
        const comment_index = comments.findIndex((comment) => comment.id === id);
        if (comment_index === -1) {
            throw new Error("Comment not found");
        }
        const deleted_comment = comments[comment_index];
        comments.splice(comment_index, 1);
        return deleted_comment;
    },
    deleteAllComments: (parent, args) => {
        const length = comments.length;
        comments.splice(0, length)
        return {
            count: length,
        };
    },
    
}

module.exports = Mutation;