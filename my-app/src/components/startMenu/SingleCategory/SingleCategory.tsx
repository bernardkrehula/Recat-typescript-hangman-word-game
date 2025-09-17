import type { Category } from "../../../main/HangmanType";
import Btn from "../../Btn/Btn";

type SingleCategoryTypes = {
    index: number;
    category: Category;
    handleCategoryClick: (value: Category) => void;
}

const SingleCategory = ({index, category, handleCategoryClick}: SingleCategoryTypes) => {

    return(
        <Btn key={index} variation='primary' onClick={() => {handleCategoryClick(category)}}>{category}</Btn>
    )
}

export default SingleCategory;