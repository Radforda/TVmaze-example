var TV=require("./TV");
var tv= new TV;
var search=process.argv[2].toLowerCase();
var term=process.argv.slice(3).join(" ");

if(!term){
    console.log("I do not know what you want to search for! Make sure to add both (show/actor) and the name of the show or actor you like to know about.")
}

if(search==="show"){
    console.log("You are searching for a show!")
    tv.findShow(term);
}else if(search==="actor"){
    console.log("You are searching for an actor!")
    tv.findActor(term);
}else{"I have no idea what you want to search for! Use show or actor next time"}