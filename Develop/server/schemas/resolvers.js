const User = require("../models/User");
const mongoose = require("mongoose");

const resolvers = {
    Query: {
        books: async () => {

            try {
                let result = await Book.find({});
                return result;
            } catch (error) {
                throw new Error(error.message);
            }

            return books
        },
        users: async () => {
            try {
                let result = await User.find({});
                return result;
            } catch (error) {
                throw new Error("whatever",error.message);
            }
        },
        me: async (_, { _id }, req) => {

        }


    },
    Mutation: {
        addUser: async (_, { firstName, lastName, address, unit }, req) => {
            // console.log(args);
            console.log(firstName, lastName, address, unit);
            try {
                let user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    unit: unit
                });
                let result = await user.save();
                return result;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        saveBook: async (_, { authors, description, title, bookId, image, link }, req) => {
            try {
                let book = new Book({
                    authors: authors,
                    description: description,
                    title: title,
                    bookId: bookId,
                    image: image,
                    link: link
                })
                let result = await book.save()
                return result
            } catch (err) {
                throw new Error(error.message);

            }
        },
        removeBook: async (_, { bookId }, req) => {
            Book.findOneAndDelete({ bookId })
            return true
        }
    }

}
module.exports = resolvers;

// module.exports = resolvers


//resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

