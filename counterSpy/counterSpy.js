// Please do not change the name of this function

function counterSpy (arr) {
    var final = [];
if (Array.isArray(arr) === false) {return final;}

arr.forEach(function(item) {
    
    if (item.toLowerCase().indexOf('s') >= 0) {return;}
    if (item.toLowerCase().indexOf('p') >= 0) {return;}
    if (item.toLowerCase().indexOf('y')>= 0)  {return;}
    
final.push(item);

});

return final;
}

module.exports = {counterSpy};