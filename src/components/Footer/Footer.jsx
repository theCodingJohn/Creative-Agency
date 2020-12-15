import React from 'react'

function Footer() {
	return (
		<footer className="main-footer">
			<div className="footer-desc-container">
				<h2>Let's build something<br />great together.</h2>
				<svg className="footer-wave-red-desktop" width="135" height="61" xmlns="http://www.w3.org/2000/svg"><path d="M98.882 60.408c10.951 0 19.618-4.864 25.999-14.593 6.38-9.728 9.571-23.054 9.571-39.977h-29.19c-.633 3.439-1.9 6.199-3.8 8.28-1.902 2.082-4.662 3.123-8.283 3.123-3.258 0-6.788-.86-10.59-2.58a354.773 354.773 0 01-12.354-5.905C65.8 6.54 60.89 4.594 55.505 2.92 50.119 1.245 44.214.408 37.787.408c-11.585 0-20.704 4.887-27.356 14.66C3.778 24.843.452 38.1.452 54.843h29.19c.633-3.348 2.059-6.063 4.276-8.144 2.218-2.082 5.182-3.123 8.893-3.123 3.077 0 6.471.838 10.182 2.512a437.483 437.483 0 0112.49 5.905c4.616 2.262 9.708 4.23 15.274 5.905 5.566 1.674 11.608 2.511 18.125 2.511z" fill="#F94F4F" fill-rule="nonzero"/></svg>
			</div>
			<div className="footer-button-wrapper">
				<div className='button-wrapper'>
					<a href="/">Schedule a Call</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
