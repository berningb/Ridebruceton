import React from 'react'
import '../../../Styles/Info.scss';

const Info = () => {
    return (
        <div id='info-section'>
            <div id='info-wrapper'>
                <InfoBox title={'We Make it Easy'} 
                            link={"https://img.icons8.com/ios/50/000000/easy.png"} 
                            message={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Rem repudiandae laudantium labore voluptatum neque amet veniam 
                            nesciunt laboriosam esse numquam est nihil dicta. Ipsa!`}/>
                            
                <InfoBox title={'Fair and Transparent Pricing'}
                            link={"https://img.icons8.com/ios/50/000000/price-tag-usd.png"}
                            message={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Rem repudiandae laudantium labore voluptatum neque amet veniam 
                            nesciunt laboriosam esse numquam est nihil dicta. Ipsa!`}/>
                            
                <InfoBox title={'Happiness Guaranteed'}
                            link={"https://img.icons8.com/ios/50/000000/motorcycle.png"}
                            message={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Rem repudiandae laudantium labore voluptatum neque amet veniam 
                            nesciunt laboriosam esse numquam est nihil dicta. Ipsa!`}/>
            </div>

            <div className='link'>
                <img src="https://img.icons8.com/ios/50/000000/overtime.png"/>
                <h3>Want to set up an appointment?</h3>
                <p>
                    <span>Click 
                        <a href="https://www.facebook.com/Brucetonriders/#"> here </a>
                        to get schedule an appointment. Or feel free to call <br/> <span style={{color: 'red'}}>(731) 252-0202</span>
                    </span> 
                </p>
            </div>
            
        </div>
    )
}

export default Info;



const InfoBox = ({title, link, message}) => {

    return (
        <div className='info-box'>
            <img src={link}/>
            <h3>{title}</h3>
            <p>
                {message}
            </p>
        </div>
    )
}
