export class Post {
    constructor(
        public name: string,
        public email: string,
        public title: string,
        public subtitle: string,
        public message: string,
        public file?: string,
        public id?: number,
        public likes?: number
    ) {}
}