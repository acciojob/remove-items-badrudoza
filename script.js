//your JS code here. If required.
let input=document.querySelector("input");
input.addEventListener("click",function(e){
	e.preventDefault()
	let select=document.querySelector("#colorSelect");
	select.remove(select.selectedIndex);
});