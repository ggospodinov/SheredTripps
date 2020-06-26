const { body } = require('express-validator');


module.exports = [
    body('directions')
        .custom((value) => {
            if(!value.includes(' - ')){
                throw new Error('The directions input field should include " - " between the start and end point')
            }

            return true
        }),
    body('dateTime')
    .custom((value) => {
        if(!value.includes(' - ')){
            throw new Error('The dateTime input field should include " - " between the start and end point')
        }
        return true
    }),

    body('seats', 'Seats must be positive number!')
    .isInt({min: 1}),
    
    body('description', 'Description should be minimum 10 characters long!')
    .isLength({ min: 10 })
]