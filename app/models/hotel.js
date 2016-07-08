import attr from 'ember-data/attr';
import ContentProvider from 'content-provider';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default ContentProvider.extend({
  id:                                 attr('string'),
  name:                               attr('string'),
  description:                        attr('string'),
  award:                              attr('number'),
  isPreferential:                     attr('boolean'),
  location:                           belongsTo('location', {async: false}),
  rooms:                              hasMany('room', {async: false}),
  content:                            hasMany('content', {async: false}),
  links:                              hasMany('link', {async: false})
});
