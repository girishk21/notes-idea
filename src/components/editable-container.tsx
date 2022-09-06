const EditableContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="col-start-8 col-end-11 sticky top-16 self-start">
      {children}
    </div>
  );
};

export default EditableContainer;
