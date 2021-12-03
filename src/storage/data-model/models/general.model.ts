/**
 * define model interface `I***Model`
 */
export interface IGeneralModel {
  taskDialog: {
    show: boolean;
    mood?: 'add' | 'edit' | 'view';
    id?: string;
  };
  completeTaskListDialog: boolean;
}

/**
 * define a model initial object `***ModelInitial`
 */
export const GeneralModelInitial: IGeneralModel = {
  taskDialog: {
    show: false
  },
  completeTaskListDialog: false
}
