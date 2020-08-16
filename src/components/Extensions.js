import Card from './Card';
import ListContainer from './ListContainer';
import { extension } from '../json/extension';

const Extensions = () => (
  <ListContainer>
    {extension.map((data, index) => (
      <Card key={index} {...data} />
    ))}
  </ListContainer>
);
export default Extensions;
