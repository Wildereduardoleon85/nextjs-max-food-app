export type Meal = {
  title: string
  slug: string
  image: string
  summary: string
  creator: string
}

export type MealWithId = Meal & {
  id: string
}
