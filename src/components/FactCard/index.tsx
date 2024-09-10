import { FC } from "react";
import { Fact } from "../../types/bean";
import style from "./style.module.css"

type Props = {
  data: Fact;
};
export const FactCard: FC<Props> = ({ data }) => {
  return (
    <div className={style.wrapper}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};