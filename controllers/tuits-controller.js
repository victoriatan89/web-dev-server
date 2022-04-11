import * as tuitsDao from "../tuits/tuits-dao.js"
//import posts from "./tuits.js";
//let tuits = posts;

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    //newTuit._id = (new Date()).getTime()+'';
    //newTuit.dislikes = 0;
    //tuits.push(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params['tid'];
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    //tuits = tuits.filter(tuit => tuit._id !== tuitId);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const updatedTuit = req.body;
    const tuitIdToUpdate = req.params['tid'];
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updatedTuit);
    //tuits = tuits.map(tuit => tuit._id === tuitId ? updatedTuit : tuit);
    res.send(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}