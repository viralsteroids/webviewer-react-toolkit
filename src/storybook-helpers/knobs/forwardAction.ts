import { action, ActionOptions } from '@storybook/addon-actions';

/* eslint-disable @typescript-eslint/no-explicit-any */

export function forwardAction<T extends any[]>(name: string, callback: (...args: T) => any, options?: ActionOptions) {
  return (...args: T) => {
    action(name, options)(...args);
    return callback(...args);
  };
}
