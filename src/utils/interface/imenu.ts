import { IParent } from './iparent';
export interface IMenu {
  title: string
    title_en: string
    title_uz: string
    title_ru: string
    sort_id: number
    parent: IParent
}
