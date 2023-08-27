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
            --sidebar-logo--bg-color: #1f1f1f
            --sidebar-button-plus-bg-color: #bedbb0;
            --sidebar-button-plus-bg-color-hover: #9dc888;
            --sidebar-need-help-bg-color: #1f1f1f;
            --sidebar-active-board-text-color: #ffffff;
            --sidebar-active-board-bg-color: #1f1f1f;
            --sidebar-inactive-board-text-color: #ffffff80;
            --sidebar-logout-icon-color: #bedbb0;
            --sidebar-logout-icon-color-hover: #9dc888;

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
            //variables for HeaderDashboard
            --header-dashboard-title-color: #ffffff;
            --filter-text-color: #ffffffCC;
            --filter-popup-bg-color: #151515;
            --filter-popup-primary-text-color: #ffffff;
            --filter-popup-secondary-text-color: #ffffff80;
            --filter-popup-border-color: #BEDBB080;
            --filter-without-priority-color: #FFFFFF4D;
            --filter-low-color: #8FA1D0;
            --filter-medium-color: #E09CB5;
            --filter-high-color: #BEDBB0;

            //variables for columns
            --vertical-scroll-bar-bg-color: #FFFFFF1A
            --vertical-scroll-slider-bg-color: #121212;
            --horizontal-scroll-bar-bg-color: #121212;
            --horizontal-scroll-slider-bg-color: #FFFFFF1A;
            --column-add-btn-bg-color: #BEDBB0;
            --column-add-btn-bg-color-hover: #9DC888;
            --column-add-btn-text-color: #161616;
            --column-add-btn-plus-bg-color: #161616;

            //variables for cards
            --card-bg-color: #121212;
            --card-title-color: #ffffff;
            --card-primary-text-color: #ffffff80;
            --card-secondary-text-color: #ffffff80;
            --card-icon-color: #ffffff80;


            //variables for modals
            --modal-bg-color: #151515;
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
            --modal-input-placeholder-color: #ffffff4c;
            --modal-input-border-color: #bedbb0;
            --modal-icon-color: #ffffff80;
            --modal-selected-icon-color: #ffffff;
            --modal-plus-btn-bg-color: #BEDBB0;
            --modal-plus-btn-bg-color-hover: #9DC888;

            //variables for progress popup
            --progress-popup-bg-color: #1f1f1f;
            --progress-popup-text-color: #ffffff80;
            --progress-popup-text-color-hover: #BEDBB0;
          }
          .light {
            --primary-text-color: #161616;
            --secondary-text-color: #16161680;
            --link-text-color: #BEDBB0;

            //variables for SideBar
            --sidebar-bg-color: #ffffff;
            --sidebar-logo--bg-color: #1f1f1f
            --sidebar-button-plus-bg-color: #bedbb0;
            --sidebar-button-plus-bg-color-hover: #9dc888;
            --sidebar-need-help-bg-color: #F6F6F7;
            --sidebar-active-board-text-color: #161616;
            --sidebar-active-board-bg-color: #F6F6F7;
            --sidebar-inactive-board-text-color: #16161680;
            --sidebar-logout-icon-color: #bedbb0;
            --sidebar-logout-icon-color-hover: #9dc888;

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
            //variables for HeaderDashboard
            --header-dashboard-title-color: #161616;
            --filter-text-color: #161616CC;
            --filter-popup-bg-color: #FCFCFC;
            --filter-popup-primary-text-color: #161616;
            --filter-popup-secondary-text-color: #16161680;
            --filter-popup-border-color: #ffffff;
            --filter-without-priority-color: #1616164D;
            --filter-low-color: #8FA1D0;
            --filter-medium-color: #E09CB5;
            --filter-high-color: #BEDBB0;

            //variables for columns
            --vertical-scroll-bar-bg-color: #E8E8E8
            --vertical-scroll-slider-bg-color: #1616161A;
            --horizontal-scroll-bar-bg-color: #ffffff;
            --horizontal-scroll-slider-bg-color: #E8E8E8;
            --column-add-btn-bg-color: #BEDBB0;
            --column-add-btn-bg-color-hover: #9DC888;
            --column-add-btn-text-color: #161616;
            --column-add-btn-plus-bg-color: #161616;

            //variables for cards
            --card-bg-color: #ffffff;
            --card-title-color: #161616;
            --card-primary-text-color: #161616B2;
            --card-secondary-text-color: #16161680;
            --card-icon-color: #16161680;


            //variables for modals
            --modal-bg-color: #FCFCFC;
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
            --modal-input-placeholder-color: #1616164c;
            --modal-input-border-color: #bedbb0;
            --modal-icon-color: #16161680;
            --modal-selected-icon-color: #161616;
            --modal-plus-btn-bg-color: #BEDBB0;
            --modal-plus-btn-bg-color-hover: #9DC888;

            //variables for progress popup
            --progress-popup-bg-color: #FCFCFC;
            --progress-popup-text-color: #161616;
            --progress-popup-text-color-hover: #BEDBB0;
          }

          .violet {
            --primary-text-color: #ffffff;
            --secondary-text-color: #ffffff80;
            --link-text-color: #5255BC;

            //variables for SideBar
            --sidebar-bg-color: #5255BC;
            --sidebar-logo--bg-color: #ECEDFD
            --sidebar-button-plus-bg-color: #B8BCFD;
            --sidebar-button-plus-bg-color-hover: #979CEA;
            --sidebar-need-help-bg-color: #ECEDFD66;
            --sidebar-active-board-text-color: #ffffff;
            --sidebar-active-board-bg-color: #ECEDFD66;
            --sidebar-inactive-board-text-color: #ffffff80;
            --sidebar-logout-icon-color: #ffffff;
            --sidebar-logout-icon-color-hover: #ffffff80;

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
            //variables for HeaderDashboard
            --header-dashboard-title-color: #161616;
            --filter-text-color: #161616CC;
            --filter-popup-bg-color: #FCFCFC;
            --filter-popup-primary-text-color: #161616;
            --filter-popup-secondary-text-color: #16161680;
            --filter-popup-border-color: #ffffff;
            --filter-without-priority-color: #1616164D;
            --filter-low-color: #8FA1D0;
            --filter-medium-color: #E09CB5;
            --filter-high-color: #BEDBB0;

            //variables for columns
            --vertical-scroll-bar-bg-color: #ffffff
            --vertical-scroll-slider-bg-color: #B8BCFD;
            --horizontal-scroll-bar-bg-color: #ffffff;
            --horizontal-scroll-slider-bg-color: #B8BCFD;
            --column-add-btn-bg-color: #5255BC;
            --column-add-btn-bg-color-hover: #7B7EDE;
            --column-add-btn-text-color: #ffffff;
            --column-add-btn-plus-bg-color: #ffffff;

            //variables for cards
            --card-bg-color: #ffffff;
            --card-title-color: #161616;
            --card-primary-text-color: #161616B2;
            --card-secondary-text-color: #16161680;
            --card-icon-color: #16161680;

            //variables for modals
            --modal-bg-color: #FCFCFC;
            --modal-title-color: #161616;
            --modal-primary-text-color: #161616;
            --modal-secondary-text-color: #16161680;
            --modal-date-text-color: #5255BC;
            --modal-btn-bg-color: #5255BC;
            --modal-btn-bg-color-hover: #7B7EDE;
            --modal-btn-text-color: #ffffff;
            --modal-button-plus-bg-color: #ffffff
            --modal-input-bg-color: #FCFCFC;
            --modal-input-text-color: #161616;
            --modal-input-placeholder-color: #1616164c;
            --modal-input-border-color: #5255BC;
            --modal-icon-color: #16161680;
            --modal-selected-icon-color: #161616;
            --modal-plus-btn-bg-color: #5255BC;
            --modal-plus-btn-bg-color-hover: #7B7EDE;

            //variables for progress popup
            --progress-popup-bg-color: #FCFCFC;
            --progress-popup-text-color: #161616;
            --progress-popup-text-color-hover: #5255BC;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
