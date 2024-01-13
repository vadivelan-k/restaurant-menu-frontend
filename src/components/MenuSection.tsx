import SectionItem from "./SectionItem";
import SectionTitle from './SectionTitle';

interface Item {
  id: String;
  label: String;
  description: String;
  price: Number;
}

interface Section {
  id: String;
  label: String;
  items: Item[]
}

interface Sections {
  sections: Section[]
}

const MenuSection = ({ sections }: Sections) => {
  const sectionItems = sections.map(section => {
    return (
      <div id={`section-${section.id}`} key={`section-item-${section.id}`} className="btn-group" style={{ display: 'block' }}>
        <SectionTitle label={section.label} />
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {
            section.items.map(item => {
              return (
               <SectionItem item={item} key={`section-item-${item.id}`} />
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
