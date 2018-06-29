import { Section } from "./section.model";

export class LoadSections {
    static readonly type = '[Section] LoadSections';
}

export class LoadSectionsSuccessful {
    static readonly type = '[Section] Load Sections Successful';
    constructor(public payload:Section[]){}
}