import { Link, Links } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="">
                <h1 >Ciao sono la home</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aut non accusantium omnis, nam nobis hic quo numquam porro consectetur iste, atque cupiditate similique. Voluptate consectetur obcaecati libero reiciendis minus.</p>
                <Link class='btn btn-primary my-5' to="/books">Vai al nostro catalogo</Link>
            </div>
        </>
    )
}

export default Home;