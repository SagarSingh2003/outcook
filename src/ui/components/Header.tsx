import { currentFilterCode } from "@/atoms/filter";
import { filter_map } from "@/constants/filter_code";
import { useRecoilState } from "recoil";

export default function Header() {
  const [filter, setFilter] = useRecoilState(currentFilterCode);

  const handleChangeTab = (filterCode: number) => {
    setFilter(filterCode);
  };

  return (
    <header className="header">
      <span>Filter By :</span>
      <section className="header-section-nav">
        <span
          onClick={() => handleChangeTab(0)}
          style={
            filter === 0 ? { backgroundColor: "#E5E7EB", color: "#1F2937" } : {}
          }
        >
          {filter_map[0].toString()}
        </span>
        <span
          onClick={() => handleChangeTab(1)}
          style={
            filter === 1 ? { backgroundColor: "#E5E7EB", color: "#1F2937" } : {}
          }
        >
          {filter_map[1].toString()}
        </span>
        <span
          onClick={() => handleChangeTab(2)}
          style={
            filter === 2 ? { backgroundColor: "#E5E7EB", color: "#1F2937" } : {}
          }
        >
          {filter_map[2]}
        </span>
      </section>
    </header>
  );
}
