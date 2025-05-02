export type Meal = {
  title: string
  slug: string
  image: string
  summary: string
  creator: string
  creator_email: string
  instructions: string
}

export type MealWithId = Meal & {
  id: string
}
