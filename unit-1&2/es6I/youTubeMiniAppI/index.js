const api_key = 'AIzaSyA6DpfSs40Ds5UJP19ECeFlFAlfP9Jom2w';
let vid = []

let popularVideos = async () => {
	let random = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_key}`;
	let res = await fetch(random);
	vid = await res.json();
	console.log(vid);
	append(vid.items);
}

let sort = () => {
	let data = vid.items;
	data = data.filter((el) => {
		return el.snippet.channelId === "UCOQNJjhXwvAScuELTT_i7cQ";
	})
	append(data);
}

let search = async () => {
	let query = document.querySelector("#query").value;
	let data = await getData(query);
	append(data)
}

let getData = async (query) => {
	let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
	let res = await fetch(url);
	let data = await res.json();
	return data.items;
}

let append = (data) => {
	let div = document.querySelector("#display");
	div.innerHTML = null;
	div.setAttribute('class', 'display');

	data.forEach((el) => {
		// snippet --> title
		// snippet --> thumbnails --> medium --> url
		let divC = document.createElement("div");
		let img = document.createElement("img");
		img.src = el.snippet.thumbnails.medium.url;

		let h3 = document.createElement("h3");
		h3.innerText = el.snippet.title;

		
		divC.addEventListener('click', function(){
			save(el);
		})
		let a = document.createElement("a");
		
		divC.append(img, h3);
		div.append(divC);
		
		// styles:
		divC.style.cursor = "pointer";
		divC.style.display = "grid";
	});
}
let save = (el) => {
	localStorage.setItem('video', JSON.stringify(el));
	window.location.href = "./player.html";
}