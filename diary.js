class Diary {
	constructor() {
		this.diary = {};
	}

	entry(str, date) {
		let len = Object.keys(this.diary).length || 0;
		let currentTime = new Date().toISOString().slice(0, 19);
		if (date) {
			this.diary[date] = str;
			return [str, date];
		} else {
			date = currentTime;
			this.diary[date] = str;
			return str;
		}
	}

	entries() {
		let arr = [];
		for (let i in this.diary) {
			arr.push(this.diary[i]);
		}
		return Object.keys(this.diary);
	}

	//entry(str, data = Date.now) {}
}

module.exports = Diary;
