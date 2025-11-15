import Counter from "./components/Count"
import Info from "./components/Info";
import ProductTable from "./components/ProductTable";

export default function page() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 py-20">
      <Counter color="blue"/>
      <Counter countBy={2} color="green"/>

      <Info />

      <ProductTable />
    </div>
    </>
  );
}
