import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";


import { mongodbAdapter } from "better-auth/adapters/mongodb";
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('WanderLust');
import dns from 'node:dns/promises'
import { jwt } from "better-auth/plugins";
dns.setServers(['1.1.1.1', '8.8.8.8'])


export const auth = betterAuth({
    //...
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    session:{
        cookieCache:{
            enabled: true,
            strategy: 'jwt',
            // sesstion time
            maxAge: 7 * 24 * 60 * 60
        }
    },
    plugins:[
        jwt()
    ]
});