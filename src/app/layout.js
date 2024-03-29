import { Open_Sans } from 'next/font/google'
import './globals.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'lightbox.js-react/dist/index.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";
import { ToastContainer } from 'react-toastify';
import { ProviderRedux } from '@/redux/provider';

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Appointment',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/themify-icons.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.min.css" />

        <link rel="stylesheet" type="text/css" href="/assets/css/simple-line-icons.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/materialdesignicons.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/line-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/admin.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/metismenu.css" />
      </head>

      <body className={open_sans.className}>
        <ToastContainer />
        <ScrollTop />
        <ProviderRedux>
          <Header />
          {children}
          <Footer />
        </ProviderRedux>
      </body>
    </html>
  )
}
