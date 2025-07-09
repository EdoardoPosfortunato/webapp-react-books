import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/books').then((resp) => {
            setBooks(resp.data.data)
        });
    }, [])

    return (
        <>
            <main>
                <section className="container py-5">
                    <h1 className="text-center">Books Page</h1>
                    <div className="row row-cols-2 row-cols-md-3 g-4">
                        {books.map((curBook, index) => (
                            <div key={index} className="col">
                                <BookCard 
                                book={curBook}
                                 />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Books;