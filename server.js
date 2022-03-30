import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

// creates an instance of the express library and assigns it to local variable app.
const app = express();

// use cors library to configure servers to allow interoperability scripts from another domain.
app.use(cors());

/* parse HTTP request body into a JSON object,
   add to the request object in a new body property
   that later HTTP handlers can access. */
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
})
helloController(app);
userController(app);
tuitsController(app);

/* use PORT environment variable if available on Heroku,
   or uses 4000 otherwise when running locally. */
app.listen(process.env.PORT || 4000);