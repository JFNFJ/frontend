import Paw from 'models/Paw';

const concat = (x, y) =>
    x.concat(y)

const flatMap = (xs, f) =>
    xs.map(f).reduce(concat, [])

const reduce = (paws) => paws.reduce((acc, paw) => paw.add(acc), Paw.seed())


export function filters(data) {
    return {
        countries: Object.keys(data).concat("all"),
        days: Object.keys(data.AR).concat("all"),
        genres: Object.keys(data.AR[Object.keys(data.AR)[0]]).concat("all")
    }
}

export function getData(data, filter) {
    var country, day, genre;

    switch (filter.country) {
        case "all":
            country = Object.values
            break;
        default:
            country = (x) => [x[filter.country]];
    }

    switch (filter.day) {
        case "all":
            day = Object.values
            break;
        default:
            day = (x) => [x[filter.day]];
    }

    switch (filter.genre) {
        case "all":
            genre = Object.values
            break;
        default:
            genre = (x) => [x[filter.genre]];
    }

    return reduce(
        flatMap(flatMap(country(data), day), genre)
    );
}

export function getMapData(data, filter) {
    return Object.keys(data).map((key) => {
        const value = getData(data, { ...filter, country: key });
        return { k: key, v: value }
    });
}

export function getDateData(data, filter) {
    return Object.keys(data.AR).map((key) => {
        const value = getData(data, { ...filter, day: key });
        return { k: key, v: value }
    });
}
