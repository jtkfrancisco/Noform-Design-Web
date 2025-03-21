import $ from "jquery"
import jQueryBridget from "jquery-bridget"
import Isotope from "isotope-layout"
import "isotope-packery"
import "slick-carousel"
import imagesLoaded from "imagesloaded"
import MicroModal from "micromodal"

jQueryBridget("isotope", Isotope, $)
jQueryBridget("imagesLoaded", imagesLoaded, $)

MicroModal.init({
	onShow: (modal) => {
		$(`#${modal.id} .overlay-masonry`).imagesLoaded(function () {
			$(`#${modal.id} .overlay-masonry`).isotope({
				// options
				itemSelector: ".overlay-masonry img",
				layoutMode: "packery",
				percentPosition: true,
			})
		})
	},
	onClose: (modal) => {},
	openTrigger: "data-custom-open",
	closeTrigger: "data-micromodal-close",
	disableScroll: true,
})

function eyeball() {
	const eye = document.querySelectorAll(".iris")
	eye.forEach(function (eye) {
		let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
		let y = eye.getBoundingClientRect().top + eye.clientHeight / 2
		let radian = Math.atan2(event.pageX - x, event.pageY - y)
		let rotate = radian * (180 / Math.PI) * -1 + 270
		eye.style.transform = "rotate(" + rotate + "deg)"
	})
}

$(document).ready(function () {
	//masonry
	$(".masonry").imagesLoaded(function () {
		$(".masonry").isotope({
			// options
			itemSelector: ".masonry-item",
			layoutMode: "packery",
			percentPosition: true,
		})
	})

	//eyeball
	document.querySelector("body").addEventListener("mousemove", eyeball)

	//carousel
	$(".carousel").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		mobileFirst: true,
		speed: 9000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		pauseOnHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	})
})
