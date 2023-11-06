import cardMapping from "./cardMap";

type CardFrontProps = {
  value: number;
  suite: string;
};

function CardFront({ value, suite }: CardFrontProps) {
  return <img src={cardMapping[`${value}${suite}`]} />;
}

export default CardFront;
