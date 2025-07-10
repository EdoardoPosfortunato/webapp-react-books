import Stars from "./Stars";

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
                        <figcaption className="blockquote-footer mt-4">
                            {text} <cite title="Source Title">{created_at}</cite>
                        </figcaption>
                            <Stars vote = {vote}/>
                    </figure>
                </div>
            </div>
        </>
    );
};

export default ReviewsCard;