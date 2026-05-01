let kata = 'katak'

let rev = kata.split('').reverse().join('')

if (kata === rev){
    console.log('palindrom')
} else {
    console.log('Not Palindrom')
}