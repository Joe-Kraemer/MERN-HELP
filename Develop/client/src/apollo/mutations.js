// //mutations.js:

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

// ADD_USER will execute the addUser mutation.

// SAVE_BOOK will execute the saveBook mutation.

// REMOVE_BOOK will execute the removeBook mutation.

import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation loginUser ($email: String!, $password: String!) {
    loginUser (email: $email, password: $password) {
token 
user {
_id
username
}
#email
#password
    }
  }
`
export const ADD_USER = gql`
mutation addUser ($username:String!, $email:String!, $password:String!){
    addUser (username: $username, email: $email, password: $password){
token
user {
#_id
username}
#username
email
password
#savedBooks
#bookCount
    }
}
`
export const SAVE_BOOK = gql`
mutation SaveBook ($description: String!, $title: String!, $id: String!, $image: String!, $link: String!, $authors: [String]!){
    saveBook (description: $description, title: $title, id: $id, image: $image, link: $link, authors: $authors){
    title
    authors
    description
    bookId
    image
    link
        
    }
}
`
export const REMOVE_BOOK = gql`
mutation removeBook ($bookId: String!) {
    removeBook (bookId: $bookId){
bookId
    }
}
`