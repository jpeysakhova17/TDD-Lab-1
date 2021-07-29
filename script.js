"use strict";


//create a function called word and then add "way" to the end of it regardless of what it starts with
const pl = (word) => {

    //if words with a vowel 
    const vowels = ["a", "o", "u", "i", "e"];
    if (vowels.includes(word[0])) {
        return word.toLowerCase() + "way";

        // return word + "way";
    } else {
        //if words start with consonant 
        //make a variable to hold the prefix of the word 
        let prefix = "";
        //using loop 
        for (let i=0; i< word.length; i++) {
            //if this is a consonant
            if(!vowels.includes(word[i])){
                prefix += word.toLowerCase()[i];
            } 
            //else were on a vowel
            else {
                return word.toLowerCase().slice(i) + prefix + "ay";
            }
        }
    }
}

//exporting to the test js file
module.exports = pl;

