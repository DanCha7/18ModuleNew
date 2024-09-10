import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import "./style.css";
import { getHistory } from "../../api/history";
import { useAppDispatch } from "../../redux/store";
import { historySelector } from "../../redux/history/historySelector";

export const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, totalPages} = useSelector(historySelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getHistory(page));
  }, [page]);

  const load = () => {
    setPage(page + 1);
  };
  return (
    <div className="history_container">
      <h1 className="loading__cl">History ...</h1>
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
            <div className="item" key={`history_item_${item.mileStoneId}`}>
              <h3>{item.year}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};