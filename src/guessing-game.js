class GuessingGame {
    constructor() {}

    setRange(min, max) {
         this.min=min;
         this.max=max;
         var inl = 0;
         this.a=[];
         for (var i=0; i<this.max-this.min+1; i++) {
             this.a[i]=this.min+i;
          } 
    }

    guess() {
         this.mid=(this.min+this.max)/2;
         if (this.mid>parseInt(this.mid)) this.mid=this.mid+0.5; 
         return this.a[this.mid];
    }

    lower() {
         this.max=this.mid;
    }

    greater() {
          this.min=this.mid;
    }
}

module.exports = GuessingGame;
