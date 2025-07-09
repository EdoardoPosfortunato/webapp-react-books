const BookCard = ({ book }) => {

    const { id, title, author, abstract, image } = book

    return (
        <>
            <div className="card h-100">
                <img src={image} className="card-img-top img-fluid w-100" alt={`immagine di ${title}`} />
                <div className="card-body">
                    <h5 className="card-title">{author} - {title}</h5>
                    <p className="card-text">{abstract}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default BookCard;