function start_str(str){
	var splitStr = str.split(" ");
	var firstChar = [];
	var letterMap = {};
	var count = 0;
	var mostLetter = "";
		for(var i = 0; i < splitStr.length; i++){
			firstChar.push(splitStr[i].substr(0,1).toUpperCase());
		}
		for(var x = 0; x < firstChar.length; x++){
			for(var y = 0; y < firstChar.length; y++){
				if(firstChar[x] === firstChar[y]){
					count++;
					letterMap[firstChar[x]] = count;
				}
			}
			count = 0;
		}
		var max = 0, i;
			for(i in letterMap){
				if(letterMap[i] > max){
					max = letterMap[i];
					mostLetter = i;
			}
		}
	return mostLetter;		
	}	