$ = el => document.querySelector(el);

function add() {
	$('.wrapper').innerHTML += '<div class="grid-item"></div>';
	updateVar();
}

function del() {
	$('.grid-item:last-child').parentNode.removeChild($('.grid-item:last-child'));
	updateVar();
}

function updateVar(action) {
	let htmlStyles = window.getComputedStyle($("html"));
	let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
	let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
	let gridItemsCount = document.querySelectorAll('.grid-item').length;
	document.documentElement.style.setProperty(`--rowNum`, Math.ceil(gridItemsCount / colNum));
}

function changeCol(action) {
	let htmlStyles = window.getComputedStyle($("html"));
	let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
	if (action == 'add') {
		document.documentElement.style.setProperty(`--colNum`, colNum + 1);
	} else {
		document.documentElement.style.setProperty(`--colNum`, colNum - 1);
	}
	updateVar();
}