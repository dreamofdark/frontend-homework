'use strict';

const sorting = (arr, properties) => {

	const objCompare = (a,b) => {

		for (let prop of properties) {
			switch( typeof a[prop] ) {
				case "number":
					if ( a[prop] != b[prop]) {
						return a[prop] - b[prop];
					}
					break;
				case "string":
					if ( a[prop] > b[prop] ) {
						return 1;
					} else if ( a[prop] < b[prop] ) {
						return -1;
					}
					break;
			}
		};

		return 0;
	};

	if ( arr.length === 0 || properties.length === 0 ) {
		return arr;
	};

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < properties.length; j++) {
			if ( !(properties[j] in arr[i]) ) {
				return arr;
			}
		};
	};

	return arr.sort(objCompare);
};