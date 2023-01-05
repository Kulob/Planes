import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PlanePage } from './pages/PlanePage';
import { CreatePlanePage } from './pages/CreatePlanePage';
import { paths } from './paths';
import { OrderPage } from './pages/OrderPage';

function App() {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
      <Route path={`${paths.createPlane}`} element={<CreatePlanePage />} />
      <Route path={`${paths.order}`} element={<OrderPage />} />
    </Routes>
  );
}

export default App;
