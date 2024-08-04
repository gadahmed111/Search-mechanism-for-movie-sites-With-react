/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import TheHeaderelement from './HeaderElement'
import TheNameOfWebsite from './TheWebsiteName';
let TheJsonHeaderELemnets = [
    {
        id:1,
        SrcOFImage:"./public/image's/TheHeaderImage/home.svg",
        title:"home"
    },
    {
        id:2,
        SrcOFImage:"./public/image's/TheHeaderImage/film.svg",
        title:"Filmes"
    },
    {
        id:3,
        SrcOFImage:"./public/image's/TheHeaderImage/video-camera.svg",
        title:"Video"
    },
    {
        id:4,
        SrcOFImage:"./public/image's/TheHeaderImage/television.svg",
        title:"Animes"
    },
    {
        id:5,
        SrcOFImage:"./public/image's/TheHeaderImage/play.svg",
        title:"Play"
    },
    {
        id:6,
        SrcOFImage:"./public/image's/TheHeaderImage/cc.svg",
        title:"Translate"
    }
    
]
export default function TheHeader(){
    const TheMapingElement = TheJsonHeaderELemnets.map((ele) => {
        return(
            
            <TheHeaderelement key={ele.id} TheImageSrc={ele.SrcOFImage} TheTitle={ele.title}/>
        )
    })
    return(
        <div className='TheHeader'>
            <div className="HeadereleParnt">
            {
                TheMapingElement
            }
            </div>
            <div className="TheWebSiteNAme">
            <TheNameOfWebsite/>
            </div>
        </div>
    )
}