let parentClick = document.getElementById("parent");
parentClick.addEventListener("click", function () {
	let parent = document.getElementById("parent-count");
	let sum = Number(parent.textContent);
	sum += 1;
	parent.textContent = `${sum}`;
});

let childClick = document.getElementById("child");
childClick.addEventListener("click", function (event) {
	event.preventDefault();
	event.stopPropagation();
	let child = document.getElementById("child-count");
	let sum = Number(child.textContent);
	sum += 1;
	child.textContent = `${sum}`;
});
