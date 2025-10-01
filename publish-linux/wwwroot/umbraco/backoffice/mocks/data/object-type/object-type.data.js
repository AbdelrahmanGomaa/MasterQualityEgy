import { UmbEntityData } from '../entity.data.js';
export const data = [
    {
        id: '1',
        name: 'Media',
    },
    {
        id: '2',
        name: 'Content',
    },
    {
        id: '3',
        name: 'User',
    },
    {
        id: '4',
        name: 'Document',
    },
];
// Temp mocked database
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class UmbObjectTypeData extends UmbEntityData {
    constructor() {
        super(data);
    }
}
export const umbObjectTypeData = new UmbObjectTypeData();
