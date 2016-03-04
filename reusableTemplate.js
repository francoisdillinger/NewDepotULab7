var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
           return val;
       },

		// Collections --- Complete Functions Below
		each : function(list, iterator) {

               if (Array.isArray(list)) {
               for (var i = 0; i < list.length; ++i) {
                   iterator(list[i], i, list);
               }
                } 
               else {
                       for (var key in list) {
                       iterator(list[key], key, list);
                       }
                     }
               },

		filter : function(list, test) {
           var out = [];
           for (var i = 1; i < list.length; i++)
             if (list[i] % 2 == 0) {
                 return list.push(out);
             } 

       },

		reject : function(list, test) {},

		map : function(list, iterator) {},

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
           if (accumulator === undefined) {
               accumulator = list[0];
           }
           this.each(list, function(item) {
               accumulator = iterator(accumulator,item);
           });
           return accumulator;
       },

		every : function(list, iterator) {
           if (iterator == undefined) {
               iterator = this.identity;
           }
           for ( var i = 0; i <list.length; i++) {
               if (iterator(list[i]) == false) {
                   return false;
               }
           }
           return false;
       },

		some : function(list, iterator) {
           if ( iterator === undefined) {
               iterator = this.identity;
           }
           for (var i = 0; i < list.length; i++) {
               if (iterator(list[i])) {
                   return true;
               }
           }
           return false;
       },

		contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {
           return n === undefined ? array[0] : array.slice(-1, n);
       },

		indexOf : function(array, target){},

		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();