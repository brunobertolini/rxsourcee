import { BehaviorSubject } from 'rxjs'

export const setRx = rx => v => rx.next(v)

export const rxState = initial => {
  const rx = new BehaviorSubject(initial)
  rx.set = setRx(rx)
  return rx
}
