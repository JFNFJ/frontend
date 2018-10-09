import { apiRoute } from "config/api";
import { handleErrors } from "services/commons";

const THREADS = 'threads';

export function Topic(id, term){
    return { id: id, term: term, start: Date.now() };
}

export function getTrendingTopics() {
    return ["Brexit", "FMI", "Aborto"]
}

function fake_db(){
    return JSON.parse(localStorage.getItem(THREADS)) || [];
}


function nextTopicId(){
    return Math.max(fake_db().map(topic => topic.id)) + 1;
}

function fake_getTopics() {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(fake_db()), 800);
    });
}

function real_getTopics() {
    //TODO
}

function fake_getTopic(id) {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(fake_db().find(t => t.id === id)), 800);
    });
}

function real_getTopic(id) {
    //TODO
}


function fake_addTopic(newTopic) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const id = nextTopicId();
            const db = fake_db();
            db.push(Topic(id, newTopic));

            localStorage.setItem(THREADS, JSON.stringify(db));
            resolve({ topicId: id });
        }, 800)
    });
}

function real_addTopic(newTopic) {
    return fetch(apiRoute + 'topics', {
            method: 'POST',
            headers: {
                token: localStorage.getItem('token')
            },
            body: newTopic
        }).then(handleErrors)
          .then(response => response.json())
}


export function addTopic() {
    if (process.env.REACT_APP_USE_MOCK_API === 'true') {
        return fake_addTopic(...arguments);
    } else {
        return real_addTopic(...arguments);
    }
}

export function getTopics() {
    if (process.env.REACT_APP_USE_MOCK_API === 'true') {
        return fake_getTopics(...arguments);
    } else {
        return real_getTopics(...arguments);
    }
}

export function getTopic() {
    if (process.env.REACT_APP_USE_MOCK_API === 'true') {
        return fake_getTopic(...arguments);
    } else {
        return real_getTopic(...arguments);
    }
}