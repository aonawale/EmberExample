import Model from 'ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  thumbnailImage:           belongsTo('media', {async: false}),
  images:                   hasMany('media', {async: false}),
  videos:                   hasMany('media', {async: false})
});
