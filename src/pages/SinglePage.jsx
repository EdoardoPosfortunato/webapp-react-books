import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ReviewsCard from "../components/ReviewsCard";
import BackBtn from "../components/BackBtn";
import Stars from "../components/Stars";

const SingleBook = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`).then((resp) => {
            setBook(resp.data.data)
            console.log(resp.data.data)
        })
    }, [])


    return (
        <>

            {
                book && <book className="image"></book> && (
                    <section>
                        <img className="banner" src={book.image} alt="" />
                    </section>
                )}
            <main className="container">
                {book && (
                    <>
                        <BackBtn />
                        <section>
                            <h1 className="text-center my-4">{book.title}</h1>
                            <div className="text-center my-2">
                                <Stars
                                    vote={book.vote_avg}
                                />
                            </div>
                            <h4 className="text-center">{book.author}</h4>
                            <p className="text-center">{book.abstract}</p>
                        </section>
                        <section>
                            <h2>L'Angolo delle Recensioni</h2>
                            {book.reviews.lenght === 0 ? (
                                <div>Per il momento nessuna recensione</div>
                            ) : (
                                <div className="row row-cols-1 gap-2">
                                    {book.reviews.map((curReview) => (
                                        <div className="col my-2" key={curReview.id}>
                                            <ReviewsCard review={curReview} />
                                        </div>
                                    ))}
                                </div>
                            )}

                        </section>


                    </>

                )}
            </main>
        </>


    )
}

export default SingleBook;