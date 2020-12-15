import React from 'react'

function Keypoints() {
  return (
    <div className="keypoints">
		  <div className="keypoints-title-wrapper">
			  <div className="keypoints-title-container">
			  	<h2>Our approach for<br />creating a winning<br/>brand</h2>
			  </div>
			</div>
			<div className="keypoints-container">
				<div className="keypoints-wrapper">
					<Keypoint title="Brand Strategy" number="01" description="Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key." />
					<Keypoint title="Brand Design" number="02" description="Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively." />
					<Keypoint title="Web Design" number="03" description="A beautifully crafted website is the best 	tool for brand awareness, and ultimately results in increased revenues."/>
				</div>
			</div>
    </div>
  )
}

const Keypoint = ({title, number, description}) => {
	return (
		<div className="keypoint">
			<h3>{title}</h3>
			<p className='number'>{number}</p>
			<p>{description}</p>
		</div>
	)
}

export default Keypoints;
