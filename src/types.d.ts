export type Primitive = string | number | symbol;

export type NodeObject<ID extends Primitive, DataKey extends string, DataValue extends Primitive> = {
  id: ID;
  data: Partial<Record<DataKey, DataValue[]>>;
  parentId: ID | null;
  children: NodeObject<ID, DataKey, DataValue>[];
};
