const THREADS = 'threads';

export function Topic(term){
    return { term: term, start: Date.now() };
}

export function getTrendingTopics() {
    return ["Brexit", "FMI", "Aborto"]
}

export function getTopics() {
    return JSON.parse(localStorage.getItem(THREADS)) || []
}

export function addTopic(newTopic) {
    localStorage.setItem(THREADS, JSON.stringify(getTopics().concat(Topic(newTopic))));
}