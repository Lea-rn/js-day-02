///// oprators > ;  <  ; >= ; <=  (return boolean ... )


// let now = 2025 ; 

// let maxAge = 1993 ; 
// let peterAge = 1992 
// let xAge = 1992 ; 

// const age1 = now - maxAge ; 
// const age2 = now - peterAge ;
// const age3 = now - xAge

// console.log("max:" , age1) ; 
// console.log("peter : " , age2) ;


// console.log(age2>=age3 ) ; 


///// concatination :::   (before es6)






// let firstName = "jhon" ; 
// let lastName = "breed" ; 
// let now = 2025 ; 
// let bearthYear = 1990 ; 
// let job = "full stack web developper" 


// let information = "i'm" +" " +  firstName+ " " + lastName + " " +  "i'm" + " " + (now - bearthYear) +" " +  "year's" + " "+ "old"+ " "+ "i"+ " "+"work" +" "+"as"+" "+job ;

// console.log(information)



///// template leterale (after es6) ::: 
// let firstName = "jhon" ; 
// let lastName = "breed" ; 
// let now = 2025 ; 
// let bearthYear = 1990 ; 
// let job = "full stack web developper" 

// let inforamtion = `i'm ${firstName} ${lastName} i'm ${now-bearthYear} years old i work as ${job}`

// console.log(inforamtion)

//// multipile lines of code ::: 

///// (before es6 ) :: 

// let sentence = "ay haja \n second word \n third word " 

// console.log(sentence)

///// (after es6) ::: 

// let sentence = `ay haja 
//  second word 
//   third word `

//   console.log(sentence)


// desecions ::: (if and else statement)




// const age = 15 ; 

// if (age > 16 ) {   ///// condition ... 
//     console.log("age over 16 ")
// } 


//  else if (age > 19) {
//     console.log("age over 19 ")
// }

// else if (age> 20) {
//     console.log("age over 20 ")
// } 
// else {
//     console.log("age under 16 ... ")
// }



//// conversion ::: 

const inputYear = "2000" ; 
console.log(typeof inputYear)

const result1 = inputYear+10

console.log("before conversion :" , result1)

const conversion = Number(inputYear)

console.log(typeof conversion)

const result2 = conversion +10 ; 
console.log("after conversion :" ,result2)

