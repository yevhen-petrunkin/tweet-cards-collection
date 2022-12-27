import { UL } from './CollectionList.styled';
import { CollectionItem } from './CollectionItem/CollectionItem';
import { Card } from '../Card/Card';

export const CollectionList = () => (
  <UL>
    <CollectionItem>
      <Card />
    </CollectionItem>
  </UL>
);
