// EX 1 -----------------------------------

interface Entity {
  readonly id?: string;
  readonly name?: string;
  readonly age?: number;
  readonly ethnicity?: string;
}

// Given following interface do the following operations:
// Remove - 1. readonly, 2. optional type and 3. id property & ethnicity property
// do this as 3 separate mutation types
// create a mapper function that maps response type of all keys to boolean

// expected:
// type newType = A<B<C<D<Type>>>>
/*
    {
      name: boolean;
      age: boolean;
    }
   */

type RemoveReadOnly<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type RemoveOptionals<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type RemoveProps<Type> = {
  [Property in keyof Type as Exclude<
    Property,
    "id" | "ethnicity"
  >]: Type[Property];
};

type ToBoolean<Type> = {
  [Property in keyof Type]: boolean;
};

type newType = ToBoolean<RemoveProps<RemoveOptionals<RemoveReadOnly<Entity>>>>;
