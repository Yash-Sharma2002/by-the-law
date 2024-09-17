


function validateName(name: string,fieldName: string) {
    if (!name) return  fieldName+" is required";
    if(name.length < 3) return  fieldName+" must be at least 3 characters";
    if(name.length > 50) return  fieldName+" must be at most 50 characters";
    return "";
}


export default validateName;
