import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { ListData } from "../types";

const ListItem: React.FC<{
  item: ListData;
}> = ({ item }) => {
  const { data } = useQuery<ListData>(
    ["list", item.id],
    () => fetch(`/api/list/${item.id}`).then((res) => res.json()),
    {
      initialData: item,
      staleTime: 1000,
    }
  );

  return (
    <li>
      <Link to={data?.id ?? ""}>
        <div className="rounded-md border border-solid border-gray-300 p-4">
          <h2 className="text-lg font-bold text-gray-900">{data?.title}</h2>
          <p className="text-sm text-gray-500">{data?.body}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
