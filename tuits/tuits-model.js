import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'

// create Mongoose model from the schema
const tuitsModel = mongoose.model('TuitModel', tuitsSchema);

export default tuitsModel;