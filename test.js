import test from 'ava';
import m from './';

test(t => {
	t.is(m('Woof', 0), 'Woof');
	t.is(m('Woof', 1), 'Woof');
	t.is(m('Woof', 5), '🐕Woof');
	t.is(m('Woof', 6), '🐕🐕Woof');
});
