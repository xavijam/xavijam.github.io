import timeago from 'timeago.js';
import timeago_es from './timeago_es.js';
import Ladda from 'ladda';
import $ from 'jquery';

timeago.register('es', timeago_es);
timeago().render(document.querySelectorAll('.timeago'), window.locale);

$('.ladda-button').each(function (i,el) {
	Ladda.bind(el, {
	  callback: function () {
	    setTimeout(function () {
	      var href = $(el).attr('data-href');
	      if (href) {
	        window.location = href;
	      }
	    },500);
	  }
	});
});