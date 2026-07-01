 let customers=[];
 function addUser() {
    let userName = prompt("Enter your name:");
    let userId =Number(prompt("Enter your ID:"));
    let userBalance = Number(prompt("Enter your balance:"));
    let item =  customers.find(user => user.userId === userId);
    if(item){
        alert("User with this ID already exists. Please enter a different ID.");
    }
    else{
        return { userName, userId, userBalance };
    }
    }

    for (let i = 0; i <= 2; i++) {
        customers.push(addUser());

    }
    console.table(customers);

//     function findUser(id) {
//     return customers.find(user => user.userId === id);
// } 
//   let id = Number(prompt("Enter ID to search"));

//     let user = findUser(id);

//     if (user) {
//         console.log("Not found");
//     }
//     else {
//         console.log("Found user:");
//         console.log(user);
//     }  
     
    function withdraw() {

    let id = Number(prompt("Enter ID to withdraw:"));
    let user = customers.find(user => user.userId === id);

    if (user) {

        let Amount = Number(prompt("Enter your amount:"));

        if (Amount <= user.userBalance) {
            user.userBalance -= Amount;
            console.log("Withdrawal successful. New balance:" + user.userBalance);
        } 
        else {
            console.log("Insufficient balance.");
        }

    } 
    else {
        console.log("User not found");
    }
}
      
withdraw() 
   

function transfer() {
    let fromId = Number(prompt("Enter your ID to transfer from:"));
    let fromUser = customers.find(user => user.userId === fromId);

    if ( fromUser) {
        let toId = Number(prompt("Enter the ID to transfer to:"));
        let toUser = customers.find(user => user.userId === toId);
        if(toUser){
            let transferAmount = Number(prompt("Enter the amount to transfer:"));
            if (transferAmount <= fromUser.userBalance) {
            fromUser.userBalance -= transferAmount;
            toUser.userBalance += transferAmount;
        }
       console.table(customers); 
        
        
    }
    }
    
    
    
    
}
          
       
