import { useParams } from "react-router-dom";

const Show = () => {

    const {id} = useParams();

    return(
        <>
            <h1> SHOW BOOK </h1>
            <p>The book you should see is Book id: {id}</p>
        </>
    )
}

export default Show;