const regexInput = document.querySelector('input');
const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#text-output');
//flags
const globalFlag = document.querySelector("#flag-global");
const caseInsensitiveFlag = document.querySelector("#flag-case-insensitive");
const multilineFlag = document.querySelector("#flag-multiline");

function checkModifier(checkBox) {
	return checkBox.checked ? checkBox.value : "";
}

function getModifiers() {
	return checkModifier(globalFlag) + 
		   checkModifier(caseInsensitiveFlag) +
		   checkModifier(multilineFlag);
}

function match() {
	const regex = new RegExp(regexInput.value, getModifiers());
	textOutput.innerHTML = textInput.innerHTML.replace(regex, (str) => `<span class="highlight">${str}</span>`);
}

regexInput.addEventListener('input', match);
textInput.addEventListener('change', match);
globalFlag.addEventListener('change', match);
caseInsensitiveFlag.addEventListener('change', match);
multilineFlag.addEventListener('change', match);