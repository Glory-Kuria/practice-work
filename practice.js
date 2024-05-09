// let today = new Date()
// let day = today.getDay()
// let daylist = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// console.log("Today is: " + daylist[day]);

// let hour =today.getHours()
// let minute = today.getMinutes()
// let second = today.getSeconds()

// let time = (hour>=12) ? "PM": "AM"

// if(hour ===0 && time ==="PM"){
//     if (minute === 0 && second ===0){
//         hour=12;
//         time = "noon"
//     }else{
//         hour = 12;
//         time = "PM"
//     }
// }
// if(hour ===0&&time ==="AM"){
// if(minute===0 && second ===0){
//     hour =12;
//     time = 'midnight'
// }else{
//     hour == 12;
//     time = "AM"
// }}
// console.log("Current time: "+ + hour +time +minute + ":" + second);

// function area(){
//     let length= 5
//     let width=6
//     let height =7
//     console.log(length*width*height)

// }
// area()

// function years(year){
//     if (year%4 ==0){
//         console.log("leap year")
//     }else{
//         console.log("not a leap year")
//     }
// }
// years(2024)

//  function arrStrings(names){
//    let words= (names.split('').reverse('').join(''))

//     console.log(words)

//  }
//  arrStrings()
// const fruits=["jane","ajaohn","joan"]
// console.log(fruits.copyWithin(2,0))

// function count(str, letter)
//     {
//         let sum = 0;
//         // let letter = 'o'
//         new_str = str.split('')
//         for (let i = 0; i < new_.length; i++)
//         {
          
//             if (str.charAt(i) == letter)
//             sum++;
//         } 
//         return sum;
//     }
//    console.log(count("coconut", "o"));
     
    // // Driver method   
        // let str= "geeksforgeeks";
        // let c = 'e';
        // document.write(count(str, c));


        // Write a program that takes in an array,index and value. And inserts a character at a certain index
function insertCharacterAtIndex(arr,index,value){
         arr.splice(index,0,value)
          
console.log(arr)
}
insertCharacterAtIndex([1,2,3,4,5],[1],10)




        // Write a program that takes in a word and counts the occurrence of a certain character in a word
        function takesWordAndCountsOccurrence(word,character){
            const newWord = word.toLowerCase().split('');
            //let newArr=[]
            let count =0;
            for (let i = 0; i < newWord.length; i++){
                if (newWord[i] == character){
                   count += 1
                    //newArr.push(char)
                }
            }
            //console.log(newArr)
            console.log(count);
        }
        takesWordAndCountsOccurrence('banana','a')
        

        // Write a program that takes in a word and prints out the char that has appeared most
        function checkOccurrenceOfaChar(word,char){
         let words=word.split('');
         let count=0
         for(i in words){ 
            if (words[i] ==char){
                count+=1
            }

         }
          console.log(count)
         }
         checkOccurrenceOfaChar("banana","a")

        // Write a program that checks if a number is divisible by bothr3 and 5 and prints "Fizz Buzz", if its divisible by 3 and prints "Fizz",if its divisible by 5 prints "Buzz"
        
        // function takesArrayAndIndex(arr,index,value){
        //     for(let i=0;i<arr.length;i++);{
        //        arr.splice(,0,value)
        //     }
        //     console.log(arr)
        // }
        // takesArrayAndIndex([1,2,3,45,0],0)


        class HotelSystem{
            constructor(){
                this.reservation={}

            }
            makeReservation(roomNumber,guestName,checkInDate){
                this.reservation[roomNumber]={guestName,checkInDate}
                
                }
            getReservation (roomNumber){
return this.reservation[roomNumber]
            }
            removeReservation(roomNumber){
                delete this.reservation[roomNumber]
            }
            }
            const bookingSystem=new HotelSystem()
           const reservation = bookingSystem.makeReservation(101,'john kuria', '2024-04-02')
            bookingSystem.getReservation(101)
        

            function countList(arr){
             let  count=0
                 for(let i=0;i<arr.length;i++){
                 count++
                 }
                    
                console.log(count)

                }
            countList([1,2,3,4])


            // const student={
            //     name:"Glory",
            //     age:21,
            //     class:"Anitab"
            // }

            // function checkLength(student){
            //     let count=0,key;
            //     for(key in student){
            //         if(student.hasownproperty(key)){
            //             count++
            //         }
            //     }
            // console.log(count)

            //     }
            // checkLength( student={
            //     name:"Glory",
            //     age:21,
            //     class:"Anitab"
            // })

            Object.objectsize = function(Myobject) {
                let size = 0, key;
                for (key in Myobject) {
                    if (Myobject.hasOwnProperty(key)) size++;
                }
                return size;
            };
            
            let student = { 
            name : "Glory", 
            sclass : "Anitab", 
            codeNo : 40 };
            
            let objsize = Object.objectsize(student);
            console.log(objsize);


            // social media application where users can follow other users

            class socialMedia {
                constructor() {
                    this.followers = {};
                }
                addUser(user) {
                    this.followers[user] = [];
                }
                addFollower(user, follower) {
                    this.followers[user].push(follower);
                }
                getFollowers(user) {
                    return this.followers[user] || [];
                }
            }
            
            const app = new socialMedia();
            app.addUser("user1");
            app.addUser("user2");
            app.addFollower("user1", "user2");
            app.addFollower("user1", "user3");
            app.addFollower("user2", "user1");
            console.log(app.getFollowers("user1"));  
            console.log(app.getFollowers("user2"));  
            console.log(app.getFollowers("user3"));  