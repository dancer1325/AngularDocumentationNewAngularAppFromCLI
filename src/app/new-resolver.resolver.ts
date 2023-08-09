import { ResolveFn } from '@angular/router';

export const newResolverResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
