import * as S from "./styles";

const SandwichMenu = ({ onClick }) => {
  return (
    <S.SandwichMenuBox
      onClick={() => {
        onClick(true);
      }}
    >
      <S.SMLine />
      <S.SMLine />
      <S.SMLine />
    </S.SandwichMenuBox>
  );
};

export default SandwichMenu;
