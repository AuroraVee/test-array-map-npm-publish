const arrayMap = <T, U>(
  array: T[],
  callBack: (item: T, index: number, arr: ReadonlyArray<T>) => U,
): U[] => {
  let i = -1
  const len = array.length
  const resArray = []
  while (++i < len) {
    resArray.push(callBack(array[i], i, array))
  }
  return resArray
}

export = arrayMap
