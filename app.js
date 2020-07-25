alert("Hello From Sharath S!");
var pics = [
	"images/a.jpg",
	"images/bhata.jpg",
	"images/bhoomi.jpg",
	"images/bhyresh.jpg",
	"images/deepu.jpg",
	"images/kd.jpg",
	"images/megha.jpg",
	"images/nami.jpg",
	"images/nis.jpg",
	"images/pp.jpg",
	"images/shal.jpg",
	"images/sid.jpg",
	"images/sneha.jpeg",
	"images/sp.jpg",
	"images/zeesh.jpg"
] 

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 15){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});