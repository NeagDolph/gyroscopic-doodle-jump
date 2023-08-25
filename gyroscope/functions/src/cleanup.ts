import {firestore} from "firebase-admin";
import Firestore = firestore.Firestore;
import CollectionReference = firestore.CollectionReference;
import DocumentData = firestore.DocumentData;
import {EventContext} from "firebase-functions";
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.cleanupOldSessions = functions.pubsub.schedule('every 24 hours').onRun(async (context: EventContext) => {
    const firestore: Firestore = admin.firestore();
    const sessionsRef: CollectionReference<DocumentData> = firestore.collection('sessions');

    // 4 hours in milliseconds
    const FOUR_HOURS_MS = 4 * 60 * 60 * 1000;

    // Get current time
    const currentTime = new Date().getTime();

    // Get the time 4 hours ago
    const timeThreshold = currentTime - FOUR_HOURS_MS;

    // Query for old sessions
    const oldSessionsQuery = sessionsRef.where('createdAt', '<', timeThreshold);

    const querySnapshot = await oldSessionsQuery.get();

    if (querySnapshot.empty) {
        console.log('No old sessions to delete.');
        return null;
    }

    // Batch delete old sessions
    const batch = firestore.batch();
    querySnapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`Deleted ${querySnapshot.size} old sessions.`);

    return null;
});
