interface MenuItemProps {
  props: {
    sectionId: String;
    sectionLabel: String;
  }
}

const MenuItem = ({ props }: MenuItemProps) => {
  return (
    <a className="nav-link" href={`#section-${props.sectionId}`} key={`#section-${props.sectionId}`}>
      { props.sectionLabel }
    </a>
  );
}

export default MenuItem;
