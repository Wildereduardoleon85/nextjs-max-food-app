import Link from 'next/link'
import Image from 'next/image'
import styles from './meal-item.module.css'
import type { Meal } from '@/types'

type MealItemProps = Meal

export function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Readonly<MealItemProps>) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image as string} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  )
}
