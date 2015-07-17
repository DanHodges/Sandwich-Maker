function sandwichMaker() {
	var sandWich = {
	  pickle: false,
	  lettuce: false,
	  tomato: false,
	  ketchup: false,
	  mustard: false,
	  mayo: false
	}
	var mySandwich = [];
	function pickle(num) {
	  if (num > 0) {
	  sandWich.pickle = true;
	  mySandwich.push("pickels");
	  }
	}
	function lettuce(num) {
	  if (num > 0) {
	    lettuce.lettuce = true;
	  	mySandwich.push("lettuce");
	  }
	}
	function tomato(num) {
	  if (num > 0) {
		sandWich.tomato = true;
	  	mySandwich.push("tomato");
	  }
	}
	function ketchup(num) {
	  if (num > 0) {
		sandWich.ketchup = true;
	  	mySandwich.push("ketchup");
	  }
	}
	function mustard(num) {
	  if (num > 0) {
		sandWich.mustard = true;
	 	mySandwich.push("mustard");
	  }
	}
	function mayo(num) {
	  if (num > 0) {
		sandWich.mayo = true;
	  	mySandwich.push("and pickels.");
	  } 
	   else {
	  	mySandwich.push("and no pickels.");
	  }
	}
	function makeMeASandwich(pickles, lettuces, tomatos, ketchups, mustards, mayos) {
	  pickle(pickles), lettuce(lettuces), tomato(tomatos), ketchup(ketchups), mayo(mayos);
	  document.write(mySandwich.toString());
	}
	makeMeASandwich(myIngredients);
	var myIngredients = document.getElementById('value').value;
}