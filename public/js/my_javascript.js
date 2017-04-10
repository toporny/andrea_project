toogle_var = 1;

children = document.getElementById('changeCSSid');
children.addEventListener('click', function (e) { 

	if (toogle_var == 1) {
		document.getElementById("my_css").href = "";
		document.getElementById("changeCSSid").innerHTML = '<a href="#">My dark theme</a>';
		toogle_var = 0;
	} else {
		document.getElementById("my_css").href = "css/mystyles.css";
		document.getElementById("changeCSSid").innerHTML = '<a href="#">Bootstrap white theme</a>';
		toogle_var = 1;
	}

}, true);

