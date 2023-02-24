const { db } = require('./db')
const app = require('./app')
const port = process.env.PORT || 3000

db.sync()
console.log('db synced')
app.listen(port, () => console.log(`listening on port ${port}`));