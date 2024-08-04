/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function TheHeaderElement(props){
    return(
            <div className="TheHeaderEle">
                <img className="TheIconOfIamge" src={props.TheImageSrc} alt="" />
                <p className="TheTitle">{props.TheTitle}</p>
            </div>
    )
}