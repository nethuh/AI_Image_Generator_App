import React, {useRef, useState} from "react";
import './ImageGenerator.css'
import default_Image from '../Assets/default_image.svg'

const ImageGenerator = () => {

    const [image_url,setImage_url] = useState("/");
    let inputRef = useRef(null);

    const imageGenerator = async () =>{
        if (inputRef.current.value===""){
            return 0;
        }
        const response  = await fetch()
    }

    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={image_url==="/"?default_Image:image_url} alt=""/> </div>

            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want To See'/>
                <div className="generate-btn">Generator</div>

            </div>
        </div>
    )
}
export default ImageGenerator