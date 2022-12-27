import { UL } from './CollectionList.styled';
import { CollectionItem } from './CollectionItem/CollectionItem';
import { Card } from '../Card/Card';

export const CollectionList = ({ users }) => {
  return (
    <UL>
      {users.map(({ ...props }) => (
        <CollectionItem key={props.id}>
          <Card userdata={props} />
        </CollectionItem>
      ))}
    </UL>
  );
};
