var reverse = function(word){
var newString = "";
var s = word.length;
	while(s > 0){
		newString+=word.substring(s-1, s);
	s--;
	}
return newString;
}
/*
function Reverse(word){
var newString = "";
var x = word.length;
while(x > 0){
newString += word.substring(x-1, x);
x--;
}
return newString;
}
*/