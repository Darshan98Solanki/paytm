const zod = require('zod')

const userSchema = zod.object({
    username: zod.string({message:"username is required"}).email({message:"please enter a valid email"}),
    firstname:zod.string({message:"first name is required"}).min(3, {message:'firstname must be 3 char long'}),
    lastname:zod.string({message:"last name is required"}).min(3, {message:'last name must be 3 char long'}),
    password:zod.string({message:"password is required"}).min(8, {message:'password must be 8 char long'}),
})

const userSingIn = zod.object({
    username: zod.string({message:"username is required"}).email({message:"please enter a valid email"}),
    password:zod.string({message:"password is required"}).min(8, {message:'password must be 8 char long'})
})

const updateUserSChema = zod.object({
    firstname:zod.string({message:"first name is required"}).min(3, {message:'firstname must be 3 char long'}),
    lastname:zod.string({message:"last name is required"}).min(3, {message:'last name must be 3 char long'})
})

module.exports = {
    userSchema,
    userSingIn,
    updateUserSChema
}