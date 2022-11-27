export interface UserInterface {
  id: number;
  name: string;
}
interface TestInterface {
  year?: number | null;
}

const test: TestInterface = {
  year: undefined,
};

// let assign: null = undefined;
// let assign2: undefined = null;
// let assign_name: string | null = undefined;
// let assign_name2: string | undefined = null;
// let assign_name3: string = null;
// let assign_name4: string = undefined;

export const users: UserInterface[] = [
  {
    id: 0,
    name: 'admin',
  },
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Sin',
  },
  {
    id: 3,
    name: 'Tim',
  },
  {
    id: 4,
    name: 'Tom',
  },
  {
    id: 5,
    name: 'Julia',
  },
  {
    id: 6,
    name: 'Nana',
  },
  {
    id: 7,
    name: 'Pin',
  },
  {
    id: 8,
    name: 'Chang',
  },
  {
    id: 9,
    name: 'Tomson',
  },
  {
    id: 10,
    name: 'Kim',
  },
];
