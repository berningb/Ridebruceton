import React from 'react'
import Carousel from '../../Components/Carousel'
import '../../Styles/Merch.scss';

import data from '../../API/fakeData'

const Merch = () =>  {

    return (
        <div className='merch content'>
            <h2>Our In Store Merch</h2>
            <Carousel height='720px' data={data.merch} />
        </div>
        )
}

export default Merch;