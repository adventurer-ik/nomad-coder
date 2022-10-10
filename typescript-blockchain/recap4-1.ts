abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickName: string,
    ) {}
    abstract getNickName(): void;

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class PlayerA extends User {
    getNickName(): void {
        console.log(this.nickName);
    }
}

const sji = new PlayerA('JeongIk', 'Seo', 'IK');
console.log(sji.getFullName());
sji.getNickName();
