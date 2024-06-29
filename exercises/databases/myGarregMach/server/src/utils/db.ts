import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { readFileSync } from "fs";

const { 
    apiKey, 
    authDomain,
    projectId, 
    storageBucket, 
    messagingSenderId, 
    appId 
} = JSON.parse(readFileSync('./fireBaseConfig.json', 'utf-8'));

const app : FirebaseApp = initializeApp({
    apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId
});

const firestore : Firestore = getFirestore(app);

export function getDb() : Firestore {
    return firestore;
}