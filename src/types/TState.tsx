import { TAbsences } from './TAbsences';

export type TAbsenteesState = {
    absences: TAbsences[],
    error: { message: string; }
}

export type TExportState = {
    exportList: string,
    error: { message: string; }
}
