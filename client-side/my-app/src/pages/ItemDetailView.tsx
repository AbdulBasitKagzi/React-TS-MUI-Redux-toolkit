import { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { RootState } from "../store/userSlice/store";

const ItemDetailView: React.FC = () => {
  const { selectedProduct } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    console.log("selected", selectedProduct);
  }, [selectedProduct]);
  return (
    <div>
      <Layout>Item Detail View</Layout>
    </div>
  );
};

export default ItemDetailView;
