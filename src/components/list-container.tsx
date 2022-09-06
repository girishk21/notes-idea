const ListContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="col-start-3 col-end-7">
      <ul className="flex flex-col gap-4 py-16">{children}</ul>
    </div>
  );
};

export default ListContainer;
