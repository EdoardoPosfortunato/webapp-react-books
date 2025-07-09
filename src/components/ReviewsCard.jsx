const ReviewsCard = ( {review} ) => {

    const { name, vote, text, created_at } = review

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {name}
                </div>
                <div className="card-body">
                    <figure>
                        <blockquote className="blockquote">
                            <p>Voto: {vote}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            {text} <cite title="Source Title">{created_at}</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
};

export default ReviewsCard;