import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { beansSelector } from "../../redux/beans/beansSelector";
import "/src/pages/BeanPage/style.css";

export const BeanPage = () => {
  const { id } = useParams();
  const { data } = useSelector(beansSelector);

  const dataItem = id ? data.find((bean) => bean.beanId === +id) : null;

  if (!dataItem) {
    return <p>Такой элемент не найден</p>;
  }

  return (
    <>
      {data && (
        <div
          className="bean_container"
          style={{ background: dataItem.backgroundColor }}
        >
          <img src={dataItem.imageUrl} alt="" />
          <div className="info">
            <h1>{dataItem.flavorName}</h1>
            <h3>{dataItem.description}</h3>
            <p>
              Ingredients: {dataItem.ingredients.map((item) => item + " , ")}
            </p>
            <p>{dataItem.glutenFree ? "No gluten" : "With gluten"}</p>
          </div>
        </div>
      )}
    </>
  );
};
