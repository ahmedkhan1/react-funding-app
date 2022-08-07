export type TAbsences = {
    id: number,
    userId: number,
    employees:{
      name: string
    },
    name: string,
    memberNote?: string,
    type: string,
    admitterNote?: string,
    date: string,
    startDate: string,
    endDate: string,
    status?: string,
    createdAt?: string,
    confirmedAt?: string,
    rejectedAt?: string,
  }
