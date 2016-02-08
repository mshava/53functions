var longest_word = function(str){
	var splitStr = str.split(" ");
	var word = splitStr[0];
		for(var x = 0;x < splitStr.length;x ++){
			if(splitStr[x]!==null){
				if(word.length < splitStr[x].length){
					word = splitStr[x];
			}
		}
	}
	return word+" : "+word.length;
}

/*
var longest_word = function(str){
	var word = " ";
	var splitStr = word.split(" ");
		for(var i = 0; i < splitStr.length; i++){
			if(splitStr[i]!== null){
				if(word.length < splitStr[i+=1].length){
					word = splitStr[i];
				}
			}
		}	
	return word+" : "+word.length;	
}
*/