// queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server.

import { gql } from '@apollo/client';

export const GET_ME = gql`
  # create a GraphQL query to be executed by Apollo Client
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

// export const QUERY_BOOKS = gql`
//   query getBooks {
//     thoughts {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//     }
//   }
// `;
// export const QUERY_BOOKS = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

// }
// export const getMovieQuery = gql`
//   query($imdbID: String!) {
//     movie(imdbID: $imdbID)
//     @rest(type: "Movie", path: "?i={args.imdbID}&apikey=<YOUR_API>") {
//       Error
//       imdbID
//       imdbRating
//       Title
//       Year
//       Runtime
//       Genre
//       Director
//       Country
//       Plot
//       Poster
//     }
//   }
// `;
// export const QUERY_BOOKS = gql`
//     query ($query: String!) {
//         book (query: $query) 
//         @rest(
//             type: "Search", 
//             path: "volumes?q={args.query}",
//             method: "GET",
//             bodyKey: "body"
//         ) {
//             _id,
//             firstName,
//             lastName,
//             dateOfBirth,
//             country,
//             skills
//         }
//     },
// `
//need help with parameters