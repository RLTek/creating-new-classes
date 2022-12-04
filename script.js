//declares out button and output for random sentence
const userBtn = document.getElementById('random-user-button');
const userOutput = document.getElementById('user-button-output');


//creates the class to create new users
class User {
          constructor(name, age){
             this._name = name;
             this._age = age;
  }
         get name(){
         return this._name;
  }
         get age(){
         return this._age;
  }
};

//creates an empty array to store users
const users = []
//creates a function to add new users to the user array
const addUser = (user) => {
        users.push(user);
  };

//creates new users using the above class
const newUser = new User('Homer Simpson', 34);
const newUser1 = new User('Peter Griffin', 30);
const newUser2 = new User('Michael Scott', 44);
const newUser3 = new User('Hank Hill', 48);

//adds users to the users array using the addUser function
  addUser(newUser);
  addUser(newUser1);
  addUser(newUser2);
  addUser(newUser3);

//logs the users that are in the Users array
  console.log(users);

  //selects a random number based on the number of users in the users array  
//let randomUser = Math.floor(Math.random() * users.length);
//grabs a random user from the users array and logs a sentence with the user's name and age.
//console.log(`Hi my name is ${users[randomUser].name} and I am ${users[randomUser].age} years old.`);

//creates a function for the button to display the random sentence
userBtn.onclick = function(){
//selects a random number based on the number of users in the users array  
let randomUser = Math.floor(Math.random() * users.length);
userOutput.innerHTML = `Hi my name is ${users[randomUser].name} and I am ${users[randomUser].age} years old.`;
};