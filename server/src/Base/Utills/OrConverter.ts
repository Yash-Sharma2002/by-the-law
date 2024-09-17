


export default function orConverter(details:Object){
    let andArray = [];
    for (const [key, value] of Object.entries(details)) {
        andArray.push({[key]:value});
    }
    return { $or: andArray };

}