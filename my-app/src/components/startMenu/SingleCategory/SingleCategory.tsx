import Btn from "../../Btn/Btn";

const SingleCategory = ({index, category, handleCategoryClick}) => {

    return(
        <Btn key={index} onClick={() => {handleCategoryClick(category)}}>{category}</Btn>
    )
}

export default SingleCategory;