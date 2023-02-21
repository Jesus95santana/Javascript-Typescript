import reviews from "./app.js";

const rootNode = document.getRootNode()!;
const reviewImg = document.getElementsByTagName("img")[0]!;
const reviewAuth = document.getElementById("author")!;
const reviewJob = document.getElementById("job")!;
const reviewInfo = document.getElementById("info")!;
const prevBtn = document.getElementsByClassName("prev-btn")[0]!;
const nextBtn = document.getElementsByClassName("next-btn")[0]!;
const randomBtn = document.getElementsByClassName("random-btn")[0]!;
let currentID: number = 1;
reviewImg.src = reviews[0].img;
reviewAuth.innerText = reviews[0].name;
reviewJob.innerText = reviews[0].job;
reviewInfo.innerText = reviews[0].text;
prevBtn.style.visibility = "hidden";

type Review = {
	id: number;
	name: string;
	job: string;
	img: string;
	text: string;
};

function next(list: Review[]) {
	if (currentID < list.length) {
		currentID++;
	}
	return list.filter((review: Review) => {
		return currentID === review.id;
	});
}
function previous(list: Review[]) {
	if (currentID > 1) {
		currentID--;
	}
	return list.filter((review: Review) => {
		return currentID === review.id;
	});
}
function random(list: Review[]) {
	let randomNum = Math.floor(Math.random() * list.length) + 1;
	while (currentID == randomNum) {
		console.log(`number was ${randomNum} tried again`);
		randomNum = Math.floor(Math.random() * list.length) + 1;
	}
	currentID = randomNum;
	return list.filter((review: Review) => {
		return currentID === review.id;
	});
}

function reviewData(list: Review[], eventClass) {
	if (eventClass === "fa-chevron-right") {
		return next(list);
	} else if (eventClass === "fa-chevron-left") {
		return previous(list);
	} else if (eventClass === "random-btn") {
		return random(list);
	}
}
function handleDOM(review: Review) {
	reviewImg.src = review.img;
	reviewAuth.innerText = review.name;
	reviewJob.innerText = review.job;
	reviewInfo.innerText = review.text;

	if (review.id == 1) {
		prevBtn.style.visibility = "hidden";
		nextBtn.style.visibility = "visible";
	} else if (review.id == 4) {
		prevBtn.style.visibility = "visible";
		nextBtn.style.visibility = "hidden";
	} else {
		prevBtn.style.visibility = "visible";
		nextBtn.style.visibility = "visible";
	}
}
function handleButton({ target }) {
	let lastClass: number = target.classList.length - 1;
	let handleClass = target.classList[lastClass];
	let answer = reviewData(reviews, handleClass);
	handleDOM(answer[0], lastClass);

	console.log(currentID);
}

nextBtn.addEventListener("click", handleButton);
prevBtn.addEventListener("click", handleButton);
randomBtn.addEventListener("click", handleButton);
