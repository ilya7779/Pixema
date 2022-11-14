import {useLatest} from "./useLatest";
import {useMemo} from "react";
import {debounce} from "lodash";

export function useDebounce(cb?: any, ms?: any) {
  const latestCb = useLatest(cb);
  return useMemo(
    () =>
      debounce((...args) => {
        latestCb.current(...args);
      }, ms),
    [ms, latestCb]
  );
}