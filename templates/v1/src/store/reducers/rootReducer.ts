import { setupGuideReducer as setupGuide } from './setupGuideReducer';
import { toastReducer as toast } from './toastReducer';
import { searchReducer as search } from './searchReducer';
import { productReducer as product } from './productReducer';

const rootReducer = {
  setupGuide,
  toast,
  search,
  product,
};

export default rootReducer;
