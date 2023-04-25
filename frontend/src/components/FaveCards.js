export default function FaveCards({title, image}){
    return (
        <article className="fave-cards">
            <img src={image} alt={title} />
            <h4>{title}</h4>
        </article>
    )
}