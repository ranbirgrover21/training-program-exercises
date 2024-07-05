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
    const db = getDb();
    const querySnapshot = await getDocs(collection(db, 'notices'));
    const queryData : Notice[] = [];

    querySnapshot.forEach((doc) => {
        queryData.push(doc.data() as Notice);
    });

    return {
        notices: queryData
    };
}