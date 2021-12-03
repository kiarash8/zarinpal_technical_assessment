/**
 * define model interface `I***Model`
 */
 export interface ITaskModel {
     items: Array<ITask>;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  indicators: string; //KPI
  priority: 'low' | 'medium' | 'high';
  complete: boolean;
}
  
  /**
   * define a model initial object `***ModelInitial`
   */
  export const TaskModelInitial: ITaskModel = {
    items: []
  }
  