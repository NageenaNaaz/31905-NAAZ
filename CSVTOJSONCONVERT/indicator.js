var fs=require('fs');

var myReadStream = fs.createReadStream('Indicators.csv');
var myWriteStream = fs.createWriteStream('write5.JSON');
const readline = require('readline');
var myArrObj = [];
var myMainArr = [];
var val=0;

const rl = readline.createInterface({
	input: myReadStream,
	output: myWriteStream
});
var i=0;
var Urban=new Array(2500).fill(0);
var Rural=new Array(2500).fill(0);
var ncolumn=[];
var nrows=[];
var output2=[];
var output1=[];
var first=new Array(2500).fill(0);
var asiacountry=new Array("Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia",
	"China","Cyprus","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos",
	"Lebanon","Malaysia","Maldives","Mongolia","Myanmar (Burma)","Nepal","North Korea","Oman","Pakistan","Palestine",
	"Philippines","Qatar","Russia","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand",
	"Timor-Leste","Turkey","Turkmenistan","United Arab Emirates (UAE)","Uzbekistan","Vietnam","Yemen");
//event
rl.on('line',function(line){
	myArrObj.push(myReadStream[0]);
    //  var lineData = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);;
      //console.log(lineData);
      if(i===0)
      {
      	ncolumn=line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        //console.log(ncolumn);
        i = i+1;
    }
    else {
    	nrows=line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);;
        //console.log(nrows);
        var obj2={};
        var obj4={};
        var obj3={};
        var obj5={};
        var a=[];
        var b=[];
        if(i!=0){
        	if(asiacountry.indexOf(nrows[0])!=-1) {
          //console.log(nrows[0]);
          if(nrows[2]=="Urban population (% of total)")
          {
          	Urban[nrows[4]]+=parseFloat(nrows[5]);



          }
          else if(nrows[2]=="Rural population (% of total population)")
          {
          	Rural[nrows[4]]+=parseFloat(nrows[5]);
          }
          output2[nrows[4]]={
          	'year':nrows[4],
          	'Rural value':Rural[nrows[4]],
          	'Urban value':Urban[nrows[4]]
          };
      }
  }
}

var obj1={};

for(i=0;i<ncolumn.length;i++)
{
	if(nrows[i]==="India") {
		for(j=0;j<ncolumn.length;j++)
		{
			if(nrows[j]>="1960" && (nrows[j]=="Urban population (% of total)"||nrows[j]=="Rural population (% of total population)") )
			{
                //obj1[ncolumn[j]]=nrows[j];
                output1[nrows[2]]={
                	IndicatorName:nrows[2],
                	year:nrows[4],
                	value:nrows[5],};
                  //console.log(output1[nrows[2]]);
                  //myWriteStream.write(JSON.stringify(output1[nrows[2]]));
              }
          }
      }
  }
});
//myWriteStream.write(JSON.stringify(myMainArr));
var out=[];
rl.on('close',function(){
	for(var i=1960;i<2016;i++){
		out.push(output2[i]);
		console.log(output2[i]);
	}
  //console.log(out);

  myWriteStream.write(JSON.stringify(out));
//fs.appendFile(myWriteStream);
});
