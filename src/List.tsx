import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import ListContainer from "./components/list-container";
import ListItem from "./components/list-item";
import { ListData } from "./types";

const useListData = () => {
  return useQuery<ListData[]>(["list"], () =>
    fetch("/api/list").then((res) => res.json())
  );
};

const List = () => {
  const { data: list, isLoading } = useListData();

  return (
    <>
      <ListContainer>
        {list?.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ListContainer>
      <Outlet />
    </>
  );
};

export default List;
