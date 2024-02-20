export class Project {
    name: string;
    discription: string;
    image: string;
    components: string[];

    constructor(name: string, discription: string, image: string, components: string[]) {
        this.name = name;
        this.discription = discription;
        this.image = image;
        this.components = components;
    }
}
