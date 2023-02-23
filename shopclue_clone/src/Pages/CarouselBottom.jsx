import React from 'react'
import "./Style/bottom.css"
import { Grid, GridItem } from '@chakra-ui/react';
const CarouselBottom = () => {
  return (
    <div className='bottom'>
        
        <div className='bottom1'>
            <img src="https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg" alt="" style={{width:"40%"}}/>
            <h3>Name:Venerate headPhone Stand</h3>
            <h5>Price:200</h5>
            <h5>Rating:4.5</h5>
        </div>
        <div className='bottom2'>
        <img src="https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1665754103.jpg" alt="" style={{width:"40%"}}/>
            <h3>Name:Mobile Nokia1300</h3>
            <h5>Price:1200</h5>
            <h5>Rating:4.4</h5>
        </div>
        <div className='bottom3'>
        <img src="https://cdn.shopclues.com/images1/thumbnails/71795/200/200/128902274-71795769-1653057803.jpg" alt="" style={{width:"40%"}}/>
            <h3>Name:Primium Quality NylonBled</h3>
            <h5>Price:130</h5>
            <h5>Rating:4.5</h5>
        </div>
        <div className='bottom4'>
        <img src="https://cdn.shopclues.com/images1/thumbnails/115044/200/200/152634665-115044372-1629705035.jpg" alt="" style={{width:"40%"}} />
            <h3>Name:Data Charging</h3>
            <h5>Price:300</h5>
            <h5>Rating:4.6</h5>
        </div>
        <div className='bottom5'>
        <img src="https://cdn.shopclues.com/images1/thumbnails/95123/200/200/142672875-95123237-1645016499.jpg" alt="" style={{width:"40%"}} />
            <h3>Name:USB Type c Cable</h3>
            <h5>Price:450</h5>
            <h5>Rating:4.8</h5>
        </div>
    </div>
  )
}

export default CarouselBottom