import { Primitive, NodeObject } from './types';
import Draft from './Draft';

type GameTreeOptions<ID extends Primitive, DataKey extends string, DataValue extends Primitive> = {
  getId?: () => void;
  merger?: (node: NodeObject<ID, DataKey, DataValue>, data: NodeObject<ID, DataKey, DataValue>['data']) => NodeObject<ID, DataKey, DataValue>['data'] | null;
  root?: NodeObject<ID, DataKey, DataValue>;
};

type CurrentsObject<ID extends Primitive> = Record<ID, ID>;

type Step = 1 | -1;

declare class GameTree<ID extends Primitive = number, DataKey extends string = string, DataValue extends Primitive = string> {
  constructor(options?: GameTreeOptions<ID, DataKey, DataValue>);

  getId: () => void;

  merger: (node: NodeObject<ID, DataKey, DataValue>, data: NodeObject<ID, DataKey, DataValue>['data']) => NodeObject<ID, DataKey, DataValue>['data'] | null;

  root: NodeObject<ID, DataKey, DataValue>;

  get(id: ID): NodeObject<ID, DataKey, DataValue> | null;

  getSequence(id: ID): Generator<NodeObject<ID, DataKey, DataValue>, void>;

  mutate(mutator: (draft: Draft<ID, DataKey, DataValue>) => void): GameTree;

  navigate(id: ID, step: number, currents: CurrentsObject<ID>);

  listNodes(): Generator<NodeObject<ID, DataKey, DataValue>, void>;

  listNodesHorizontally(startId: ID, step: Step): Generator<NodeObject<ID, DataKey, DataValue>, void>;

  listNodesVertically(startId: ID, step: Step, currents: CurrentsObject<ID>): Generator<NodeObject<ID, DataKey, DataValue>, void>;

  listCurrentNodes(currents: CurrentsObject<ID>): Generator<NodeObject<ID, DataKey, DataValue>, void>;

  listMainNodes(): Generator<NodeObject<ID, DataKey, DataValue>, void>;

  getLevel(id: ID): number | null;

  getSection(level: number): Generator<NodeObject<ID, DataKey, DataValue>, void>;

  getCurrentHeight(currents: CurrentsObject<ID>): number;

  getHeight(): number;

  getStructureHash(): string;

  onCurrentLine(id: ID, currents: CurrentsObject<ID>): boolean;

  onMainLine(id: ID): boolean;

  toJSON(): NodeObject<ID, DataKey, DataValue>;
}

export default GameTree;
