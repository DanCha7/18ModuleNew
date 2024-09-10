import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import "./style.css";
import { useAppDispatch } from "../../redux/store";
import { getCombinations } from "../../api/combinations";
import { combinationsSelector } from "../../redux/combinations/combinationsSelector";

export const CombinationsPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, totalPages} =
    useSelector(combinationsSelector);
  const [page, setPage ] = useState(1);

  useEffect(() => {
    dispatch(getCombinations(page));
  }, [dispatch , page]);

  const load = () => {
    setPage(page + 1);
  };
  return (
    <div className="combinations_container">
      <h1 className="loading__cl">Explore Combinations ...</h1>
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
            <div
              key={`combination_item_${item.combinationId}`}
              className="item"
            >
              <h3>{item.name}</h3>
              <p>{item.tag.map((item) => item + " ")}</p>
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};