var ends_str = function(str){
	var splitStr = str.split(" ");
	var lastLetter = [];
	var letterMap ={};
	var letter = " ";
	var count = 0;
	var mostLetter = " ";
		for(var a = 0; a < splitStr.length; a++){
			lastLetter.push((splitStr[a].slice(-1)).toUpperCase());
		}
		for(var i = 0; i < lastLetter.length; i++){
			for (var b = 0; b < lastLetter.length; b++) {
				if(lastLetter[i] === lastLetter[b]){
					count++;
					letterMap[lastLetter[i]] = count;	
				}
			}
			count = 0;
		}
	var max = 0, a;
		for( a in letterMap){
			if( letterMap[a] > max){
				max = letterMap[a];
				mostLetter = a;
		}
	}
	return mostLetter;
}