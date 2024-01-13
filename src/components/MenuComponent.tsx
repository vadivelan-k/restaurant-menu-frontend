import { useQuery, gql } from '@apollo/client';
import MenuBar from './MenuBar';
import MenuSection from './MenuSection';
import './MenuComponent.css'

const GET_MENU_DATA = gql`
  query Menu($id: ID!) {
    menu(id: $id) {
      id
      label
      menuSections {
        sectionId
        displayOrder
        sectionLabel
      }
      sections {
        id
        label
        items {
          id
          label
          description
          price
          modifierGroups {
            label
            modifiers {
              priceOverride
              item {
                label
                description
              }
            }
          }
        }
      }
    }
  }
`;

const renderMenu = () => {
  const { loading, error, data } = useQuery(GET_MENU_DATA, { variables: { id: 38 }});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { menu: { id, label, menuSections, sections } } = data;

  return (
    <>
      <div className='col-4' key={`menu-list-${id}`}>
        <MenuBar menuSections={menuSections} label={label} id={id} />
      </div>
      <div className='col-8'>
        <MenuSection sections={sections} />
      </div>
    </>
  );
}

const MenuComponent = () => {
  return (
    renderMenu()
  );
}

export default MenuComponent;
