type Words = {
    [key: string]: string;
};

class dict {
    private words: Words;
    constructor() {
        this.words = {};
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    get(term: string) {
        return this.words[term];
    }
    delete(term: string) {
        delete this.words[term];
    }
    update(term: string, def: string) {
        if (Object.keys(this.words).includes(term)) {
            this.words[term] = def;
        } else {
            console.log(`${term} is not exist. please register first`);
        }
    }
    showAll() {
        console.log(this.words);
    }
    count() {
        return Object.keys(this.words).length;
    }
}

class Word {
    constructor(public readonly term: string, public def: string) {}
}

const kimchi = new Word('김치', '한국 전통 음식');
const ramen = new Word('라면', '국민 간식');
const dwonjang = new Word('된장찌개', '국민 찌개');

const ikDict = new dict();

ikDict.add(kimchi);
ikDict.add(ramen);
ikDict.add(dwonjang);
ikDict.showAll();

ikDict.update('김치', '겁나 매워');
ikDict.showAll();

const numberOfWords = ikDict.count();
console.log(numberOfWords);
