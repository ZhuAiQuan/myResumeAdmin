declare namespace Stores {
  type Actions<T> = {
    type: string,
    data: T
  }
}