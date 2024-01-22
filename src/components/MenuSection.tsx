import classNames from 'classnames';
import SectionItem from "./SectionItem";
import SectionTitle from './SectionTitle';
import './MenuSection.css';

interface Item {
  id: String;
  label: String;
  description: String;
  price: Number;
  disabled: Boolean;
}

interface Section {
  id: String;
  label: String;
  items: Item[]
  disabled: Boolean;
}

interface Sections {
  sections: Section[]
}

const MenuSection = ({ sections }: Sections) => {
  const sectionItems = sections.map(section => {
    const { id, label, items, disabled } = section;
    const classes = classNames('section-container btn-group', { 'disabled': disabled });
    return (
      <div id={`section-${id}`} key={`section-item-${id}`} className={classes}>
        <SectionTitle label={label} />
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {
            items.map(item => {
              return (
                <SectionItem
                  item={item}
                  key={`section-item-${item.id}`}
                />
              )
            })
          }
        </div>
      </div>
    )
  });

  return (
    <>
      <div data-spy="scroll" data-target="#menu-bar" data-offset="0" className="item-container">
        {
          sectionItems
        }
      </div>
    </>
  );
};

export default MenuSection;
