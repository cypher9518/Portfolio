export default class ThreedTilt {
	constructor (el, conf) {
		this.el = el;

		this.el.style.setProperty('--threed-tilt-x', 0);
		this.el.style.setProperty('--threed-tilt-y', 0);
	}

	mount () {
		this.el.addEventListener('mouseenter', e => {
			this.el.classList.add('threed-tilt-active');
		});

		this.el.addEventListener('mouseleave', e => {
			this.el.classList.remove('threed-tilt-active');
		});

		this.el.addEventListener('mousemove', e => {
			const bcr = this.el.getBoundingClientRect();
			const offsetX = e.clientX - bcr.left;
			const offsetY = e.clientY - bcr.top;

			requestAnimationFrame(() => {
				this.el.style.setProperty('--threed-tilt-x', (offsetX / bcr.width) * 2 - 1);
				this.el.style.setProperty('--threed-tilt-y', (offsetY / bcr.height) * 2 - 1);
			});
		});
	}
}
