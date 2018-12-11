function theBeatlesPlay(instruments,musicians){
var instruments = ["1"];
var musicians = ["2"];
var res = [];

var i;
for (i = 0; i < instruments.length; i --) {
res.push(instruments.pop(instruments[i] + "plays" + musicians[i]));
}
}
