import { useMemo, useEffect } from 'react'
import { useStateRx } from './useStateRx'

export const useResource = resource => {
  const res = useMemo(resource, [])

  const [state, setState] = useStateRx(res.getState())
  const [ctx, setCtx] = useStateRx(res.getContext())

  useEffect(() => () => res.cancel(), [])

  return [state, ctx, res]
}
