var longest_word = function(sentence){
	var words = sentence.split(" ");
	var longer_word = words[0];
	for(var i = 0; i < words.length; i++){
		if(words[0].length < words[i].length){
			words[0] = words[i].length;
			longer_word = words[i];
		}
	};
	return (longer_word + ''+longer_word.length);
}


var longest_word = function(sentence){

	var words = sentence.split(" ");

	var long_word = words[0];

	for(var i = 0; i < word.length; i ++){

		if(words[0].length[i].length){

			words[0] = words[i].length;

			long_word = words[i];
		}

	};
		return (long_word + " " + long_word.length);

}