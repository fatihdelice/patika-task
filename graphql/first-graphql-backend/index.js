const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const { books, authors } = require("./data");

const typeDefs = gql`
    type Author {
        id: ID!
        name: String!
        surname: String
        age: Int
        books(filter: String): [Book!]
    }

    type Book {
        id: ID!
        title: String!
        author: Author!
        author_id: String!
        score: Float
        isPublished: Boolean
    }
    type Query {
        books: [Book!]
        book(id: ID!): Book!

        authors: [Author!]
        author(id: ID!): Author!
    }
`;

const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => {
            return books.find((book) => book.id === args.id);
        },

        authors: () => authors,
        author: (parent, args) => {
            return authors.find((author) => author.id === args.id);
        }
    },
    Book: {
        author: (parent) => {
            return authors.find((author) => author.id === parent.author_id);
        },
    },
    Author: {
        books: (parent, args) => {
            let filtered = books.filter((book) => book.author_id === parent.id);

            if (args.filter) {                
                filtered = filtered.filter((book) => book.title.toLowerCase().startsWith(args.filter.toLowerCase()));
            }

            return filtered;
        },
    },
}

//;const typeDefs = gql`
//     type User {
//         name: String!
//         surname: String!
//         age: Int!
//     }
//     type Query {
//         user: User
//     }
// `;

// const resolvers = {
//     Query: {
//         user: () => ({ name: 'Fatih', surname: 'Delice', age: 23 }),
//     },
// };

// const typeDefs = gql`
//     type Book {
//         id: ID!
//         title: String!
//         author: String!
//         score: Float
//         isPublished: Boolean
//     }

//     type Query {
//         book: [Book!]!
//     }   
// `;

// const resolvers = {
//     Query: {
//         book: () => {
//             return [
//                 {
//                     id: 1,
//                     title: 'Yabancı',
//                     author: 'Albert Camus',
//                     score: 9.5,
//                     isPublished: true,
//                 },
//                 {
//                     id: 2,
//                     title: 'Deneme Kitap',
//                     author: 'Deneme Yazar',
//                     score: 8.5,
//                     isPublished: false,
//                 }
//             ];
//         },
//     },
// };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
            // options
        })
    ],
});

server.listen().then(({ url }) => console.log(`Apollo server is up at ${url}`));