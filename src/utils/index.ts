import dateUtil from './date.util';
import loadingUtil from './loading.util';
import numberUtil from './number.util';
import textUtil from './text.util';
import transformUtil from './transform.util';

const Utils = {
  ...textUtil,
  ...numberUtil,
  ...dateUtil,
  ...transformUtil,
  ...loadingUtil,
};

export default Utils;
