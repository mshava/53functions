var avg_word_length = function(str){
	var wordSum = 0;
	var avg_word = 0;
	var splitStr = str.split(" ");
		for(var i =0; i < splitStr.length; i++){
			wordSum += splitStr[i].length;
		}
		avg_word = wordSum/splitStr.length
	return avg_word.toFixed(0);
}