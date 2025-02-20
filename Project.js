// random number
const randomNumber= num => {
    return Math.floor(Math.random() * num.length)
    
}
//objective of 3 pieces of data 
const finalSentence = {
    name: ['Messi', 'Ronaldo', 'Neymar', 'Mbappe',],
    description: ['is the goat', 'is average', 'is terrible'],
    role: ['Player', 'Coach', 'Fan'],
}

let fullSentence = []
//A loop that goes through all parts of the sentence and adds random words
for (let items in finalSentence){
    let index = randomNumber(finalSentence[items])
    fullSentence.push(finalSentence[items][index])

    
}
// Combining words into one sentence with spaces between them
const fullPhrase = () => {
    console.log(fullSentence.join(" "))
}

fullPhrase()