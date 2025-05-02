'use server'

import { Meal } from '@/types'
import { saveMeal } from './meals'
import { redirect } from 'next/navigation'

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    image: formData.get('image'),
    creator_email: formData.get('email'),
  } as Meal

  await saveMeal(meal)
  redirect('/meals')
}
