'use client'

import { ChangeEvent, useRef, useState } from 'react'
import styles from './image-picker.module.css'
import Image from 'next/image'

type ImagePickerProps = {
  label?: string
  name?: string
}

export function ImagePicker({
  label = '',
  name = 'image',
}: Readonly<ImagePickerProps>) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  )

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClickPick = () => {
    inputRef.current?.click()
  }

  const handleImgaeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]

      if (!file) {
        setPickedImage(null)
        return
      }

      const fileReader = new FileReader()

      fileReader.onload = () => {
        setPickedImage(fileReader.result)
      }

      fileReader.readAsDataURL(file)
    }
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage as string}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImgaeChange}
        />
        <button
          type="button"
          className={styles.button}
          onClick={handleClickPick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}
