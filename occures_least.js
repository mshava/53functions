var occures_least = function(str){
str = str.replace(/\s+/g,"");
	var splitStr = str.split("");
	var firstLetter = [];
	var letterMap ={};
	var letter = " ";
	var count = 0;
	var leastLetter = " ";
		for(var a = 0; a < splitStr.length; a++){
			firstLetter.push((splitStr[a]).toUpperCase());
		}
		for(var i = 0; i < firstLetter.length; i++){
			for (var b = 0; b < firstLetter.length; b++) {
				if(firstLetter[i] === firstLetter[b]){
					count++;
					letterMap[firstLetter[i]] = count;	
				}
			}
			count = 0;
		}
	var min = Infinity, a;
		for( a in letterMap){
			if( letterMap[a] < min){
				min = letterMap[a];
				leastLetter = a;
		}
	}
	return leastLetter;
	}
