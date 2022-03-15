const { Pool } = require('pg')

let hasConnected = false;
let pool = null;
let promises = [];
const createDBPool = async () => {
    try {
        const db_pool = new Pool ({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        pool = db_pool;
        hasConnected = true;
        promises.forEach((promise) => {
            promise.promiseResolve();
        })
    } catch (e) {
        console.log('error creating DB pool');
        console.log(e);
        promises.forEach((promise) => {
            promise.reject();
        });
    }
    return;
}
createDBPool();
module.exports.getDBPool = async () => {
    if (hasConnected) {
        return pool;
    } else {
        let promiseResolve, promiseReject;
        const promise = new Promise((resolve, reject)=>{
            promiseResolve = resolve;
            promiseReject = reject;
        })
        promises.push(
            {promiseResolve, promiseReject}
        )
        await promise;
    }
}