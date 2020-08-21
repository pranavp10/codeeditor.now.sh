import Card from './Card';
import ListContainer from './ListContainer';
import { extension } from '../json/extension';

const Extensions = () => (
  <ListContainer heading="Vs Code extension for the Frontend developers">
    {extension.map((data, index) => (
      <Card key={index} {...data} />
    ))}
  </ListContainer>
);
export default Extensions;
