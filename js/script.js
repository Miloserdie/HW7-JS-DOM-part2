let figure = document.querySelector('#figure');
function trueColor (){
	figure.style.background = document.querySelector('#color').value;
}
document.querySelector('#setColor').addEventListener('click', trueColor);


let select = document.querySelector('#select');
function trueFigure(){
	let selectedFigure = select.options[select.selectedIndex].value;
	for(let i = 0; i < select.options.length; i++){
		figure.classList.remove(select.options[i].value);
	}
	figure.classList.add(selectedFigure);
}
select.onchange=trueFigure;
trueFigure();