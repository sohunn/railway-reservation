import { connect } from "mongoose";
import { DB_URI } from '$env/static/private'

connect(DB_URI)
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log('Unable to connect to Mongo DB', err))
