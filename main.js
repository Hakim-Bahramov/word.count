function textCount() {

	var text = document.getElementById("text").value;
	var probel = 0;

	if (text.length > 0) {
		text = text.match(/\S+/g);

		for (var index in text) {
		if (text[index] === " " || text[index] === "." || text[index] === "," ||
					text[index] === "(" || text[index] === ")" || text[index] === "!" ||
					text[index] === "?" || text[index] === ";" || text[index] === ":" ||
					text[index] === "-" || text[index] === "'"){
			probel++;
		}
	}
		var count = text.length - probel;
		document.getElementById("textCount").innerHTML = count + " words";
	} else {
		document.getElementById("textCount").innerHTML = "0 words";
	}
}