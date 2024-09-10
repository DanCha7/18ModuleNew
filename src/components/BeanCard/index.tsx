import { FC } from "react";
import { Link } from "react-router-dom";
import { Bean } from "../../types/bean";
import "/src/components/BeanCard/style.css";

type Props = {
  data: Bean;
};
export const BeanCard: FC<Props> = ({ data }) => {
  return (
    <Link
      to={`/bean/${data.beanId}`}
      className="wrapper"
      style={{
        background: data.backgroundColor,
      }}
    >
      <img src={data.imageUrl} alt="" />
      <h3>{data.flavorName}</h3>
      <p>{data.description}</p>
    </Link>
  );
};
