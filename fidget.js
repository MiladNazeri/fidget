(function(){

    var counterList = [];

    var randomize;

    function log(describer, text){
        text = text || '';
        print('&======');
        print(describer + ": ");
        print(JSON.stringify(text));
        print('======&');
    }

    function randomize(min,max){
        return Math.random() * (max - min) + min;
    }

    function CounterMaker(name,min,max,last, current, entityId, timerCb, ms){
        this.name = name;
        this.min = min;
        this.max = max;
        this.last = "";
        this.current = "";
        this.entityId = "";
        this.timer;
        this.timerCb;
        this.ms;
    }
    CounterMaker.prototype = {
        setName: function(name){
            this.name = name;
        },
        setMin: function(min){
            this.min = min;
        },
        setMax: function(max){
            this.max = max;
        },
        setLast: function(last){
            this.last = last;
        },
        setCurrent: function(current){
            this.current = current;
        },
        setEntityId: function(id){
            this.entityId = id;
        },
        setCb: function(cb){
            this.timerCb = cb;
        },
        setMs: function(ms){
            this.ms = ms;
        },
        getName: function(){
            return this.name;
        },
        getMin: function(){
            return this.min;
        },
        getMax: function(){
            return this.max;
        },
        getLast: function(){
            return this.last;
        },
        getCurrent: function(){
            return this.current;
        },
        getEntityID: function(){
            return this.entityId;
        },
        startTimer: function(){
            this.timer = Script.setInterval(this.timerCb, this.ms);
        },
        stopTimer: function(){
            Script.clearInterval(this.timer);
        },
        addToCurrent: function(amt){
            this.current += amt;
            this.current >= this.max ? this.max: this.current;
        },
        subtractFromCurrent: function(amt){
            this.current -= amt;
            this.current <= this.min ? this.min: this.current;
        }
    };
});
