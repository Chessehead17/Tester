function displayBlock(show, btn) // There has to be a better way so check later
{
	document.getElementById('main1').style.display="none";
	document.getElementById('main2').style.display="none";
	document.getElementById('main4').style.display="none";
	document.getElementById('main5').style.display="none";
	document.getElementById('main3').style.display="none";

	document.getElementById(show).style.display="block";

	document.getElementById('btn1').style.background = "black";
	document.getElementById('btn2').style.background = "black";
	document.getElementById('btn3').style.background = "black";
	document.getElementById('btn4').style.background = "black";
	document.getElementById('btn5').style.background = "black";

	document.getElementById(btn).style.background = "#A92F41";
	document.getElementById(btn).style.color = "#FFFFFF";
}

function PerformSearch()
{
	var searchEngine = document.getElementById("search-options");
	var searchQuery  = document.getElementById("searchBar");
	window.open(searchEngine.value + searchQuery.value);
}

function getDate()
{
	var today=new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yr = today.getFullYear();

	var h=today.getHours();
	var greeting;

	if (h < 12) { greeting = "Good Morning"; }
	else if (h >= 12 && h < 19) { greeting = "Good Afternoon"; }
	else { greeting = "Good Evening"; }

	document.getElementById("cur_greeting").innerHTML = greeting + ": msdvvr";
	document.getElementById("cur_date").innerHTML = dd + "/" + mm + "/" + yr;
}

function startTime()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("clock").innerHTML = h+":"+m+":"+s;
	var t = setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
	if (i < 10)
	{
		i = "0" + i
	};
	return i;
}

function search(query)
{
	switch(query.substr(0,query.indexOf(' ')))
	{
		case "-a":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" + query;
		break;

		case "-y":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.youtube.com/results?search_query=" + query;
		break;

		case "-w":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://en.wikipedia.org/w/index.php?search=" + query;
		break;

		case "-wa":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "http://www.wolframalpha.com/input/?i=" + query;
		break;

		case "-i":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.google.com/search?tbm=isch&q=" + query;
		break;

		case "-r":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://reddit.com/r/" + query;
		break;

		case "-d":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://duckduckgo.com/?q=" + query;
		break;

		case "-b":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.bing.com/search?q=" + query;
		break;

		case "-bi":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.bing.com/images/search?q=" + query;
		break;

		case "-gh":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://github.com/search?utf8=&q=" + query;
		break;

		case "-so":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://stackoverflow.com/search?q=" + query;
		break;

		default:
		window.location="https://www.google.com/search?q=" + query;
	}
}

function GenMain(mId, links)
{
	var m = document.getElementById(mId);
	for(var g = 0; g < links.length; ++g)
	{
		var group = document.createElement('div');
		group.className = "bookmark-group";
		var s = '<div class="bookmark-margin"><div class="bookmark-group-title">' + links[g][0] + '</div>';
		for(var i = 0; i < links[g][1].length; ++i)
		{
			s += '<a href=' + links[g][1][i][1] + '><div class="bookmark-link">' + links[g][1][i][0] + '</div></a>';
		}
		group.innerHTML = s + '</div>';
		m.appendChild(group);
	}
}

window.onload=function()
{
	GenMain("main2", dick);
	GenMain("main3", favs);
	GenMain("main4", prog);

	getDate();
	// startTime();


	//Add images here to have startpage pick random backgrounds
	var images = ['Bgd3.jpg'];

	var dir = "img/";
	var randomCount = Math.round(Math.random() * (images.length - 1));
	document.getElementById("background").style.backgroundImage = "url(" + dir + images[randomCount] + ")";

	document.getElementById('btn3').style.background = "#A92F41";

	searchinput = document.getElementById("searchBar");
	if(!!searchinput){
		searchinput.addEventListener("keypress", function(a){
			var key = a.keyCode;
			if(key == 13){
				var query = this.value;
				search(query);
			}
		});
	}

	//This is done instead of onclick due to chrome extension security issue
	document.getElementById('btn1').addEventListener('click', function () { displayBlock('main1', 'btn1');;	});
	document.getElementById('btn2').addEventListener('click', function () { displayBlock('main2', 'btn2');; });
	document.getElementById('btn3').addEventListener('click', function () { displayBlock('main3', 'btn3');; });
	document.getElementById('btn4').addEventListener('click', function () { displayBlock('main4', 'btn4');; });
	document.getElementById('btn5').addEventListener('click', function () { displayBlock('main5', 'btn5');; });
}
