let Diary = require('./diary');

let diary = new Diary();

describe('Diary', () => {
	describe('entry()', () => {
		let obj;
		beforeEach(function() {
			obj = new Diary();
		});

		it('adds entry to diary', () => {
			expect(obj.entries().length).toEqual(0);
			obj.entry('Brad is everything to me.');
			expect(obj.entries().length).toEqual(1);
		});

		it('contains time/date of its creation', () => {
			obj.entry('Hello World!');
			const then = obj.entries()[0].date;
			const now = new Date().toISOString().slice(0, 19);
			expect(then).toEqual(now);
		});

		it('may take an optional date argument which will be set as its time of creation', () => {
			obj.entry('dkeidk', new Date('Mon, 25 Dec 1995 13:30:00 GMT'));
			let testDate = new Date('Mon, 25 Dec 1995 13:30:00 GMT')
				.toISOString()
				.substr(0, 19);
			expect(obj.entries()[0].date).toEqual(testDate);
		});
	});
});

//
// describe('entries()', () => {
// 	let obj;
// 	// beforeEach(function() {
// 	// 	obj = new Diary();
// 	// });
// 	it('returns list of all entries', () => {
// 		expect(diary.entries()).toEqual(Object.values(diary.diary));
// 	});
// });
// console.log(typeof diary);
