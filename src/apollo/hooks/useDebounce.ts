import { useEffect, useState } from "react";
import { debounceTime, Subject } from "rxjs";

export const useDebounce = (time: number, initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const [values] = useState(() => new Subject());
  useEffect(() => {
    const sub = values.pipe(debounceTime(time)).subscribe(setValue);
    return () => sub.unsubscribe();
  }, [time, values]);
  return [value, (v: any) => values.next(v)];
};
