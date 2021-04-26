const Job = (props) => {
  return (
    <div className={`${props.classname} ${props.color}`}>
      <p>{props.title}</p>

      <div>
        <span>{props.contractType} - </span>
        <span>{props.country} - </span>
        <span>{props.city}</span>
      </div>
    </div>
  );
};

export default Job;
