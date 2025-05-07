'use server'

import { Meal } from '@/types'
import { saveMeal } from './meals'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

function isInvalidText(text: string) {
  return !text || text.trim() === ''
}

type State = {
  message: string | null
}

export async function shareMeal(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    image: formData.get('image'),
    creator_email: formData.get('email'),
  } as Meal

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions as string) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email as string) ||
    !(meal.creator_email as string).includes('@') ||
    !meal.image ||
    (meal.image as File).size === 0
  ) {
    return {
      message: 'Invalid input.',
    }
  }

  await saveMeal(meal)
  revalidatePath('/meals')
  redirect('/meals')
}
