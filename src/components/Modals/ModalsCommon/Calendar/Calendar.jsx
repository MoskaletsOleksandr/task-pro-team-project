import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import sprite from '../../../../images/sprite.svg';
import SvgModal from '../SvgModal';

export const Calendar = ({ deadline }) => {
  dayjs().format();

  // console.log(deadline);
  // console.log(Date.parse('Aug 24 2023'));

  // const today = new Date().toISOString().slice(0, 10); В такому форматі передавати час!!!
  // console.log(new Date().toISOString())

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          // defaultValue={dayjs('2022-04-17')}
          views={['month', 'day']}
          onChange={date => {
            // const newDate = String(date.$d).split(' ').splice(1, 3).join()
            const newDate = String(date.$d).split(' ').splice(1, 3).join(' ');
            // console.log(new Date(newDate).toISOString())
            const newDateIso = new Date(newDate).toISOString().slice(0, 19);
            deadline(newDateIso);
          }}
          slots={{
            openPickerIcon: () => (
              <SvgModal>
                <use href={sprite + '#icon-chevron-down'} />
              </SvgModal>
            ),
          }}
          slotProps={{
            desktopPaper: {
              sx: {
                borderRadius: '8px',
                color: 'var(--modal-primary-text-color)',
                backgroundColor: 'var(--modal-input-bg-color)',
                '& .MuiPickersCalendarHeader-labelContainer': {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
                '& .MuiPickersCalendarHeader-label': {
                  fontSize: '16px',
                  fontWeight: '500',
                },
                '& .MuiPickersArrowSwitcher-root': {
                  width: '189px',
                  justifyContent: 'space-between',
                },
                '& .MuiSvgIcon-root': {
                  fill: 'var(--modal-primary-text-color)',
                  height: '10px',
                },
                '& .MuiTypography-root': {
                  color: 'var(--modal-secondary-text-color)',
                  height: '24px',
                  marginTop: '14px',
                },
                '& .MuiPickersCalendarHeader-switchViewButton': {
                  display: 'none',
                },
                '& .MuiDayCalendar-weekContainer': {
                  justifyContent: 'space-between',
                },
                '& .MuiButtonBase-root': {
                  color: 'var(--modal-primary-text-color)',
                  margin: 0,
                  padding: 0,
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '18px',
                },
                '& .MuiPickersCalendarHeader-root': {
                  width: '100%',
                  padding: '0',

                  margin: '0',
                  borderBottomWidth: '2px',
                  borderBottomStyle: 'solid',
                },
                '& .MuiDateCalendar-root': {
                  width: '233px',
                  height: '254px',
                  padding: '18px',
                  boxSizing: 'border-box',
                  background: '',
                },

                '& .MuiPickersDay-hiddenDaySpacingFiller': {
                  height: '24px',
                  width: '24px',
                  minWidth: '24px',
                  maxWidth: '24px',
                },
              },
            },
            day: {
              sx: {
                height: '24px',
                width: '24px',
                minWidth: '24px',
                maxWidth: '24px',
                fontSize: '14px',

                '&.MuiPickersDay-root.Mui-selected': {
                  backgroundColor: 'var(--modal-date-text-color)',
                  color: 'var(--modal-input-bg-color)',
                },
                '&.MuiPickersDay-today': {
                  borderWidth: 1,
                  borderColor: 'var(--modal-date-text-color)',
                  // color: '',
                },
              },
            },
            textField: {
              variant: 'outlined',
              sx: {
                '& input': {
                  width: '105px',
                  height: '23px',
                  color: 'var(--modal-date-text-color)',
                  fontSize: '14px',
                },
                '& fieldset': { border: 'none' },
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};
