// const { gql } = require('apollo-server-express');


const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: String!
    title: String!
    link: String!
    description: String!
    authors: [String]!
    image: String
  }

  type User {
    _id: String!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    books: [Book]
    me: User
    users: [User]
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): User!
    saveBook(description: String!, title: String!, id: String!, image: String!, link: String!, authors: [String]!): User!
    removeBook(bookId: String!): User!
  }
`;

module.exports = typeDefs;






// const typeDefs = gql`
// type Book {
// id: String!
// title: String!
// link: String!
// description: String!
// authors:[String]!
// image: String
// }
// type User {
// _id: String!
// username:String!
// email:String!
// savedBooks: Array
// bookCount: Int
// }
// type Auth {
//     token: String!
//     user: User
// }
// type Query {
// me: User
// }
// type Mutation {
// loginUser(email: String!, password: String!): Auth!
// addUser(username:String!, email:String!, password:String!, savedBooks:[Books], bookCount: String): User!
// saveBook(description: String!, title: String!, id: String!, image: String!, link: String!, authors: [String]!): User!
// removeBook(bookId: String!): User!
// }
// `;
// //parameters on line 20 need top match the model as well as the definitions on 10-13
// //16-17 may need "adjustments"
// module.exports = typeDefs











// // typeDefs.js: Define the necessary Query and Mutation types:

// // Query type:

// // me: Which returns a User type.
// // Mutation type:

// // login: Accepts an email and password as parameters; returns an Auth type.

// // addUser: Accepts a username, email, and password as parameters; returns an Auth type.

// // saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

// // removeBook: Accepts a book's bookId as a parameter; returns a User type.

// // User type:

// // _id

// // username

// // email

// // bookCount

// // savedBooks (This will be an array of the Book type.)

// // Book type:

// // bookId (Not the _id, but the book's id value returned from Google's Book API.)

// // authors (An array of strings, as there may be more than one author.)

// // description

// // title

// // image

// // link

// // Auth type:

// // token

// // user (References the User type.)

// // type Query {
// // books: [Book]
// // users:[User]
// // }
