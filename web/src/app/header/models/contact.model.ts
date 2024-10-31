export class Contact {
  name: string;
  iconPath: string;
  link: string;

  constructor(name = "", iconPath = "", link = "") {
    this.name = name;
    this.iconPath = iconPath;
    this.link = link;
  }
}
