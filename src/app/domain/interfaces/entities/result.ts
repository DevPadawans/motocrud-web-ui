export interface Result<T> {
  succeeded: boolean,
  messages: string[],
  data: T
}
