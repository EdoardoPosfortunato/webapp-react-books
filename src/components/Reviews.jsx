import ReviewsCard from "./ReviewsCard"



const ReviewsList = ( {reviews}) => {

    return (
        <>
        {reviews.lenght === 0 ? (
            <div>Per il momento nessuna recensione</div>
        ) : (
            <div className="row row-cols-1 gap-2">
                {reviews.map((curReview) => (
                    <div className="col my-2" key={curReview.id}>
                        <ReviewsCard review={curReview} />
                    </div>
                ))}
            </div>
        )}

        </>
    )
}

export default ReviewsList

