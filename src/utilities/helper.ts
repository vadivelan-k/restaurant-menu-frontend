const sortByDisplayOrder = (currentObject: any, nextObject: any) => {
  return currentObject.displayOrder - nextObject.displayOrder;
}

export default sortByDisplayOrder;
