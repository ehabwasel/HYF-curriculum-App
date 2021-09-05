import { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { ItemContext } from "./ItemsContext";
import { getRadarChartUrl, getBarChartUrl } from "../util/getChartUrl";

const Result = () => {
  const [items, setItems] = useContext(ItemContext);
  const arrayValue = items.map((item) => item.value);
  const { type } = useParams();
  const url = type === "radar" ? getRadarChartUrl(arrayValue) : getBarChartUrl(arrayValue);

  return (
    <>
      <ItemList />

      <img src={url} alt="" />
    </>
  );
};

export default Result;
