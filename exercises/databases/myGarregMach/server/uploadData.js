import { readFileSync } from 'fs';
import { initializeApp } from 'firebase/app';

const dbData = readFileSync('./dbData.json', 'utf-8');
const jsonData = JSON.parse(dbData);

const apiConfig = JSON.parse(readFileSync('./fireBaseConfig.json', 'utf-8'));



console.log(apiConfig.apiKey);

