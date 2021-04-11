// ENUMS

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uId: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uId: 1,
  resourceType: ResourceType.BOOK,
  data: {
    message: 'Hello',
  },
};

let tup: [string, number, boolean] = ['40', 25, true];
