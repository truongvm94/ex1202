
function titleCase(str : string) : string {
    
    let myString = str.toLowerCase().split(" ");
    // find first letter of words and replace in first index
    for (let i = 0; i < myString.length; i++){
        let first = myString[i][0].toUpperCase();
        myString[i] = myString[i].replace(myString[i][0], first);

    }
    return myString.join(" ");
}

titleCase("I'm a little tea pot");
