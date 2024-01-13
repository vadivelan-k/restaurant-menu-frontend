interface MenuTitleProps {
  label: String;
}
const MenuTitle = ({ label }: MenuTitleProps) => {
  return (
    <>
      <h4>{label}</h4>
    </>
  );
};

export default MenuTitle;
