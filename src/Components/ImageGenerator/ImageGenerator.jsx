import React from "react";
import './ImageGenerator.css'
import default_Image from '../Assets/default_image.svg'

const ImageGenerator = () => {
    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={default_Image} alt=""/> </div>

            </div>
            <div className="search-box">
                <input type="text" className='search-input' placeholder='Describe What You Want To See'/>
                <div className="generate-btn">Generator</div>

            </div>
        </div>
    )
}
export default ImageGenerator