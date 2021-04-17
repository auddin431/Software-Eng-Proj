var express = require('express');
var router = express.Router();
// link to AccountPage.js
// link to FDPurchases.js
// link to TicketPurchases.js


// User account information variables
var name,email,password,phone,paymentType,paymentInfo,rewardPoints;
// Food Purchase variables
var date,cost,itemName,numItems;
// Ticket Purchase variables
var movie,numTickets,QRCode;





/* Event: My tickets or Account Home or Submit button is clicked ==> 
Pull and display user account information
*/
    /*
    // Pull all data from db
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { name: {name} } };
        dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        name = result;    
        db.close();
        });
        var dbo = db.db("mydb");
        var query = { email: {email} } };
        dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        email = result;    
        db.close();
        });
        var dbo = db.db("mydb");
        var query = { password: {password} } };
        dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        password = result;    
        db.close();
        });
        var dbo = db.db("mydb");
        var query = { phone: {phone} } };
        dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        phone = result;    
        db.close();
        });


    }    
    phone = "908-222-3333";
    paymentType = "Discover";
    paymentInfo = "1234 Exp: 6/23";
    rewardPoints = "50";
    // send all data to front end to be diplayed
    */





// Event: Food Purchase History button is clicked ==> Pull and display food purchase data
    /* 
    // increment through the food purchase db starting at the most recent purchase
    for(int i = 0; i < length(FoodDB); i++){ 
        // tell frontend to make a new transaction box
        date = "Date i"; // pull from db
        // send date to front end to be diplayed
        
        // increment through items array list for purchase i
        for(int j = 0; j < length(foodItemsArrList); j++){ 
          itemName = "itemName i"; // pull from db
          numItems = "numItems i"; // pull from db
          // send itemName to front end to be diplayed
          // send numItems to front end to be diplayed
        } 
        cost = "cost i"; // pull from db
        // send cost to front end to be diplayed
    }      
    */





// Event: Ticket Purchase History is clicked ==> Pull and display ticket purchase data

      /* 
    // increment through the food purchase db starting at the most recent purchase
    for(int i = 0; i < length(TicketDB); i++){ 
        // tell frontend to make a new transaction box
        date = "Date i"; // pull from db
        // send date to front end to be diplayed
        movie = "movie i"; // pull from db
        // send movie to front end to be diplayed
        numTickets = "numTickets i"; // pull from db
        // send numTickets to front end to be diplayed
        cost = "cost i"; // pull from db
        // send cost to front end to be diplayed
        QRCode = "QRCode i"; // pull from db
        // send QRCode to front end to be diplayed
    }      
    */





// Event: Submit button is clicked ==> Update db and user account page
    /*
    // Get data from frontend
    //Update the db
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var name = { name: "Customer Name" };
        var newInfo = { $set: {name: "name", email: "email", password: "password", phone: "phone", paymentType: "payement type", paymentInfo: "payment info",rewardsPoints: "rewards points", } };
        dbo.collection("AccountInfo").updateOne(name, newInfo, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
        });
    });
    
    db.collection("AccountInfo").updateOne(rewardPoints,newRewardPoints,function(err,res)){
        if(err) throw err;
        console.log("1 document updated");
        db.close();
    });  
    */


