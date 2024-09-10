import { FC } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../types/bean";
import "/src/components/RecipeCard/style.css";

type Props = {
  data: Recipe;
};
export const RecipeCard: FC<Props> = ({ data }) => {
  return (
    <Link to={`/recipe/${data.recipeId}`} className="recipe">
      <img src={data.imageUrl} alt="" />
      <div className="">
        <h3>{data.name}</h3>
        <p className="">
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </p>
        {data.makingAmount && <p className=""> Make: {data.makingAmount}</p>}
        {data.cookTime && <p className="">Cook Time: {data.cookTime}</p>}
        {data.totalTime && <p className="">Total Time: {data.totalTime}</p>}
      </div>
    </Link>
  );
};
