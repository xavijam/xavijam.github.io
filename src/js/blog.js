import timeago from 'timeago.js';
import timeago_es from './timeago_es.js';

timeago.register('es', timeago_es);
timeago().render(document.querySelectorAll('.timeago'), window.locale)