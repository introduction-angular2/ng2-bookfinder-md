/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BookSearchComponent } from './book-search.component';

describe('Component: BookSearch', () => {
  it('should create an instance', () => {
    let component = new BookSearchComponent();
    expect(component).toBeTruthy();
  });
});
