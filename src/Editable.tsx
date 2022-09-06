import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import EditableContainer from "./components/editable-container";
import { ListData } from "./types";

const Editable = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<ListData>(["list", id], () =>
    fetch(`/api/list/${id}`).then((res) => res.json())
  );
  const mutatation = useMutation(
    ({ title, body }: ListData) =>
      fetch(`/api/list/${id}`, {
        method: "POST",
        body: JSON.stringify({ title, body }),
      }),
    {
      onMutate: ({ body, title }) => {
        if (!id) {
          return;
        }
        queryClient.setQueryData<ListData>(["list", id], { body, id, title });
      },
    }
  );

  return (
    <EditableContainer key={id}>
      {isLoading ? null : (
        <div>
          <form
            onChange={(e) => {
              e.preventDefault();
              const data = new URLSearchParams(
                new FormData(e.currentTarget) as any
              );
              mutatation.mutate({
                body: data.get("content")!,
                id: id!,
                title: data.get("title")!,
              });
            }}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" defaultValue={data?.title} />
              <label htmlFor="content">Content</label>
              <textarea id="content" name="content" defaultValue={data?.body} />
            </div>
          </form>
        </div>
      )}
    </EditableContainer>
  );
};

export default Editable;
