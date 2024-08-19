import "./Headline.css";

interface Props {
  step: string;
  value: string;
}

const Headline = (props: Props) => {
  return (
    <div className="headline">
      <h5>
        <span>{props.step}</span> {props.value}
      </h5>
    </div>
  );
};

export default Headline;
