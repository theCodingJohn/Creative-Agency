import React, {useState} from 'react'

function Slide() {
	const [x, setX] = useState(0);
	const [slideHeadline] = useState(['guidelines', 'merchandise', 'web design']);
	const [count, setCount] = useState(0);

	const goRight = () => {
		if (x === -66.66) {
			setX(0);
			setCount(0);
		} else {
			setX(x + (-33.33));
			setCount(count + 1);
		}
	}
	const goLeft = () => {
		if (x === 0) {
			setX(-66.66);
			setCount(2);
		} else {
			setX(x - (-33.33));
			setCount(count - 1);
		}
	}
	return (
		<div className="slide">
			<div className="slide-image-container" style={{transform: `translateX(${x}%)`}}>
				<SlideImg title="Lean Product Roadmap" desc="2019 Project" num="1"/>
				<SlideImg title="New Majestic Hotel" desc="2018 Project" num="2" />
				<SlideImg title="Crypto Dashboard" desc="2016 Project" num="3" />
			</div>
			<div className="slide-control-container">
				<div className="slide-control-wrapper">
				<h2>Branding naming &<br /> <span className="slide-headline">{`${slideHeadline[count]}`}</span></h2>
					<div className="arrows-wrapper">
					<svg onClick={goLeft} className="prev" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(-1 0 0 1 40 0)" stroke="#F94F4F" fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="19.5" /><path stroke-width="2" d="M17.5 15l5 5-5 5" /></g></svg>
					<svg onClick={goRight} className="next" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g stroke="#F94F4F" fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="19.5"/><path stroke-width="2" d="M17.5 15l5 5-5 5"/></g></svg>
					</div>
					<svg className="wave-white-desktop" width="134" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M98.43 0c10.951 0 19.618 4.864 25.999 14.593C130.809 24.32 134 37.647 134 54.57h-29.19c-.633-3.439-1.9-6.199-3.8-8.28-1.902-2.082-4.662-3.123-8.283-3.123-3.258 0-6.788.86-10.59 2.58a354.77 354.77 0 00-12.354 5.905c-4.435 2.217-9.345 4.162-14.73 5.837C49.667 59.163 43.762 60 37.335 60 25.75 60 16.631 55.113 9.98 45.34 3.326 35.565 0 22.307 0 5.565h29.19c.633 3.348 2.059 6.063 4.276 8.144 2.218 2.082 5.182 3.123 8.893 3.123 3.077 0 6.471-.838 10.182-2.512a437.497 437.497 0 0012.49-5.905c4.616-2.262 9.708-4.23 15.274-5.905C85.871.837 91.913 0 98.43 0z" fill="#FFF" fill-rule="nonzero"/></svg>
				<svg className="wave-white" width="63" height="29" viewBox="0 0 63 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.1447 28.7186C51.2555 28.7186 55.2998 26.406 58.2776 21.781C61.2554 17.156 62.7443 10.8208 62.7443 2.77538H49.1225C48.8269 4.41027 48.2355 5.72249 47.3485 6.71203C46.4615 7.70157 45.1733 8.19634 43.4837 8.19634C41.9632 8.19634 40.3159 7.78762 38.5419 6.97017C36.7679 6.15273 34.8461 5.21697 32.7764 4.16289C30.7068 3.10881 28.4154 2.18381 25.9022 1.38787C23.389 0.591937 20.633 0.19397 17.6341 0.19397C12.2276 0.19397 7.97217 2.51724 4.86768 7.16378C1.76318 11.8103 0.210938 18.1133 0.210938 26.0726H13.8327C14.1284 24.4807 14.7936 23.19 15.8284 22.2005C16.8633 21.211 18.2466 20.7162 19.9783 20.7162C21.4144 20.7162 22.9983 21.1142 24.7301 21.9101C26.4618 22.706 28.4048 23.6418 30.5589 24.7174C32.7131 25.793 35.089 26.7287 37.6866 27.5247C40.2842 28.3206 43.1036 28.7186 46.1447 28.7186Z" fill="#fff"></path></svg>
			</div>
				</div>
				
		</div>
	)
}

const SlideImg =  ({title, desc, num}) => {
	return (
		<div className={`slide-image slide-image-${num}`}>
			<div className="slide-desc-wrapper">
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</div>
	)
}

export default Slide
