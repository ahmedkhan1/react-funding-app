import { useEffect } from 'react';
import fileDownload from 'js-file-download';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { exportAbsenteesICO } from 'services/Absentees.service';
import commonMethods from 'utils/common.methods';
import {
  exportAbsenteesSuccess,
  exportAbsenteesFailure,
} from '../redux/actions/absentees';
import { RootState } from '../redux/reducers/rootReducer';
import { TExportState } from '../types/TState';

/**
 *
 * @method {useExportAbsentees}
 *
 */
const useExportAbsentees = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const exportListState:TExportState = useSelector((state: RootState) => state.exportList);

  useEffect(() => {
    if (exportListState?.error) {
      const msg = commonMethods.generateErrorMessage(exportListState.error);
      addToast(msg, { appearance: 'error' });
    } else if (exportListState.exportList) {
      const fileName = `file${Math.random()}s`;
      fileDownload(exportListState.exportList, `${fileName}.ics`);
    }
  }, [exportListState]);

  function exporData() {
    dispatch(exportAbsenteesICO({
      successAction: exportAbsenteesSuccess,
      failureAction: exportAbsenteesFailure,
    }));
  }
  return { exporData };
};

export default useExportAbsentees;
