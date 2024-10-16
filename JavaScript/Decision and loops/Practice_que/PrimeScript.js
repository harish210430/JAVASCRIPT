// log all the prime no. from 1 to 100.
let i,j;
// for(i = 1 ; i <= 100; i++) {
//     for(j = 2; j <= i; j++) {  
//         if(i%j === 0) {
//             break;
//         } 
//     }
//     if(i == j)
//     console.log(i);
// } 


for(i = 1 ; i <= 100 ; i++) {
        for(j = 2; j <= i; j++) {  
            if(i%j === 0) {
                break;
            } 
        }
         if(i == j)
        console.log(i);
    }