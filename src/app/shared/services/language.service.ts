import { Injectable } from '@angular/core';
import i18next from 'i18next';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  aboutMe = '';
  mySkills = '';
  elPolloLoco = '';
  join = '';
  projectDescription: string[] = [];

  constructor() {

    i18next.init({
      lng: 'en', // if you're using a language detector, do not define the lng option
      debug: true,
      resources: {
        en: {
          translation: {
            "aboutMe": "My name is Simon Funke.<br>Im 35 years old and a Frontend Developer.<br> I successfully completed my training at the Developer Academy in 2024.",
            "mySkills": "I have grown my frontend developments skills that have allowed me to create different real projects.",
            "elPolloLoco": "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
            "join": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
          }
        },
        de: {
          translation: {
            "aboutMe": "Mein Name ist Simon Funke.<br>Ich bin 35 Jahre alt und Frontend-Developer.<br>Ich habe meinen Abschluss erfolgreich an der Developer Akademie im Jahr 2024 absolviert.",
            "mySkills": "Ich habe meine Frontend-Entwicklungsfähigkeiten erweitert, die es mir ermöglicht haben, verschiedene reale Projekte zu erstellen.",
            "elPolloLoco": "Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.",
            "join": "Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
          }
        }
      }
    });
    this.aboutMe = i18next.t('aboutMe');
    this.mySkills = i18next.t('mySkills');
    this.projectDescription = [
      this.elPolloLoco = i18next.t('elPolloLoco'),
      this.join = i18next.t('join'),
    ]
  }

  ngOnInit() {

    this.changeLanguage('en');
    this.aboutMe = i18next.t('aboutMe');
  }

  changeLanguage(language: string) {
    i18next.changeLanguage(language);
    this.aboutMe = i18next.t('aboutMe');
    this.mySkills = i18next.t('mySkills');
    this.projectDescription = [
      this.elPolloLoco = i18next.t('elPolloLoco'),
      this.join = i18next.t('join'),
    ]
  }

}
