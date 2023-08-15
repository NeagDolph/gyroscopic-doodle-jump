const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

import {Request, Response} from "express";

const app = express();
app.use(cors());
app.use(bodyParser.json());

interface Session {
    [key: string]: {
        offers: Object[];
        answers: Object[];
    }
}

const sessions: Session = {};

app.post('/create', (req: Request, res: Response) => {
    const sessionId = Math.random().toString(36).substr(2, 9);
    sessions[sessionId] = { offers: [], answers: [] };
    res.send({ sessionId });
});

app.post('/offer/:sessionId', (req: Request, res: Response) => {
    const { sessionId } = req.params;
    const offer = req.body;
    sessions[sessionId].offers.push(offer);
    res.send({ success: true });
});

app.post('/answer/:sessionId', (req: Request, res: Response) => {
    const { sessionId } = req.params;
    const answer = req.body;
    sessions[sessionId].answers.push(answer);
    res.send({ success: true });
});

app.get('/offer/:sessionId', (req: Request, res: Response) => {
    const { sessionId } = req.params;
    const offer = sessions[sessionId].offers.shift();
    res.send(offer || {});
});

app.get('/answer/:sessionId', (req: Request, res: Response) => {
    const { sessionId } = req.params;
    const answer = sessions[sessionId].answers.shift();
    res.send(answer || {});
});

exports.signaling = functions.https.onRequest(app);
