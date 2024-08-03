'use client'

const Noticia = (props) => {
    return (
        <div>
             <div>{ props.noticia.titulo }</div>
             {props.noticia.img}
             <img src={props.noticia.img} alt="noticia"/> 
             <div dangerouslySetInnerHTML={{__html:props.noticia.texto}}/>
        </div>
    )
}

export default Noticia