import { Global, css } from '@emotion/react';
import 'modern-normalize';
import '../fonts/fonts.css';

export const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={css`
          root {
            --timing-function: cubic-bezier(0.4, 0, 0.2, 1);

            //variables for WelcomePage and AuthPage
            --welcome-primary-text-color: #161616;
            --registration-btn-bg-color: #161616;
            --auth-btn-bg-color: #bedbb0;
            --auth-btn-bg-color-hover: #9DC888;
            --light-btn-text-color: #ffffff;
            --dark-btn-text-color: #161616;
            --active-form-title-color: #ffffff;
            --inactive-form-title-color: #ffffff4c;
            --auth-input-bg-color: #1f1f1f;
            --auth-input-text-color: #ffffff;
            --auth-input-placeholder-color: #ffffff4c;
            --auth-input-border-color: #bedbb0;
            
          }

          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 14px;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }
          ul,
          ol {
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }

          .dark {
           
            --primary-text-color: #ffffff;
            --secondary-text-color: #ffffff80;
            --link-text-color: #BEDBB0;

            //variables for SideBar
            --sidebar-bg-color: #121212;
            --sidebar-logo--bg-color: #1f1f1f;
            --sidebar-logo--icon-color: #FFFFFF;
            --sidebar-button-plus-bg-color: #BEDBB0;
            --sidebar-button-plus-bg-color-hover: #9dc888;
            --sidebar-button-plus-icon-color: #121212;
            --sidebar-need-help-bg-color: #1f1f1f;
            --sidebar-active-board-text-color: #ffffff;
            --sidebar-active-board-bg-color: #1f1f1f;
            --sidebar-inactive-board-text-color: #ffffff80;
            --sidebar-needhelp-icon-color: #ffffff;
            --sidebar-border-left-color: #BEDBB0;
            --sidebar-logout-icon-color: #bedbb0;
            --sidebar-logout-icon-color-hover: #9dc888;
            --sidebar-inactive-icon-color: #ffffff80;
            --sidebar-active-icon-color: #ffffff80;
            --icon-stroke: #ffffff;

            //variables for Header
            --header-bg-color: #161616;
            --header-name-color: #ffffff;
            --header-user-fill: #1F1F1F
            --header-user-stroke: #151515
            --header-theme-color: #ffffffCC;
            --header-theme-select-bg-color: #151515;
            --header-theme-select-border-color: #BEDBB0;
            --header-theme-select-text-color: #ffffff80;
            --header-theme-select-text-color-hover: #BEDBB0;


            //VARIABLES FOR ScreensPage
            --screens-page-bg-color: #1F1F1F;
            --add-column-btn-bg-color: #121212;
            --add-column-btn-text-color: #ffffff;
            --add-column-btn-plus-bg-color: #ffffff;
            --add-column-btn-plus-color: #121212; //vit
            --new-dashboadr-text-color: #FFFFFFCC; //vit change
            --new-dashboadr-text-accent-color: #BEDBB0; //vit
            //variables for HeaderDashboard
            --header-dashboard-title-color: #ffffff;
            --filter-text-color: #ffffffCC;
            --filter-popup-bg-color: #151515;
            --filter-popup-primary-text-color: #ffffff;
            --filter-popup-secondary-text-color: #ffffff80;
            --filter-popup-tertiary-text-color: #ffffff80;//vit not use
            --filter-popup-border-color: #BEDBB080;
            --filter-without-priority-color: #9b9b9b; 
            --filter-low-color: #8FA1D0;
            --filter-medium-color: #E09CB5;
            --filter-high-color: #BEDBB0;
            --filter-checked-color: #ffffff; //vit
            
            //variables for columns
            --vertical-scroll-bar-bg-color: #121212;
            --vertical-scroll-slider-bg-color:#FFFFFF1A;
            --horizontal-scroll-bar-bg-color: #121212;
            --horizontal-scroll-slider-bg-color: #FFFFFF1A;
            --column-add-btn-bg-color: #BEDBB0;
            --column-add-btn-bg-color-hover: #9DC888;
            --column-add-btn-text-color: #161616;
            --column-add-btn-plus-color: #FFFFFF; //vit
            --column-add-btn-plus-bg-color: #161616;

            //variables for cards
            --card-bg-color: #121212;
            --card-title-color: #ffffff;
            --card-primary-text-color: #ffffff;
            --card-secondary-text-color: #ffffff80;
            --card-border-color: #FFFFFF4D;
            --card-icon-color: #ffffff80;
            --card-hover: #191919;
            // #262626;


            //variables for modals
            --modal-bg-color: #151515;
            --modal-window-shadow: rgba(22, 22, 22, 0.05);
            --modal-title-color: #ffffff;
            --modal-primary-text-color: #ffffff;
            --modal-secondary-text-color: #ffffff80;
            --modal-date-text-color: #BEDBB0;
            --modal-btn-bg-color: #bedbb0;
            --modal-btn-bg-color-hover: #9DC888;
            --modal-btn-text-color: #161616;
            --modal-button-plus-bg-color: #161616
            --modal-input-bg-color: #1f1f1f;
            --modal-input-text-color: #ffffff;
            --modal-input-placeholder-color: #ffffff;
            --modal-input-border-color: #bedbb0;
            --modal-icon-color: #ffffff80;
            --modal-selected-icon-color: #ffffff;
            --modal-plus-btn-bg-color: #161616;
            --modal-plus-btn-bg-color-hover: #9DC888;
            --modal-selected-plus-color:#ffffff;
            --modal-calendar-bg-color:#1F1F1F;
            --modal-title-border-color: #ffffffA1; //vit change
           


            //variables for progress popup
            --progress-popup-bg-color: #151515;
            --progress-popup-text-color: #ffffff80;
            --progress-popup-text-color-hover: #BEDBB0;
            --progress-backdrop: rgba(255, 255, 255, 0.30);
           
          }
          .light {
            --primary-text-color: #161616;
            --secondary-text-color: #16161680;
            --link-text-color: #BEDBB0;

            //variables for SideBar
            --sidebar-bg-color: #ffffff;
            --sidebar-logo--bg-color: #1f1f1f;
            --sidebar-logo--icon-color: #FFFFFF;
            --sidebar-button-plus-bg-color: #bedbb0;
            --sidebar-button-plus-bg-color-hover: #9dc888;
            --sidebar-button-plus-icon-color: #121212;
            --sidebar-need-help-bg-color: #F6F6F7;
            --sidebar-active-board-text-color: #161616;
            --sidebar-active-board-bg-color: #F6F6F7;
            --sidebar-inactive-board-text-color: #16161680;
            --sidebar-needhelp-icon-color: #161616;
            --sidebar-logout-icon-color: #bedbb0;
            --sidebar-logout-icon-color-hover: #9dc888;
            --sidebar-border-left-color: #BEDBB0;
            --sidebar-inactive-icon-color: #16161680;
            --sidebar-active-icon-color: #BEDBB0;
            --icon-stroke: #000000;

            //variables for Header
            --header-bg-color: #FCFCFC;
            --header-name-color: #161616;
            --header-user-fill: #F6F6F7;
            --header-user-stroke: #FFFFFF;
            --header-theme-color: #161616CC;
            --header-theme-select-bg-color: #FCFCFC;
            --header-theme-select-border-color: #BEDBB0;
            --header-theme-select-text-color: #161616;
            --header-theme-select-text-color-hover: #BEDBB0;


            //VARIABLES FOR ScreensPage
            --screens-page-bg-color: #F6F6F7;
            --add-column-btn-bg-color: #ffffff;
            --add-column-btn-text-color: #161616;
            --add-column-btn-plus-bg-color: #161616;
            --add-column-btn-plus-color: #ffffff; //vit
            --new-dashboadr-text-color: #161616B2; //vit change
            --new-dashboadr-text-accent-color: #BEDBB0; //vit
                        
            //variables for HeaderDashboard
            --header-dashboard-title-color: #161616;
            --filter-text-color: #161616CC;
            --filter-popup-bg-color: #FCFCFC;
            --filter-popup-primary-text-color: #161616;
            --filter-popup-secondary-text-color: #16161680;
            --filter-popup-tertiary-text-color: #16161650;
            --filter-popup-border-color: #ffffff;
            --filter-without-priority-color: #c3c3c3;
            --filter-low-color: #8FA1D0;
            --filter-medium-color: #E09CB5;
            --filter-high-color: #BEDBB0;
            --filter-checked-color: #161616; //vit

            //variables for columns
            --vertical-scroll-bar-bg-color: #1616161A;
            --vertical-scroll-slider-bg-color:  #E8E8E8;
            --horizontal-scroll-bar-bg-color: #ffffff;
            --horizontal-scroll-slider-bg-color: #E8E8E8;
            --column-add-btn-bg-color: #BEDBB0;
            --column-add-btn-bg-color-hover: #9DC888;
            --column-add-btn-text-color: #161616;
            --column-add-btn-plus-color: #FFFFFF; 
            --column-add-btn-plus-bg-color: #161616;

            //variables for cards
            --card-bg-color: #ffffff;
            --card-title-color: #161616;
            --card-primary-text-color: #161616B2;
            --card-secondary-text-color: #16161680;
            --card-icon-color: #16161680;
            --card-border-color: #e8e8e8;
            --card-hover: #f7f7f7;


            //variables for modals
            --modal-bg-color: #FCFCFC;
            --modal-window-shadow: rgba(22, 22, 22, 0.05);
            --modal-title-color: #161616;
            --modal-primary-text-color: #161616;
            --modal-secondary-text-color: #16161680;
            --modal-date-text-color: #BEDBB0;
            --modal-btn-bg-color: #bedbb0;
            --modal-btn-bg-color-hover: #9DC888;
            --modal-btn-text-color: #161616;
            --modal-button-plus-bg-color: #161616
            --modal-input-bg-color: #FCFCFC;
            --modal-input-text-color: #161616;
            --modal-input-placeholder-color: #161616;
            --modal-input-border-color: #bedbb0;
            --modal-icon-color: #16161680;
            --modal-selected-icon-color: #161616;
            --modal-plus-btn-bg-color: #161616;
            --modal-plus-btn-bg-color-hover: #9DC888;
            --modal-selected-plus-color:#ffffff;
            --modal-calendar-bg-color:#ffffff;
            --modal-title-border-color: #1616161A; //vit

            //variables for progress popup
            --progress-popup-bg-color: #FCFCFC;
            --progress-popup-text-color: #161616;
            --progress-popup-text-color-hover: #BEDBB0;
            // --progress-backdrop:  rgba(0, 0, 0, 0.3);
            --progress-backdrop:  #BEDBB033;
        
          }

          .violet {
            --primary-text-color: #ffffff;
            --secondary-text-color: #ffffff80;
            --link-text-color: #5255BC;

            //variables for SideBar
            --sidebar-bg-color: #5255BC;
            --sidebar-logo--bg-color: #ECEDFD;
            --sidebar-logo--icon-color: #5255BC;
            --sidebar-button-plus-bg-color: #B8BCFD;
            --sidebar-button-plus-bg-color-hover: #979CEA;
            --sidebar-button-plus-icon-color: #FFFFFF;
            --sidebar-need-help-bg-color: #ECEDFD66;
            --sidebar-active-board-text-color: #ffffff;
            --sidebar-active-board-bg-color: #ECEDFD66;
            --sidebar-inactive-board-text-color: #ffffff80;
            --sidebar-needhelp-icon-color: #ffffff;
            --sidebar-logout-icon-color: #ffffff;
            --sidebar-logout-icon-color-hover: #ffffff80;
            --sidebar-border-left-color: #FFFFFF;
            --sidebar-inactive-icon-color:#f2f2f2;
            --sidebar-active-icon-color: #5255BC;
            --icon-stroke: #ffffff;

            //variables for Header
            --header-bg-color: #ffffff;
            --header-name-color: #161616;
            --header-user-fill: #ECEDFD;
            --header-user-stroke: #FFFFFF;
            --header-theme-color: #161616CC;
            --header-theme-select-bg-color: #FCFCFC;
            --header-theme-select-border-color: #ECEDFD;
            --header-theme-select-text-color: #161616;
            --header-theme-select-text-color-hover: #5255BC;


            //VARIABLES FOR ScreensPage
            --screens-page-bg-color: #ECEDFD;
            --add-column-btn-bg-color: #ffffff;
            --add-column-btn-text-color: #161616;
            --add-column-btn-plus-bg-color: #5255BC;
            --add-column-btn-plus-color: #FFFFFF; //vit
            --new-dashboadr-text-color: #161616B2; //vit
            --new-dashboadr-text-accent-color: #5255BC; //vit

            //variables for HeaderDashboard
            --header-dashboard-title-color: #161616;
            --filter-text-color: #161616CC;
            --filter-popup-bg-color: #FCFCFC;
            --filter-popup-primary-text-color: #161616;
            --filter-popup-secondary-text-color: #16161680;
            --filter-popup-tertiary-text-color: #16161650;
            --filter-popup-border-color: #ffffff;
            --filter-without-priority-color: #c3c3c3;
            --filter-low-color: #8FA1D0;
            --filter-medium-color: #E09CB5;
            --filter-high-color: #BEDBB0;
            --filter-checked-color: #5255BC; //vit

            //variables for columns
            --vertical-scroll-bar-bg-color: #B8BCFD;
            --vertical-scroll-slider-bg-color: #ffffff;
            --horizontal-scroll-bar-bg-color: #ffffff;
            --horizontal-scroll-slider-bg-color: #B8BCFD;
            --column-add-btn-bg-color: #5255BC;
            --column-add-btn-bg-color-hover: #7B7EDE;
            --column-add-btn-text-color: #ffffff;
            --column-add-btn-plus-color:#161616; //vit
            --column-add-btn-plus-bg-color: #ffffff;

            //variables for cards
            --card-bg-color: #ffffff;
            --card-title-color: #161616;
            --card-primary-text-color: #161616B2;
            --card-secondary-text-color: #16161680;
            --card-icon-color: #16161680;
            --card-border-color: #e8e8e8;
            --card-hover: #f7f7f7;

            //variables for modals
            --modal-bg-color: #FCFCFC;
            --modal-window-shadow: rgba(22, 22, 22, 0.05);
            --modal-title-color: #161616;
            --modal-primary-text-color: #161616;
            --modal-secondary-text-color: #16161680;
            --modal-date-text-color: #5255BC;
            --modal-btn-bg-color: #5255BC;
            --modal-btn-bg-color-hover: #7B7EDE;
            --modal-btn-text-color: #ffffff;
            --modal-button-plus-bg-color: #ffffff;
            --modal-input-bg-color: #FCFCFC;
            --modal-input-text-color: #161616;
            --modal-input-placeholder-color: #161616;
            --modal-input-border-color: #5255BC;
            --modal-icon-color: #16161680;
            --modal-selected-icon-color: #161616;
            --modal-plus-btn-bg-color :#ffffff;
            --modal-plus-btn-bg-color-hover: #7B7EDE;
            --modal-selected-plus-color:#161616;
            --modal-calendar-bg-color:#ffffff;
            --modal-title-border-color: #161616A1; //vit

            //variables for progress popup
            --progress-popup-bg-color: #FCFCFC;
            --progress-popup-text-color: #161616;
            --progress-popup-text-color-hover: #5255BC;
            // --progress-backdrop:  rgba(0, 0, 0, 0.3);
            --progress-backdrop:  #5255BC33;
          }
          
        `}
      />
    </>
  );
};

export default GlobalStyles;
