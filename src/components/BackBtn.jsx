import { useNavigate } from "react-router-dom"

const BackBtn = () => {

    const navigate = useNavigate()

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    return (
        <>
            <a
                className="btn btn-secondary mt-5"
                href=''
                onClick={goBack}>Ritorna alla Home</a>
        </>
    )

}

export default BackBtn;