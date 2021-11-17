import { checkOptionsDuplications } from './check-options-duplications.mjs';
import { checkOptionsValuesExistence } from './check-options-values-existance.mjs';

function validateArgs({ args, options }) {
  checkOptionsDuplications(args, options);
  checkOptionsValuesExistence(args, options);
}

export { validateArgs };
