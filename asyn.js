var Count = 0;
var h = document.getElementById('name')

var demon = function() {
	console.log(31)
	var thiscount = ++Count;
	var log = document.getElementById('bb');
	log.innerHTML = thiscount + '<h3>同步</h3>';
	var p1 = new Promise(function(res, rej) {
		log.innerHTML = thiscount + '<h3>异步</h3>+';
		setTimeout(function() {
			res(thiscount);
		}, Math.random() * 2000 + 1000);
	})
	p1.then(function(val){
		console.log(val);
	})
}
h.addEventListener("click",demon);