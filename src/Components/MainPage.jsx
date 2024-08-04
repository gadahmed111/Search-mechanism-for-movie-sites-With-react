/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import TheHeader from './Header/HeaderParent';
export default function TheMainPage() {
    let [Filems,SetFilems] = useState([])
    let [ApperFilmes,SetApperFilmes] = useState([])
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
        .then(res => res.json())
        .then(data => SetFilems(data))
    },[])
    useEffect(() => {
        if (Filems.length > 0){
            console.log(Filems)
        }
    },[Filems])
    useEffect(() => {
        SetApperFilmes(Filems)
    },[Filems])
    const TheFilmBody = ApperFilmes.map((ele) => {
        return(
            <div className="TheBosterImage">
                <div className="TheImageContiner" style={{backgroundImage:`url(${ele.Images})`}}>
                    <span className='TheYearOfProduction'>{ele.Year}</span>
                </div>
                <h4 key={ele.id}>{ele.Title}</h4>
                <div className='IDm'>TMDB <span style={{color:"white"}}>{ele.imdbRating}</span></div>
            </div>
        )
    })
    return (
        <div className="TheMainPage">
                <TheHeader />
                <div className="TheInput">
                    <div className="TheInputBody">
                        <input onChange={(e) => {
                            const FilmFilter = Filems.filter((filmele) => {
                                if (filmele.Title.toLowerCase().includes(e.target.value.toLowerCase())){
                                    return Filems
                                }
                            })
                            SetApperFilmes(FilmFilter)
                        }} type="text" className='TheInputSearch' placeholder='Search' />
                        <img style={{width:"27px"}} src="./public/image's/TheHeaderImage/search.svg" alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='TheFilem'>The Filmes</h3>
                </div>
                <hr />
                <div className="TheFilemsBod">
                    {TheFilmBody}
                </div>
        </div>
    )
}