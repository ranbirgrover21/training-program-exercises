import { HttpError } from "http-errors";
import { getDb } from "../utils/db";
import { collection, getDocs } from "firebase/firestore";

interface Notice {
  title: string;
  body: string;
}

interface NoticeReturn {
  notices: Notice[]
}

export async function notices() : Promise<NoticeReturn> {
  /**
   * Exercise 3 - A basic database lookup 
   * 
   * This function is currently a stub. Your job
   * is to complete it such that it reads all the notices 
   * from the 'notices' collection inside the database. 
   * 
   * You can reference db/dbData.json for the structure of
   * what the notices look like, but for quick reference, all
   * notices will be of the form
   * 
   * {
   *    title: body,
   *    body: string
   * }.
   * 
   * You will need to make use of:
   * 
   * - getDb(), a pre-written helper function that loads the necessary database credentials to create a 
   * Firestore instance to interact with the database.
   * - collection(), a firestore function that returns a CollectionRef, (which also acts as a query) 
   * - getDocs(), a Promise-based function that takes in a query and fetches all documents that match it in a QuerySnapshot.
   * 
   * Make sure to await your Promise-based functions!!! (like getDocs) :D
   * 
   * It is recommended you also read the official documentation to get an idea of how these objects interact,
   * you can find the official docs here:
   * 
   * https://firebase.google.com/docs/reference/js/firestore_.md#@firebase/firestore
   * 
   * Or take a look at funcs/staffDetails.ts for a bit of guidance on what to do. (Your final code should be similar,
   * but not exactly the same.)
   * 
   * Don't worry about re-running the server - everytime you save this file,
   * nodemon should restart it for you with your new changes :) 
   * 
   * However, you will need to refresh the frontend! 
   * 
   */

    return {
      notices: []
    };
}