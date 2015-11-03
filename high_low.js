var high_low = function (numList){

	var calculate = {

		min: function (values){

			if(values.length == 0){

				return NaN;

			}else if(values.length == 1){

				var val = values.pop();

				if (typeof val == "number"){

					return val;

				}else {

					return NaN;

			} else {

					var val = values.pop();

					return Math.min(val, this.min(val));
			}
		},

		max: function (values){

			if (values.length == 0){

				return NaN;

			}else if (values.length == 1){

				var val = values.pop();

				if (typeof val == "number"){

					return val;

				}else{

					return NaN;

				}else{

						var val = values.pop();

						return Math.max(val, this.max(val)); 
				}
			}

		}

		return [calculate.min([13,49,3,18,4,5,99,6,107,8,11,15]),calculate.max([13,49,3,18,4,5,99,6,107,8,11,15])];

	};
