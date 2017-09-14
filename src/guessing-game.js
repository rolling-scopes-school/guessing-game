var mn,mx,average,isLower,isGreater,result;

class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	mn=min;
    	mx=max;
    	isLower=false;
    	isGreater=false;
    }

    guess() {
    	if(isLower){
    		mx=average;
    	}
    	else if(isGreater){
    		mn=average;
    	}
    	average=Math.ceil(mn + ((mx - mn)/2));
    	return average;
    }

    lower() {
    	isLower=true;
    	isGreater=false
    }

    greater() {
    	isGreater=true;
    	isLower=false;
    }
}

module.exports = GuessingGame;
