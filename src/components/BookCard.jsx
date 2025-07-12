import { Link } from "react-router-dom";

const BookCard = ({ book }) => {

    const { slug, title, author, abstract, image } = book

    return (
        <>
            <div className="card h-100">
                <img src={image || "https://placehold.co/300x300"} className="card-img-top img-fluid w-100" alt={`immagine di ${title}`} />
                <div className="card-body">
                    <h5 className="card-title">{author} - {title}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/books/${slug}`} className="btn btn-primary">Dettagli
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BookCard;