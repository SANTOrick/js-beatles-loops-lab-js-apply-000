function theBeatlesPlay(instruments,musicians){
var instruments = ["John Lennon", "Paul McCcartney", "George Harrison", "Ringo Starr"];
var musicians = ["Guitar", "Guitar", "Lead Guitar", "Drums"];
var res = [];

var i;
for (i = 0; i < instruments.length; i ++) {
res =(instruments.pop);
i--;
}
return res
}
