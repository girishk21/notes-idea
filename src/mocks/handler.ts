import { rest, RestHandler } from "msw";
import { ListData } from "../types";

const data: ListData[] = [
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim mattis auctor. Praesent facilisis iaculis.",
    id: "1",
    title: "Lorem ipsum dolor",
  },
  {
    body: "Nam hendrerit mollis lacus at fermentum. Curabitur mollis rhoncus vulputate. Maecenas ac ultricies est. Etiam.",
    id: "2",
    title: "Nam hendrerit mollis",
  },
  {
    body: "Pellentesque imperdiet lacus in mollis commodo. Suspendisse potenti. Vivamus congue velit vitae consequat placerat. In.",
    id: "3",
    title: "Pellentesque imperdiet",
  },
  {
    body: "Morbi a neque sed massa auctor sagittis ac nec nibh. Proin et euismod nisi. Morbi.",
    id: "4",
    title: "Morbi a neque",
  },
  {
    body: "Curabitur aliquam vulputate mauris ac aliquet. Ut dapibus, sapien in efficitur elementum, dui nisi suscipit.",
    id: "5",
    title: "Curabitur aliquam",
  },
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim mattis auctor. Praesent facilisis iaculis.",
    id: "6",
    title: "Lorem ipsum dolor",
  },
  {
    body: "Nam hendrerit mollis lacus at fermentum. Curabitur mollis rhoncus vulputate. Maecenas ac ultricies est. Etiam.",
    id: "7",
    title: "Nam hendrerit mollis",
  },
  {
    body: "Pellentesque imperdiet lacus in mollis commodo. Suspendisse potenti. Vivamus congue velit vitae consequat placerat. In.",
    id: "8",
    title: "Pellentesque imperdiet",
  },
  {
    body: "Morbi a neque sed massa auctor sagittis ac nec nibh. Proin et euismod nisi. Morbi.",
    id: "9",
    title: "Morbi a neque",
  },
  {
    body: "Curabitur aliquam vulputate mauris ac aliquet. Ut dapibus, sapien in efficitur elementum, dui nisi suscipit.",
    id: "10",
    title: "Curabitur aliquam",
  },
  {
    body: "Morbi a neque sed massa auctor sagittis ac nec nibh. Proin et euismod nisi. Morbi.",
    id: "11",
    title: "Morbi a neque",
  },
  {
    body: "Curabitur aliquam vulputate mauris ac aliquet. Ut dapibus, sapien in efficitur elementum, dui nisi suscipit.",
    id: "12",
    title: "Curabitur aliquam",
  },
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim mattis auctor. Praesent facilisis iaculis.",
    id: "13",
    title: "Lorem ipsum dolor",
  },
  {
    body: "Nam hendrerit mollis lacus at fermentum. Curabitur mollis rhoncus vulputate. Maecenas ac ultricies est. Etiam.",
    id: "14",
    title: "Nam hendrerit mollis",
  },
  {
    body: "Pellentesque imperdiet lacus in mollis commodo. Suspendisse potenti. Vivamus congue velit vitae consequat placerat. In.",
    id: "15",
    title: "Pellentesque imperdiet",
  },
];

export const handlers: RestHandler[] = [
  rest.get("/api/list", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.get("/api/list/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.find((item) => item.id === req.params.id))
    );
  }),
  rest.post("/api/list/:id", async (req, res, ctx) => {
    const id = req.params.id;
    const body = await req.json();

    const index = data.findIndex((item) => item.id === id);
    data[index] = { ...data[index], ...body };

    return res(ctx.status(200));
  }),
];
