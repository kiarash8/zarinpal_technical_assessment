export type Priorities = 'low' | 'medium' | 'high';
export const priorityList: {
  value: Priorities;
  color: 'success' | 'warning' | 'error';
}[] = [
  {
    value: 'low',
    color: 'success'
  },
  {
    value: 'medium',
    color: 'warning'
  },
  {
    value: 'high',
    color: 'error'
  },
];

export enum PriorityColors {
    'low' = 'success',
    'medium' = 'warning',
    'high' = 'error'
}
