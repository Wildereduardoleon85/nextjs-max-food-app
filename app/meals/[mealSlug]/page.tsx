import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import styles from './page.module.css'
import { Meal } from '@/types'
import { notFound } from 'next/navigation'

type MealDetailsPageProps = {
  params: Promise<{ mealSlug: string }>
}

async function getMealFromParams(params: MealDetailsPageProps['params']) {
  const { mealSlug } = await params
  const meal = getMeal(mealSlug) as Meal

  if (!meal) {
    notFound()
  }

  return meal
}

export async function generateMetadata({ params }: MealDetailsPageProps) {
  const meal = await getMealFromParams(params)

  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default async function MealDetailsPage({
  params,
}: Readonly<MealDetailsPageProps>) {
  const meal = await getMealFromParams(params)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image as string} fill alt={meal.title} />
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
            __html: (meal.instructions as string).replace(/\n/g, '<br />'),
          }}
        ></p>
      </main>
    </>
  )
}
