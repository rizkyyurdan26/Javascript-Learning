const fullname = new Function(
    'firstname',
    'lastname',
    'return(firstname+ " " +lastname)'
)

console.log(fullname('Andi', 'Wijaya'))