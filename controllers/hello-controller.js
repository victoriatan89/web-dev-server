/* In the context of HTTP servers and Web APIs, controllers are functions, classes, or modules
   whose only role is to handle HTTP requests and participate in a client/server infrastructure. */
const helloController = (app) => {
    /* declares an HTTP handler by mapping the HTTP endpoint '/hello'
       to a function that responds with a simple string */
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
}
export default helloController;