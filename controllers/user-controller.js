import usersData from './users.js';
let users = usersData;

/* Common strategy --
   create a controller per type of data,
   group together CRUD operations under one controller. */
const userController = (app) => {
    /* declare HTTP request handlers by mapping the HTTP endpoints
       to functions that will later handle the requests. */
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

/* Retrieve the list of all users from the server */
const findAllUsers = (req, res) => {
    // retrieve type parameter from query
    const type = req.query.type;
    // if type parameter in query
    if (type) {
        // find all users of that type and respond
        res.json(findUsersByType(type));
        // return so it doesn't continue
        return;
    }
    // if type is omitted, retrieve all of them
    res.json(users);
}

const findUsersByType = (type) => {
    return users.filter(user => user.type === type);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(user => user._id === userId);
    res.json(user);
}

/* Read data posted to the server, embedded in the HTTP request body,
   interpret it as a new user and stores in the users array. */
const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser)
}

/* Delete a user by id */
const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(user => user._id !== userId);
    res.sendStatus(200);
}

/* Find the user that needs to be updated,
   discard the old version and keep the new one. */
const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(user => user._id === userId ? updatedUser : user);
    res.sendStatus(200);
}

export default userController;