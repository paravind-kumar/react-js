
const withStyle = (WrappedComponent) => {
  const NewComponent = (props) => {
    return (
      <div style={{ border: "2px solid red", padding: 10 }}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return NewComponent;
};

export default withStyle;
