export function classNames(classes: (string | boolean | undefined)[]) {
  const cleanedClasses: string[] = []

  classes.forEach((className) => {
    if (className) {
      cleanedClasses.push(className as string)
    }
  })

  return cleanedClasses.length > 0 ? cleanedClasses.join(' ') : undefined
}
