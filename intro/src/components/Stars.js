import Star from "./Star";
import { v4 as uuidv4 } from 'uuid';

function Stars( {count} ) {

  const starsCount = [];
  for (let i = 0; i < count; i += 1) {
    starsCount.push(<Star key={uuidv4()} />);
  }

  return (
    <ul className="card-body-stars u-clearfix">
     { typeof count === 'number' && 1 <= count && count <= 5 && starsCount }
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

export default Stars;
