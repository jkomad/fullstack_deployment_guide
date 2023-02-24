const { db, Fruit, Vegetable } = require('./server/db')
const { green, red } = require('chalk')

const fruits = [
    {
        name: 'mango',
        color: 'yellow',
        flavor: 'sweet'
    }
]
const vegetables = [
    {
        name: 'broccoli',
        color: 'green',
        flavor: 'bland'
    }
]

const seed = async () => {
    try {
        await db.sync({force: true})
        await Promise.all(fruits.map(fruit => {
            return Fruit.create(fruit)
        }))
        await Promise.all(vegetables.map(vegetable => {
            return Vegetable.create(vegetable)
        }))

        console.log(green('Seeding was successful!'))
        db.close()
    } catch (err) {
        console.error(red('Something went wrong!'))
        console.error(err.message)
        db.close()
    }
}

seed()