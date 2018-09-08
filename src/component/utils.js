const dic = { agree: "A favor", no: "Neutro", against: "En contra" };

export function toLabel(label){
    return dic[label];
}


export function colors(label){
            //a favor, neutro, en contra
    return ['green', 'red', 'gray'];
}