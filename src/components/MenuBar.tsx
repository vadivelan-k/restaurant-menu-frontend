import MenuItem from './MenuItem'
import sortByDisplayOrder from '../utilities/helper';

interface MenuItemProps {
  sectionId: String;
  sectionLabel: String;
  displayOrder: Number;
}

interface MenuBarProps {
  id: String;
  label: String;
  menuSections: MenuItemProps[]
}

const MenuBar = ({ label, menuSections }: MenuBarProps) => {
  const renderItems = () => {
    return (
      menuSections.slice().sort(sortByDisplayOrder).map(menuSection => (
        <MenuItem props={menuSection} key={`menu-item-${menuSection.sectionId}`} />
      ))
    );
  }

  return (
    <>
      <nav id="menu-bar" className="navbar navbar-light bg-light">
        <nav className="nav nav-pills flex-column">
          <h3 className='menu-label'>{label}</h3>
          <br />
          {
            renderItems()
          }
        </nav>
      </nav>
    </>
  );
};

export default MenuBar;