import { MealItem } from './meal-item'
import styles from './meals-grid.module.css'
import type { Meal } from '@/types'

type MealWithId = Meal & {
  id: string
}

type MealsGridProps = {
  meals: MealWithId[]
}

export function MealsGrid({ meals }: Readonly<MealsGridProps>) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem
            creator={meal.creator}
            image={meal.image}
            slug={meal.slug}
            summary={meal.summary}
            title={meal.title}
          />
        </li>
      ))}
    </ul>
  )
}
