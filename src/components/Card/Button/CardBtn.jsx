import { Button } from './CardBtn.styled';

export const CardBtn = ({ text, type, isActive, onClick }) => {
  return isActive ? (
    <Button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: '#5cd3a8' }}
    >
      {text}
    </Button>
  ) : (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};
