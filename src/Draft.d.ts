import { Primitive, NodeObject } from './types';

type AppendNodeOption = {
  disableMerging?: boolean;
};

type Direction = 'left' | 'right' | 'main';

declare class Draft<ID extends Primitive, DataKey extends string, DataValue extends Primitive> {
  root: NodeObject<ID, DataKey, DataValue>;

  get(id: ID): NodeObject<ID, DataKey, DataValue> | null;

  appendNode(parentId: ID, data: NodeObject<ID, DataKey, DataValue>['data'], options: AppendNodeOption): NodeObject<ID, DataKey, DataValue> | null;

  UNSAFE_appendNodeWithId(parentId: ID, id: ID, data: NodeObject<ID, DataKey, DataValue>['data'], options: AppendNodeOption): boolean;

  removeNode(id: ID): boolean;

  shiftNode(id: ID, direction: Direction): number | null;

  makeRoot(id: ID): boolean;

  addToProperty(id: ID, property: DataKey, value: DataValue): boolean;

  removeFromProperty(id: ID, property: DataKey, value: DataValue): boolean;

  updateProperty(id: ID, property: DataKey, values: DataValue[]): boolean;

  removeProperty(id: ID, property: DataKey): boolean;
}

export default Draft;
