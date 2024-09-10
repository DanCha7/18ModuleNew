import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { BeanCard } from "../../components/BeanCard";
import { Loader } from "../../components/Loader";
import { getBeans } from "../../api/beans";
import { beansSelector } from "../../redux/beans/beansSelector";
import { useAppDispatch } from "../../redux/store";
import "/src/pages/Beans/style.css";

export const BeansPage = () => {
  const dispatch = useAppDispatch();
  const { data, totalPages, isLoading } = useSelector(beansSelector);
  const [page, setPage] = useState(data.length ? data.length / 15 : 1);

  const getNewData = useCallback(() => {
    dispatch(getBeans(page));
  }, [page, dispatch]);

  useEffect(() => {
    if (!(data.length / 15 >= page)) {
      getNewData();
    }
  }, [page, getNewData]);

  const load = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="beans_container">
      <h1 className="loading__cl">Explore All Beans ...</h1>
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
            <BeanCard key={item.beanId} data={item} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};
