  function high_low(numList){

	var calculate = {

		min: function (values){

			if(values.length == 0){

				return NaN;

			}else if(values.length == 1){

				var val = values.pop();

				if (typeof val == "number"){

					return val;

				}else {

					var val = values.pop();

					return Math.min(val, this.min(val));
				}

			}
		},
			
		max: function(values) {

			if (values.length == 0){

				return NaN;

			}else if (values.length == 1){

				var val = values.pop();

				if (typeof val == "number"){

					return val;

				}else {

						var val = values.pop();

						return Math.max(val, this.max(val)); 
				}

			}


		  return [calculate.min([100,13,3,6]),calculate.max([100,13,3,6])];

		}
		
	}	
}