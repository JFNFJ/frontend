import seedrandom from 'seedrandom';

import Paw from 'models/Paw';

const getRandomInt = (rnd, max) => Math.floor(rnd() * Math.floor(max))

const dataGen = (rnd, coef) => new Paw(
    getRandomInt(rnd, 10 * coef),
    getRandomInt(rnd, 10 * coef),
    getRandomInt(rnd, 1 * coef)
)

const dataSexGen = (rnd) => {
    return {
        "male": dataGen(rnd, 90)
        , "female": dataGen(rnd, 100)
        , "non-binary": dataGen(rnd, 5)
        , "brand": dataGen(rnd, 1)
    }
}


function dateFormat(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    return day + "/" + month;
}

const dataLocGen = (rnd) => {
    var ret = {};
    for (let index = 7; index !== 0; index--) {
        const day = dateFormat(new Date(new Date().setDate(new Date().getDate() - index)));
        ret[day] = dataSexGen(rnd);
    }
    return ret;
}

export function getDataFor(term){
    const rnd = seedrandom(term);
    return {
        "AR": dataLocGen(rnd),
        "BR": dataLocGen(rnd),
        "CL": dataLocGen(rnd),
        "BO": dataLocGen(rnd),
        "PY": dataLocGen(rnd),
        "UY": dataLocGen(rnd),
    }
}

