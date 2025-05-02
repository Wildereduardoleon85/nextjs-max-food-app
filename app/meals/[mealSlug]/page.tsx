import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import styles from './page.module.css'
import { Meal } from '@/types'
import { notFound } from 'next/navigation'

type MealDetailsPageProps = {
  params: { mealSlug: string }
}

export default async function MealDetailsPage({
  params,
}: Readonly<MealDetailsPageProps>) {
  const { mealSlug } = await params
  const meal = getMeal(mealSlug) as Meal

  if (!meal) {
    notFound()
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, '<br />'),
          }}
        ></p>
      </main>
    </>
  )
}
