function tabButtonAction(e) {
	console.log(e.target);
	alltabs = document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
	document
	.querySelectorAll(`[tab-index="${e.target.getAttribute('tab-index')}"]`)
	.forEach(el=>el.classList.add('active'));
	
}

/**
 * Initializes the page, called on 'load'
 */
function initialize() {
	const tabBtns = document.querySelectorAll('.tab-btn');
	if (!tabBtns) console.error("No tab buttons found");
	else {
		tabBtns.forEach(function (item) {
			item.addEventListener('click', tabButtonAction);
		});
	}

	setInterval(updateRandoms,1000);
}

const updateRandoms=()=>{
		document.querySelectorAll('.random').forEach((e)=>{
			e.innerText=Math.random();
		});
}

window.addEventListener('load', function () {
	initialize();
})

