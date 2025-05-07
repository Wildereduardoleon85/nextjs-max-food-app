import { Meal } from '@/types'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions as string)

  const extension = (meal.image as File).name.split('.').pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await (meal.image as File).arrayBuffer()

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!')
    }
  })

  meal.image = `/images/${fileName}`

  db.prepare(
    `INSERT INTO meals (
        title, 
        summary, 
        instructions, 
        creator, 
        creator_email, 
        image, 
        slug
      )
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )`
  ).run(meal)
}
