const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const app = require('./app');
const Tour = require('./../../models/tourModel')
dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
   
    console.log('DB connections succesfull');
  });


  const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'))


  const importData  = async () => {
    try {
        await Tour.create(tours);
        console.log('Data Successfully loaded');
    } catch (err) {
        console.log(err)
    }
  }

  const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully deleted');
    } catch (err) {
        console.log(err);
    }
  };

  console.log(process.argv);