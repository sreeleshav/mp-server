//importing json server library
const jsonServer=require('json-server')

//creating server instance
const mpServer=jsonServer.create()

//getting default middlewares
const middlewares=jsonServer.defaults()

//setting routes of resources
const routes=jsonServer.router('db.json')

//configuring.server
mpServer.use(middlewares)
mpServer.use(routes)

const PORT=3000 || process.env.PORT

mpServer.listen(PORT,()=>{
    console.log('server running at:'+PORT)
})
