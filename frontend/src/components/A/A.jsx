const A = (props) => {
  const { className } = props;

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <a href="#" className={className} onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default A;
