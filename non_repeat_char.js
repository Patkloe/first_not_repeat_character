function firstunique(s){
  var dict = {};
  var res = [];
  for(var i = 0; i < s.length; i++){
      dict[s[i]] = (dict[s[i]] || 0) + 1;
  }
  let val = Object.values(dict);
  let key = Object.keys(dict);
  for(var j in val){
     if(val[j] === 1){
      let temp = key[j];
          res.push(temp);
     }
  }   
 return res[0];
}
var test = "aabbcdet";
firstunique(test)
