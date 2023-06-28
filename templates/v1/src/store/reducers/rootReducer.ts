import { setupGuideReducer as setupGuide } from './setupGuideReducer';
import { toastReducer as toast } from './toastReducer';
import { searchReducer as search } from './searchReducer';

const rootReducer = {
  setupGuide,
  toast,
  search,
};

export default rootReducer;
