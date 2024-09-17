


export default function andConverter(details:Object){
    let andArray = [];
    for (const [key, value] of Object.entries(details)) {
        andArray.push({[key]:value});
    }
    return { $and: andArray };

}