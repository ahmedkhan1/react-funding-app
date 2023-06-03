import { TAbsences } from './TAbsences';

export type TAbsenteesState = {
    absences: TAbsences[],
    error: { message: string; }
}

export type TExportState = {
    exportList: string,
    error: { message: string; }
}

export type TProfileState = {
    payload: {},
    updated: any[],
    error: { message: string; }
}

export type TCustomerIDList = {
    payload: [],
    error: { message: string; }
}
