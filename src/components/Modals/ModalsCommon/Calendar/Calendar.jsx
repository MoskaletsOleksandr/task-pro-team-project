import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import sprite from '../../../../images/sprite.svg';
import SvgModal from '../SvgModal';
import { DesktopDatePicker } from '@mui/x-date-pickers';

export const Calendar = ({ deadline }) => {
  dayjs().format();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          defaultValue={dayjs(new Date())}
          views={['month', 'day']}
          disablePast={true}
          onChange={date => {
            const selectedDate = date.$d;
            const formattedDate = new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
            const formattedDateString = formattedDate.toISOString().split('T')[0];
            deadline(formattedDateString);
          }}
          slots={{
            openPickerIcon: () => (
              <SvgModal
                stroke="var(--modal-date-text-color)"
                width="18px"
                height="18px"
              >
                <use href={sprite + '#icon-chevron-down'} />
              </SvgModal>
            ),
          }}
          slotProps={{
            desktopPaper: {
              sx: {
                borderRadius: '8px',
                color: 'var(--modal-primary-text-color)',
                backgroundColor: 'var(--modal-calendar-bg-color)',
                '& .MuiPickersCalendarHeader-labelContainer': {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
                '& .MuiPickersCalendarHeader-label': {
                  fontSize: '16px',
                  fontWeight: '500',
                  textAlign: ' center',
                  width: '125px',
                },
                '& .MuiPickersCalendarHeader-root': {
                  width: '100%',
                  padding: '0',

                  margin: '0',
                  borderBottomWidth: '2px',
                  borderBottomStyle: 'solid',
                },
                '& .MuiPickersArrowSwitcher-root': {
                  width: '190px',
                  justifyContent: 'space-between',
                },
                '& .MuiSvgIcon-root': {
                  fill: 'var(--modal-primary-text-color)',
                  height: '18px',
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
                '& .MuiDateCalendar-root': {
                  width: '233px',
                  height: '254px',
                  padding: '18px',
                  boxSizing: 'border-box',
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
                },
              },
            },
            textField: {
              variant: 'outlined',
              sx: {
                '& input': {
                  width: '103px',
                  height: '16px',
                  color: 'var(--modal-date-text-color)',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '0px',
                  margin: '0px',
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
