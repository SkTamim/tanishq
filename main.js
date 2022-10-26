// DATE
const todayDate = document.querySelector(".today-date");

let today = new Date();
let day = today.getDate();
let month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(today);
let year = today.getFullYear();

const fullDay = `${day} ${month}, ${year}`;
todayDate.innerText = fullDay;

// QUIZ FUNCTIONALITY
const questionOptions = document.querySelectorAll(
	".question-options-box button"
);

questionOptions.forEach((item) => {
	item.addEventListener("click", () => {
		let box = item.parentElement.parentElement;
		if (box.nextElementSibling) {
			box.classList.remove("active");
			box.nextElementSibling.classList.add("active");
		}
	});
});

// VARIFY TEXT
const verifyTexts = document.querySelectorAll(".verify-text p");
if (!verifyTexts) {
	setInterval(() => {
		verifyTexts[0].style.opacity = "1";
	}, 1500);
	setInterval(() => {
		verifyTexts[1].style.opacity = "1";
	}, 2500);
	setInterval(() => {
		verifyTexts[2].style.opacity = "1";
	}, 3500);
}

try {
	// CONGRATULATION MODAL
	var myModal = new bootstrap.Modal(
		document.getElementById("exampleModal"),
		{}
	);
	document.onreadystatechange = function () {
		myModal.show();
	};
} catch (err) {
	console.log(err);
}

// GIFT BOX
const giftBox = document.querySelectorAll(".gift-box");

giftBox.forEach((item) => {
	item.addEventListener("click", () => {
		giftBox.forEach((el) => {
			el.classList.remove("open");
		});

		item.classList.add("open");

		let dataModal = item.getAttribute("data-money");
		if (dataModal == "false") {
			var unfortunatelyModal = new bootstrap.Modal(
				document.getElementById("unfortunatelyModal"),
				{}
			);
			setTimeout(() => {
				unfortunatelyModal.show();
			}, 1000);
		}

		if (dataModal == "true") {
			var gotMoneyModal = new bootstrap.Modal(
				document.getElementById("gotMoneyModal"),
				{}
			);
			document.getElementById("restartConfetti").click();
			document.querySelector(".big-money-img").classList.add("show");

			setTimeout(() => {
				gotMoneyModal.show();
			}, 2000);
			setTimeout(() => {
				document.getElementById("stopConfetti").click();
				document.querySelector(".big-money-img").classList.remove("show");
			}, 5000);
		}
	});
});
