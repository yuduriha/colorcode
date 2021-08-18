window.onload = () => {
	let parent = <HTMLElement>document.getElementById("color-box-parent");
	let dom = "";
	for(let i = 1; i < 1000000; ++i) {
		let color = "#" + ("000000" + i).slice(-6);
		dom += '<div class="color-box" style="background-color:' + color + '"></div>';
	}
	parent.innerHTML = dom;
};