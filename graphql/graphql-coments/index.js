const { ApolloServer, gql, withFilter, } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { users, posts, comments } = require("./data");
const { nanoid } = require("nanoid");
const pubsub = require('./pubsub')

const typeDefs = gql`
    # USer
    type User{
        id: ID!
        fullName: String!
        age: Int!
        posts: [Post!]!
        comments: [Comment!]!
    }

    input CreateUserInput{
        fullName: String!
        age: Int!
    }

    input UpdateUserInput{
        fullName: String
        age: Int
    }

    # Post
    type Post{
        id: ID!
        title: String!
        user_id: ID!
        user: User!
        comments: [Comment!]!
    }

    input CreatePostInput{
        title: String!
        user_id: ID!
    }

    input UpdatePostInput{
        title: String
        user_id: ID
    }

    # Comment
    type Comment{
        id: ID!
        text: String!
        post_id: ID!
        user: User!
        post: Post!
    }

    input CreateCommentInput{
        text: String!
        post_id: ID!
        user_id: ID!
    }

    input UpdateCommentInput{
        text: String
        post_id: ID
        user_id: ID
    }

    type DeleteAllOutput{
        count: Int!
    }

    type Query{
        # User
        users: [User!]!
        user(id: ID!): User!

        # Post
        posts: [Post!]!
        post(id: ID!): Post!


        # Comment
        comments: [Comment!]!
        comment(id: ID!): Comment!
    }

    type Mutation{
        # User
        createUser(data: CreateUserInput!): User!
        updateUser(id: ID!, data: UpdateUserInput!): User!
        deleteUser(id: ID!): User!
        deletAllUsers: DeleteAllOutput!

        # Post
        createPost(data: CreatePostInput!): Post!
        updatePost(id: ID!, data: UpdatePostInput!): Post!
        deletePost(id: ID!): Post!
        deletAllPosts: DeleteAllOutput!

        # Comment
        createComment(data: CreateCommentInput): Comment!
        updateComment(id: ID!, data: UpdateCommentInput): Comment!
        deleteComment(id: ID!): Comment!
        deletAllComments: DeleteAllOutput!
    }

    
    type Subscription{
        userCreated: User!
        userUpdated: User!
        userDeleted: User!
        postCreated(user_id: ID ): Post!
        postUpdated: Post!
        postDeleted: Post!
        createComment(post_id: ID): Comments!
        updateComment: Comments!
        deleteComment: Comments!
    }
`;


const resolvers = {
    Subscription: {
        userCreated: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator('userCreated'),
        },
        userUpdated: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator('userUpdated'),
        },
        userDeleted: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator('userDeleted'),
        },
        postCreated: {
            subscribe: withFilter(
                (parent, args, { pubsub }) => pubsub.asyncIterator('postCreated'),
                (payloads, variables) => (variables.user_id) ? payloads.postCreated.user_id === variables.user_id : true
            ),
        },
        postUpdated: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator('postUpdated'),
        },
        postDeleted: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator('postDeleted'),
        },
        createComment: {
            subscribe: withFilter(
                (parent, args, { pubsub }) => pubsub.asyncIterator('createComment'),
                (payloads, variables) => (variables.post_id) ? payloads.createComment.post_id === variables.post_id : true
            )
        },
        updateComment: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator('updateComment'),
        },
        deleteComment: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator('deleteComment'),
        },
    },
    Mutation: {
        // User
        createUser: (parent, { data }) => {
            const user = {
                id: nanoid(),
                ...data,
            };
            users.push(user);
            return user;
        },
        updateUser: (parent, { id, data }) => {
            const user_index = users.find((user) => user.id === id);
            if (!user_index) {
                throw new Error("User not found!");
            }

            const updated_user = (users[user_index] = {
                ...users[user_index],
                ...data,
            });
            return updated_user;
        },
        deleteUser: (parent, { id }) => {
            const user_index = users.findIndex((user) => user.id === id);
            if (!user_index) {
                throw new Error("User not found!");
            }
            const deleted_user = users[user_index];
            users.splice(user_index, 1);
            return deleted_user;

        },
        deletAllUsers: () => {
            const length = users.length;
            users.splice(0, length);
            return {
                count: length,
            };
        },

        // Post
        createPost: (parent, { data }) => {
            const post = {
                id: nanoid(),
                ...data
            };
            posts.push(post);
            return post;
        },
        updatePost: (parent, { id, data }) => {
            const post_index = posts.find((post) => post.id === id);
            if (!post_index) {
                throw new Error("Post not found!");
            }

            const updated_post = (posts[post_index] = {
                ...posts[post_index],
                ...data,
            });
            return updated_post;
        },
        deletePost: (parent, { id }) => {
            const post_index = posts.findIndex((post) => post.id === id);
            if (!post_index) {
                throw new Error("User not found!");
            }
            const deleted_post = posts[post_index];
            posts.splice(post_index, 1);
            return deleted_post;

        },
        deletAllPosts: () => {
            const length = posts.length;
            posts.splice(0, length);
            return {
                count: length,
            };
        },

        // Comment
        createComment: (parent, { data }) => {
            const comment = {
                id: nanoid(),
                ...data,
            };
            comments.push(comment);
            return comment;
        },
        updateComment: (parent, { id, data }) => {
            const comment_index = comments.find((comment) => comment.id === id);
            if (!comment_index) {
                throw new Error("Comment not found!");
            }

            const updated_comment = (comments[comment_index] = {
                ...comments[comment_index],
                ...data,
            });
            return updated_comment;
        },
        deleteComment: (parent, { id }) => {
            const comment_index = comments.findIndex((comment) => comment.id === id);
            if (!comment_index) {
                throw new Error("Comment not found!");
            }
            const deleted_comment = comments[comment_index];
            comments.splice(comment_index, 1);
            return deleted_comment;
        },
        deletAllComments: () => {
            const length = comments.length;
            comments.splice(0, length);
            return {
                count: length,
            };
        }
    }
    Query: {
        //user
        users: () => users,
        user: (parent, args) => {
            const user = users.find((user) => user.id === args.id);
            if (!user) {
                return new Error('User not found');
            }
            return user;
        },

        //posts
        posts: () => posts,
        post: (parent, args) => posts.find((post) => post.id === args.id),

        //comments
        comments: () => comments,
        comment: (parent, args) => comments.find((comment) => comment.id === args.id)
    },

    User: {
        posts: (parent) => posts.filter((post) => post.user_id === parent.id),
        comments: (parent) => comments.filter((comment) => comment.user_id === parent.id)
    },

    Post: {
        user: (parent) => users.find((user) => user.id === parent.user_id),
        comments: (parent) => comments.filter((comment) => comment.post_id === parent.id)
    },

    Comment: {
        user: (parent) => users.find((user) => user.id === parent.user_id),
        post: (parent) => posts.find((post) => post.id === parent.post_id)
    },

}


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { pubsub },
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
            // options
        })
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
});
