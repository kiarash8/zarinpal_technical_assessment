import { ModelConfig } from '../type';
import { GeneralModelInitial, IGeneralModel } from './models/general.model';
import { ITaskModel, TaskModelInitial } from './models/task.model';

/**
 * append a property for each model and assigned to the model interface
 * 
 * model: I***Model;
 * 
 */
export interface IModels {
  general: IGeneralModel;
  task: ITaskModel;
}

/**
 * append a model name
 */
export const modelNameKeys:(keyof IModels)[] = [
  'general',
  'task'
];

/**
 * specify model config
 * 
 * 'model': {
 *  storage: false,
 *  model: ***ModelInitial
 * }
 */
export const Models: ModelConfig = {
  'general': {
    storage: false,
    modelInitial: GeneralModelInitial
  },
  'task': {
    storage: false,
    modelInitial: TaskModelInitial
  }
};
