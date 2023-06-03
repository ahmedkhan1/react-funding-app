import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import Utils from 'utils';
import { getAbsentees } from 'services/Absentees.service';
import {
  getAbsenteesSuccess,
  getAbsenteesFailure,
} from '../redux/actions/absentees';
import { TAbsences } from '../types/TAbsences';
import { RootState } from '../redux/reducers/rootReducer';
import { TAbsenteesState } from '../types/TState';
/**
 * useFetchAbsenteesList
 *
 */

export default function useFetchAbsenteesList() {
  const dispatch = useDispatch();
  const absencesState:TAbsenteesState = useSelector((state: RootState) => state.absences);
  const [loader, setLoader] = useState(true);
  const [rows, setRow] = useState<TAbsences[]>([]);
  const [rowList, setRowList] = useState<TAbsences[]>([]);
  const { addToast } = useToasts();
  const [widgets, setWidgets] = useState({
    totalAbsence: 0,
    totalRequested: 0,
  });

  const fetchAbsentees = () => {
    if (absencesState?.absences) {
      const absencesList: TAbsences[] = absencesState.absences;
      const list: TAbsences[] = [];
      let absenses = 0;
      let requested = 0;
      absencesList.forEach((el) => {
        const { name } = el.employees;
        let currentStatus = '';
        if (el.createdAt && !el.confirmedAt && !el.rejectedAt) {
          currentStatus = 'Requested';
          requested += 1;
        } else if (el.createdAt && el.confirmedAt && !el.rejectedAt) {
          currentStatus = 'Confirmed';
          absenses += 1;
        } else {
          currentStatus = 'Rejected';
        }

        list.push({
          id: el.id,
          userId: el.userId,
          name,
          employees: el.employees,
          memberNote: (el.memberNote) ? el.memberNote : '-',
          type: el.type,
          createdAt: el.createdAt,
          confirmedAt: el.confirmedAt,
          rejectedAt: el.rejectedAt,
          admitterNote: (el.admitterNote) ? el.admitterNote : '-',
          date: `${Utils.commonMethods.dateFormater(el.startDate)} - 
          ${Utils.commonMethods.dateFormater(el.endDate)}`,
          startDate: Utils.commonMethods.dateFormater(el.startDate),
          endDate: Utils.commonMethods.dateFormater(el.endDate),
          status: currentStatus,
        });
      });

      setRow(list);
      setRowList(list);
      setLoader((state) => !state);
      setWidgets({
        totalAbsence: absenses,
        totalRequested: requested,
      });
    }
  };

  useEffect(() => {
    if (absencesState?.error) {
      const msg = Utils.commonMethods.generateErrorMessage(absencesState.error);
      addToast(msg, { appearance: 'error' });
      setLoader((state) => !state);
    } else if (absencesState?.absences) {
      fetchAbsentees();
    } else {
      dispatch(getAbsentees({
        successAction: getAbsenteesSuccess,
        failureAction: getAbsenteesFailure,
      }));
    }
    return () => {
      setRow([]);
      setRowList([]);
    };
  }, [absencesState]);

  return {
    loader,
    setLoader,
    widgets,
    setWidgets,
    rows,
    setRow,
    rowList,
  };
}
