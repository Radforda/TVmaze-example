
request=require("request");
fs=require("fs");

var TV=function(){
    var divider= "\n-------------------------------------------------------------";
    this.findShow=function(show){

        var URL= "http://api.tvmaze.com/singlesearch/shows?q=" + show;
        request(URL, function (error, response, body) {
            body=JSON.parse(body);
          
            var showData=[
            " name: "+body.name,
            " genre: "+body.genres.join(", "),
            " rating: "+body.rating.average,
            " network: "+body.network.name,
            " summary: "+body.summary].join("\n");

        
            fs.appendFile('log.txt',"\n"+showData+divider, function(err){
                if (err) throw err;
                console.log(showData)
            });
        });
    }

    this.findActor=function(actor){
        var URL= "http://api.tvmaze.com/search/people?q="+ actor
       
        request(URL, function (error, response, body) {
            body=JSON.parse(body);
           
           
            var showData=[
            " name: "+body[0].person.name,
            " date of birth: "+body[0].person.birthday,
            " country: "+body[0].person.country.name,
            " network: "+body[0].person.gender].join("\n");

        
            fs.appendFile('log.txt',"\n"+showData+divider, function(err){
                if (err) throw err;
                console.log(showData)
            });
        });
    }
}


module.exports=TV;


