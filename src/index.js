import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();