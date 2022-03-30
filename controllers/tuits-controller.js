import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const updatedTuit = req.body;
    const tuitId = req.params['tid'];
    tuits = tuits.map(tuit => tuit._id === tuitId ? updatedTuit : tuit);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitId = req.params['tid'];
    tuits = tuits.filter(tuit => tuit._id !== tuitId);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}