import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import { RecipeCard } from "../../components/RecipeCard";
import "/src/pages/Recipes/style.css"
<style className="css"></style>;
import { getRecipes } from "../../api/recipes";
import { useAppDispatch } from "../../redux/store";
import { RecipesSelector } from "../../redux/recipes/recipesSelector";

export const RecipesPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, totalPages} = useSelector(RecipesSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getRecipes(page));
  }, [page]);

  const load = () => {
    setPage(page + 1);
  };

  return (
    <div className="recipes_container">
      <h1 className="loading__cl">Recipes ...</h1>
      {isLoading && data.length === 0 ? (
        <Loader />
      ) : (
        <InfiniteScroll
          next={load}
          dataLength={data.length}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          {data.map((item) => (
            <RecipeCard key={item.recipeId} data={item} />
          ))}
        </InfiniteScroll>
      )}
      {/* {isError && <Error />} */}
    </div>
  );
};