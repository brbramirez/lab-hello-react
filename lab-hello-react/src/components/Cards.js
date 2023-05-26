function Card ({img, title,text}) {
    return(
        <div>
            <img src={img} alt="Icon" />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Card;