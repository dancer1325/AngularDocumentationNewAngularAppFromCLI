import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { newResolverResolver } from './new-resolver.resolver';

describe('newResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => newResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
