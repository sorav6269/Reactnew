import React from 'react'
import Card from './Card'
import img1 from '../../src/image/sor.jpg'
import img3 from '../../src/image/training.png'
import img4 from '../../src/image/thinking.png'
import img5 from '../../src/image/collaborative1.jpg'
import './card.css'
function CardCopmponent() {
  return (
<>
card.css
<h1 className='heading'>Card Gwallery</h1>
<div className='cardComp'>
<Card title="1" img={img1}/>
<Card title="1" img={img3}/>
<Card title="1" img={img4}/>
<Card title="1" img={img5}/>
</div>
</>
)
}

export default CardCopmponent