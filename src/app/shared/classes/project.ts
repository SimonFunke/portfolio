import { LanguageService } from '../services/language.service';

export class Project {
    name: string;  
    image: string;
    components: string[];
    langName: string;

    constructor(name: string, langName: string, image: string, components: string[]) {
        this.name = name;
        this.image = image;
        this.components = components;
        this.langName = langName;
    }
}
