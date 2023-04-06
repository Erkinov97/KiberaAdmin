import { IMenu } from './../interface/imenu';
import { IView } from './../interface/iview'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

// export async function getAllList(payload:) {

// }
export async function listCreate(payload: {
  title: string
  title_en: string
  title_uz: string
  title_ru: string
  url: string
  content: string
  content_en: string
  content_uz: string
  content_ru: string
  published_date: string
  status: string
  view: IView
  menu: IMenu
}) {
  try {
    const { data } = await api({
      url: `/page/list-create/`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function getPageId(payload: { id: string }) {
  try {
    const { data } = await api({
      url: `/page/`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function deletePage(payload: { id: string }) {
  try {
    const { data } = await api({
      url: `/page/`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
