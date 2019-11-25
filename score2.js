
function ver (){
var str = 'hello amine';
var verify = str[0];
var nb = 0;
for(var i = 0;i<str.length;i++){
	if(verify === str[i]){
	  nb++;
	}else{
      verify = str[i];
	}
}
	return("le mot quil apparaitre est "+verify+" le nombre de fois est :"+nb);
}	
function  Majuscule(ch){
 ch = "hello";
 if(ch[0].match(/[a-z]/ )){
      ch= ch.replace(ch[0],ch[0].toUpperCase());
      return ch;
 }
 }
function permut (a,b){
    var c = 0;
    c = a ;
    a = b ;
    b = c ;
    return a;
    return b;

}
function permuttwo(a,b){
    a = (a+b) - a;
    b = (a+b) - b;
 return "a : " +a + " b : "+b;


}
function renverse(ch){
 var ren = '';
    for(var i = 0 ; i < ch.length ; i++){
        ren = ch[i] + ren;
    }
    return ren;
}
function getpos (ch){
   var res = "" ;
	for(var i = 0 ; i<ch.length ; i++){
	if(ch[i]!= "(" && ch[i] != ")"){
		res = res + ch[i];
	}	
	}
	return res;
}//not finish yet so you need to ask
function ex14 (arr){
  var	arrtwo = [];
  var j = 0;
  for (var i =0;i < arr.length ; i++){
  	arrtwo[j] = arr[i].length;
  	j++;
  }
  return arrtwo;

}
(function say(){/*self invoke*/
return "hi";
}
)();

function amine (ami){
	return ami;
}

function full (last){
	return last + amine("amine");
}
function verifier (array){
	var arraytwo = [];
	each(array, function(element, i){
     if(i % 2 ===0){
     	arraytwo.push(element);
     }

	});
	return arraytwo;
}
function each(array,amine){
	for(var i = 0; i< array.length;i++){
		amine(array[i],i);
	}
}
//1
function indexedExponentials(array){
	var arr = [];
	var j =  0;
	each (array,function(array,i){
		arr[j]= array * i;
		j++;
	});
	return arr;
}

function evenIndexedOddNumbers (array){
var arrtwo = [];
var j = 0 ;
each(array,function(array,i){
if(i % 2 ===0){
	arrtwo[j] = array;
	j++;
}

});	
return arrtwo;
}

function evenIndexedEvenLengths (array){
var arr = [];
var j = 0;
each(array,function(array,i){
if(i % 2 === 0 && (array.length) %2 === 0){
 arr[j] = array;
 j++;

}

});	
return arr ;
}
var user = {
	firstname : "amine",
	lastname : "khadhraoui",
	email : "aminekhadhraoui5@gmail.com",
	fav : "football"
};
console.log(user.firstname);
var name = {
	firstName: 'Yan', 
	lastname: 'Fan'
}
var alphabet = {
 a: 1,
 b:2,
 c:3,
 d:4
 } 
 var person = {
 	
 	firstName : 'amine',
 	lastName : 'khadhraoui',
 	homeTown : 'kairouan',
 	
 	age : 25	
 } 
//alert(person.name.firstName + " " +person.name.lastName);
function names (person){
	var arr = [];
	var j = 0;
	for(var key in person){
		arr.push(person[key]) ;
		j++;
	}
	return arr;
}
var string = "hello my naaame is amine"
result = string.replace(/a{1}/gi, "@")
console.log(result)
/*
Regular expression Syntax
[i] = Case insensitive espace sensative case
[g] = global search
[m] = multi line search
brackets use
[...] =  character
[^...]= not character
/.../ = string
[^0-9] = not range
[A-g] = range [A-Z] range [a-g]
[0-9a-z] double range
Quantifiers 
word+ = word contain one letter
letter{number} = when a word contain that number of char 
letter {number,number} = word contain this number or that number
letter{number,} = word contain at least that number
*/
var dog = {
	"name" : "how",
	"lastName": "bow"
}

console.log(dog);
