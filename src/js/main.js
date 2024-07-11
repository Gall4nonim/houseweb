const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBox = document.querySelector('.nav__items')
const logoImg = document.querySelector('.logo-img')
const barsik3 = document.querySelector('.barsik3')
const barsik2 = document.querySelector('.barsik2')
const barsik = document.querySelector('.barsik')
const allSections = document.querySelectorAll('.section')

const handleNav = () => {
	navBtn.classList.toggle('active')
	if (nav.classList.contains('nav--active')) {
		nav.classList.remove('nav--active')
		nav.classList.add('nav--inactive')
		navBox.classList.remove('nav__items--active')
		logoImg.style.color = 'black'
		if (window.innerWidth > 500) {
			barsik.classList.remove('aniBarsik')
			barsik3.classList.remove('aniBarsik3')
		}
	} else {
		nav.classList.remove('nav--inactive')
		nav.classList.add('nav--active')
		navBox.classList.add('nav__items--active')
		logoImg.style.color = 'white'
		if (window.innerWidth < 500) {
			barsik.classList.add('aniBarsik')
			barsik3.classList.add('aniBarsik3')
		}
	}
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
			nav.classList.add('nav--inactive')
			navBtn.classList.remove('active')
			logoImg.style.color = 'black'
		})
	})
}

navBtn.addEventListener('click', handleNav)

window.addEventListener('scroll', function () {
	const circle = document.querySelector('.circle')
	const scrollY = window.scrollY /10
	// const newSize = 100 + scrollY * 1.5; // zwiększenie rozmiaru o 1% scrolla
	// const newSize = 100 + scrollY * 5.5 // zwiększenie rozmiaru o 1% scrolla TO DZIAŁA W MIARĘ OK
	const newSize = 450 + scrollY 
	circle.style.width = `${newSize}px`
	circle.style.height = `${newSize}px`
})
