// 1.  10-200 arasindaki ededlerin 3 qatinin 2 eded artiginin 5-e bolunen ededleri goster

// for ( var i = 10; i < 200; i++) {    
//    var X = (i * 3 + 2) % 5   
//    if ( X == 0 ){
//       console.log("X" , i)
//    }
// }




//  1-100 arasindaki cut ededler 

// for (var i = 1; i <= 100; i++){
//    if (i % 2 === 0) {
//       console.log(i);
//    }
// }




// 2. 1-100 arasindaki cut ededlerin toplami

// var sum = 0;
// for(var i = 1; i < 100; i++ ) {
//    if (i % 2 == 0)  {
//       sum = sum + i
//    }
// }
// console.log(sum);





// 3. 1-100 arasindaki cut ededlerin toplaminin mukemmel eded olub-olmadigini tapin

// var cut_ededlerin_cemi= 0;
// for ( var i = 1; i < 6; i++) {
//    if ( i % 2 === 0) {
//       cut_ededlerin_cemi = cut_ededlerin_cemi + i;
//    }
// }
// console.log(cut_ededlerin_cemi);

// var bolenlerin_cemi = 0;
// for ( var k = 1; k < cut_ededlerin_cemi; k++) {
//    if ( bolenlerin_cemi % k === 0){
//       bolenlerin_cemi = bolenlerin_cemi + k;
//    }
// }
// console.log(bolenlerin_cemi);

// if (bolenlerin_cemi === cut_ededlerin_cemi){
//    console.log("eded mukemmeldir");
// }
// else{
//    console.log("eded mukemmel deyil");
// }





// 4.  Ekrana 5 defe adini yazdir

// for (var i = 0; i < 5; i++) {
//    console.log("Sema")
// }




// 5.  1-20 qeder ededleri ekrana yazdir

// for (var i = 1; i < 20; i++) {
//    console.log(i)
// }



// 6. Input ile daxil edilen adi input ile daxil edilen eded qeder ekrana yazdir

// var a= prompt("adinizi daxil edin")
// var input= +prompt("eded daxil edin")
// for ( var i = 0; i < input; i++) {
//    console.log(a)
// }


// 7. Input ile daxil edilen n sayda ededin cemi

// var n = 5;
// var sum = 0;
// for ( i = 0; i < n; i++){
//    var input= +prompt("eded daxil edin")
//    sum = sum + input
// }
// console.log(sum);




// 8.  1-den input ile daxil edilen edede qeder cut ededleri tapin

// var input= +prompt("Eded daxil edin:")
// for ( var i = 1; i < input; i++) {
//    if(i % 2 == 0){
//       console.log(i);
//    }
// }




// 9.  Input ile daxil edilen 5 ededden menfi olanlarin cemi, cut olanlarin hasilini tap

// var n = 6;
// var sum = 0;
// var hasil = 1; 
// for ( var i = 1 ; i < n; i++) {
//    var input= +prompt("eded daxil edin")
//    if ( input < 0 ){
//       sum = sum + input  
//    }
//     else if( input % 2 === 0){ 
//       hasil = hasil * input
//     }
// }
// console.log("Menfi olanlarin cemi:" ,sum);
// console.log("Cut olanlarin hasili" , hasil);




// 10. Factorialin tapilmasi

// var factorial= 1;
// var input= +prompt("eded daxil edin")
// for ( var i = 1; i <= input ; i++) {
//    factorial= factorial * i
//    console.log(factorial)
// }




// 11. 5 fenden umumi ortalama

// var num1= +prompt("Qiymet daxil edin")
// if(num1 > 0 && num1 < 100){
//    var num2= +prompt("Qiymet daxil edin")
   
//    if(num2 > 0 && num2 < 100){
//       var num3= +prompt("Qiymet daxil edin")

//       if(num3 > 0 && num3 < 100){
//          var num4= +prompt("Qiymet daxil edin")

//          if (num4 > 0 && num4 < 100){
//             var num5= +prompt("Qiymet daxil edin")

//             if(num5 > 0 && num5 < 100){
               
//                var total = (num1 + num2 + num3 + num4 + num5) / 5

//                if (total > 90){
//                   console.log("A")
//                }
//                else if (total > 80 && total < 90){
//                   console.log("B")
//                }
//                else if(total > 70 && total < 80){
//                   console.log("C")
//                }
//                else if(total > 60 && total < 70){
//                   console.log("D")
//                }
//                else if(total > 50 && total < 60){
//                   console.log("E")
//                }
//                else{
//                   console.log("Kesilmisiniz")
//                }
//             }
//          }
//       }
//    }
// }






// 12.  Input ile 5 eded daxil edin 7-e beraber olanlarin sayini tap

// var n = 6;
// var say = 0; 
// for ( var i = 1; i < n; i++) {
//    var input= +prompt("eded daxil edin:")
//    if ( input === 7) {
//       say = say + 1
//       console.log(say)
//    }
// }




// 13. Input ile daxil olan ededin sade bolenlerini cixardin





// 14. Daxil etdiyiniz ededde nece 0 var

// var input= +prompt("eded daxil edin")
// var reqem =0;
// var counter= 0;

// while ( input > 0) {
//    reqem = input % 10
//    input = Math.floor (input / 10)
//    if(reqem === 0){
//       counter=counter + 1
//    }
// }
// console.log(counter)




// 15. 3 reqemli eded daxil edirik ededin evveline ve sonuna string ile 3 elave edirik

// var input= prompt("3 reqemli eded daxil et");
// var a= 3;
// var b= 3;
// var X= a + input + b;
// console.log(X);




// 16. Input ile daxil olan ededin bolenlerini tapin

// var input= +prompt("eded daxil edin");
// for (var i = 1; i <= input; i++){
//    if ( input % i === 0) {
//       console.log(i);
//    }
// }





// 17.  Iput ile daxil edilen ededin bolenlerinin sayini tapin 

// var input= +prompt("eded daxil edin");
// var say= 0;
// for (var i = 1; i <= input; i++){
//    if ( input % i === 0){
//       console.log("say");
//    }
// }





// 18. Input ile daxil edilen ededin bolenlerinin cemini tapin

// var input= +prompt("eded daxil edin");
// var sum= 0;
// for (var i = 1; i <= input; i++){
//    if (input % i === 0){
//       sum = sum + i 
//    }
//    console.log(sum);  
// }




// 19. Input ile daxil edilen ededin bolenlerinin hasilini tapin

// var input= +prompt("eded daxil edin");
// var hasil= 1;
// for (var i = 1; i <= input; i++){
//    if (input % i === 0){
//       hasil = hasil * i
//    }
//    console.log(hasil);
// }




//  Input ile daxil olan ededin reqemleri

// var input= +prompt("eded daxil edin");
// while (input > 0){
//    console.log( input % 10);
//    input = Math.floor( input / 10);
// }



// 20. Input ile daxil olan ededin nece reqemli oldugunu tapin

// var input= +prompt("eded daxil edin");
// say= 0;
// while ( input > 0) {
//     if (input % 10){
//     say= say + 1
//     }
//    input= Math.floor( input / 10);
// }
// console.log(say) 




// 21. Input ile daxil olan ededin reqemlerinin cemi

// var input= +prompt("eded daxil edin");
// sum = 0;
// var reqem;

// while( input > 0) {
//    reqem = input % 10 
//    sum = sum + reqem
//    input = Math.floor( input / 10);
// }
// console.log(sum)




// 22. Input ile daxil olan reqemlerin hasili

// var input= +prompt("eded daxil edin")
// hasil = 1;
// var reqem;

// while ( input > 0) {
//    reqem = input % 10
//    hasil = hasil * reqem
//    input = Math.floor (input / 10);
  
// }
// console.log(hasil)



// 23. Input ile daxil olunan ededin reqemlerinin en boyuyunu tapin

// var input= +prompt("eded daxil edin")
// var en_boyuk_reqem = 0;
// while( input > 0) {
//    reqem = input % 10;

//    if ( en_boyuk_reqem < reqem){
//       en_boyuk_reqem = reqem
//    }
//    input = Math.floor( input / 10);
// }
// console.log("en boyuk reqem:" , en_boyuk_reqem);




// 24. Input ile daxil olan ededin sade yoxsa murekkeb olmagini tapin

// var input= +prompt("eded daxil edin")   
// var i = 2;

// if ( input % i === 0 && i++) {
//    console.log("eded murekkebdir")
// }
// else{
//    console.log("eded sadedir")
// }



//  26. Input ile daxil olan ededin reqemlerinden cut ededleri gosterin

// var input= +prompt("eded daxil edin")
// var reqem;
// while( input > 0){
//    reqem = input % 10;

//    if ( reqem % 2 === 0){
//       console.log(reqem)
//    }
//    input = Math.floor( input / 10);
// }





// 27.  Input ile daxil olan ededin reqemlerinin sade olmasini gosterin

// var input= +prompt("eded daxil edin")
// var i = 2;
// var reqem;


// while( input > 0) {
//    reqem = input % 10;                              BUNA YENIDEN BAX
//    input = Math.floor( input / 10);
    
//    if (input % i === 0 && i++) {

//    }
// }




// 31. Input ile daxil olunan 1-ci ededi 2-ci ededin quvvetine yukseldin

// var input1= prompt("eded daxil edin")
// var input2= prompt("eded daxil edin")
// var quvvet= input1 ** input2
// console.log(quvvet)




// 32. Input ile daxil olunan ededin reqemlerinin kvadratlari cemini tapin

// var input= +prompt("eded daxil edin")
// var reqem;
// var kvadrati;
// var sum= 0;
// while ( input > 0) {
//    reqem = input % 10;
//    kvadrat = reqem ** 2;
//    sum = sum + kvadrat;
//    input= Math.floor( input / 10);
//    console.log(sum)
// }
 



// 33.Input ile daxil edilen 3 ededin string ile yan-yana yigilsin

// var input1= prompt("eded daxil edin")
// var input2= prompt("eded daxil edin")
// var input3= prompt("eded daxil edin")
// var X= input1 + input2 + input3
// console.log(X);




// 34. Input ile daxil olunan 3 ededin string ile yan-yana ardicilliqla yigilsin

// var input1= prompt("eded daxil edin")
// var input2= prompt("eded daxil edin")
// var input3= prompt("eded daxil edin")          BUNA BAX
// var X= 0;
// if( input1 < input2 && input2 < input3){
//    X= input1 + input2 + input3
//    console.log(X);
// }





// 36. Daxil edilen ededin ededi ortasi

// var n= 5;
// var sum= 0;
// var avarage= 0;
// for ( var i = 0; i < n; i++) {
//   var input= +prompt("eded daxil edin:")
//   sum = sum + input
// }
// console.log(sum);
// avarage = sum / n;
// console.log(avarage);




//  37. Istifadeciden alinan n sayda ededin necesinin tam eded oldugunu tapin

// var n = 5;
// var say = 0;
// for ( var i = 0; i < n; i++) {
//    var input= +prompt("eded daxil edin")
//    if ( input > 0 || input == 0 || input < 0) {          BUNA BAX!
//       say= say + 1
//       console.log( say );
//    }
// }








// 41. Input ile daxil olunan ededlerin reqemlerinin sayi ve string ile tersi


// var input = +prompt("eded daxil edin")
//           var reminder
//             var reqem = '';
//           while ( input>0) {
//             reminder = input % 10;
//             input = Math.floor( input/10);
//             reqem += reminder
//           }

//           console.log(reqem);





// 38. istifadeciden alinan  n sayda ededden necesinin murekkeb eded oldugunu tapin

// var num = prompt("eded daxil eded")
// for ( var i = 2; i <= num; i++)  {
//    if ( num % 2 == 0) {
//       console.log( "eded murekkebdir")
//    }
//    else {
//       console.log("eded murekkeb deyil")
//    }
// }



// 39. Daxil olunan 2 eded arasinda olan en boyuk sade ededi tapin  10-40    37

// var input1 = +prompt("eded daxil edin")
// var input2 = +prompt("eded daxil edin")
// var counter = 0;
//    for ( var i = input1 ; i <= input2; i++) {
      
//       for( var k = 0; k <= i; k++) {
//          if ( i % k === 0) {

//             counter = 0
//             counter = counter + 1
//             console.log(counter);          BUNA BAX!
            
            
//          }

//       }
     

//          if( counter <= 2 ){
//             console.log("eded sadedir", i)
//          }
         
//          else {
//             console.log("eded murekkebdir",i)
//          }

    
//    }






// Ededin sade ve ya murekkeb olmasi

// var input = +prompt("eded daxil edin");
// var counter = 0;
// for ( var n = 0; n <= input; n++) {
//    if (input % n == 0){
//       counter = counter + 1 ;
//       console.log(n);
//    }
// }
   
// if ( counter == 1) {
//    console.log("eded ne sade ne murekkebdir");
// }
// else if ( counter <= 2) {
//    console.log("eded sadedir");
// }
// else {
//    console.log("eded murekkebdir")
// }





// 30. Input ile daxil olunan ededin tersinin bolenlerini tapin

// var input= +prompt("eded daxil edin");
// var reqem;
// var reqem_ters =""

// while (input > 0) {
//    reqem = input % 10
//    input = Math.floor( input / 10)
//    reqem_ters = reqem_ters + reqem
// }
// console.log(reqem_ters);

// for ( var i = 0; i < reqem_ters; i++) {
//    if ( reqem_ters % i === 0){
//       console,log(i);
//    }
// }

