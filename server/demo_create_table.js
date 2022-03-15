const { Client } = require('pg')
require('dotenv').config()
const tableName = 'items';

const createDB = async () => {
    try{
        const client = new Client({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        })
        await client.connect();
        console.log('dropping existing DB if needed')
        await client.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME};`)
        console.log('dropped DB if needed, creating DB')
        await client.query(`CREATE DATABASE ${process.env.DB_NAME};`)
        console.log('created DB')
        await client.end();
        await createTables();
        console.log('finished')
    } catch(e) {
        console.log('An error occured: ');
        console.log(e);
    } finally {
        process.exit(0);
    }
    
}

const createTables = async () => {
    const client = new Client ({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })
    await client.connect();
    console.log('connected to new DB');
    await client.query(`CREATE TABLE ${tableName}(id serial PRIMARY KEY, name VARCHAR(255) NOT NULL, description VARCHAR(100));`)
    console.log('created table in new DB');
    
}

createDB();