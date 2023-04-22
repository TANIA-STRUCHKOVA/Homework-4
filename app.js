// Задание №1

/*

let firstSentence = 'But you have no right to call me a murderer'
let secondSentence = 'Because they could stand that these were not monsters.'
let thirdSentence = 'And I want to remember it. I never want to forget it.'
console.log(firstSentence.slice(0, 30) + '...') 
console.log(secondSentence.slice(0, 30) + '...')
console.log(thirdSentence.slice(0, 30) + '...')
*/







//Задача №2

/*
let registerInvertion = 'WTF'
console.log(registerInvertion.toLocaleLowerCase())

let regInvert = 'Be my Valentine'
let resultInvert = ''
function invertLetter(stringInvert) {
    return stringInvert === stringInvert.toLocaleLowerCase() ?
        stringInvert.toUpperCase() : stringInvert.toLocaleLowerCase()
}
for (let stringInvert of regInvert) { resultInvert += invertLetter(stringInvert) }
console.log(resultInvert)

let redAlert = 'C&C Red Alert 3'
let resultAlert = ''
function invertAlert(stringInvert) {
    return stringInvert === stringInvert.toLocaleLowerCase() ?
        stringInvert.toUpperCase() : stringInvert.toLocaleLowerCase()
}
for (stringInvert of redAlert) { resultAlert += invertAlert(stringInvert) }
console.log(resultAlert)

*/





// Задача №3

/*
let stringArr = String (prompt('Введите пожалуйста текст!'))

let allSymbols = stringArr.split('').join('').length
console.log(allSymbols)

let symbolsWithout =stringArr.split('').join('').match(/[а-яА-я]/g).length
console.log(symbolsWithout)

let quantityWords = stringArr.match(/\S+/g) || []
console.log(quantityWords.length)

function getSentenceType(stringArr) {
    stringArr([stringArr.length])
    console.log(stringArr)
}
    let sentenceType= ''

    if (stringArr.endsWith('?')) {
      sentenceType = 'Вопросительное предложение'
    } else if (stringArr.endsWith('.')) {
        sentenceType = 'Утвердительное предложение'
      }
      else if (stringArr.endsWith('!')) {
        sentenceType = 'Восклицательное предложение'
      }
      else {console.log('null')}
    console.log(sentenceType)
  
*/






// Задача №4

/*
let firstSentence = 'Follow the white raBbiT'
let secondSentence = 'Call me Ishmael'
let thirdSentence = 'Repent before bloody rabbit punish you!'

let bannedWord = 'rabbit'

let localeLower = firstSentence.toLocaleLowerCase()
let str1 = localeLower.replace("rabbit", "******")
console.log(str1)

let str2 = secondSentence.replace("rabbit", "******")
console.log(str2)

let str3 = thirdSentence.replace("rabbit", "******")
console.log(str3)



*/

