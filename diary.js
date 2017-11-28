class Diary {
	constructor() {
		this._entries = [];
	}
	entry(str, date = new Date()) {
		date = date.toISOString().substr(0, 19);
		this._entries.push({ date: date, msg: str });
	}

	entries() {
		//return array of entry objects
		return this._entries;
	}
}

module.exports = Diary;

// entry(str, date) {
// 	let len = Object.keys(this.diary).length || 0;
// 	let currentTime = new Date().toISOString().slice(0, 19);
// 	if (date) {
// 		this.diary[date] = str;
// 		return [str, date];
// 	} else {
// 		date = currentTime;
// 		this.diary[date] = str;
// 		return str;
// 	}
// }
//
// entries() {
// 	let arr = [];
// 	for (let i in Object.keys(this.diary)) {
// 		arr.push(this.diary[i]);
// 	}
// 	return arr;
// }
