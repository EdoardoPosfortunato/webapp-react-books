import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";


const Books = () => {

    const [books, setBooks] = useState([]);
    const [name, setName] = useState('');
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/books`).then((resp) => {
            setBooks(resp.data.data)
        });
    }, [])

    const handlePage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/books`, {
            params: {
                name,
                page,
            },
        }).then((resp) => {
            setBooks(resp.data.data)
        });
    }, [page]);


const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1)
    axios.get(`${import.meta.env.VITE_API_URL}/books`, {
        params: {
            name,
        },
    }).then((resp) => {
        setBooks(resp.data.data)
    });
}

return (
    <>
        <main>
            <section className="container py-5">
                <h1 className="text-center mb-5">Books Page</h1>
                <form
                    onSubmit={handleSubmit}
                    className="mb-4 d-flex justify-content-center">
                    <input
                        className="form-control w-50"
                        type="search"
                        placeholder='cerca...'
                        aria-label='cerca libro per titolo'
                        onChange={(e) => setName(e.target.value)} />
                    <button className="btn btn-success mx-2" type='submit'> Cerca</button>
                </form>
                <div className="row row-cols-2 row-cols-md-3 g-4">
                    {books.map((curBook, index) => (
                        <div key={index} className="col">
                            <BookCard
                                book={curBook}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <button
                        className="btn btn-outline-dark"
                        onClick={handlePage}
                    >Pagina Successiva</button>
                </div>
            </section>
        </main>
    </>
)
}

export default Books;