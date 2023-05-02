import App from 'next/app';
import '../public/assets/css/artifusion.css'
import AFLayout from '../components/Layout/AFLayout'

class MyApp extends App {
    // const [collapsed, setCollapsed] = useState(false);
  render() {
    const { Component, pageProps } = this.props;
    return (
        <>
            <AFLayout>
                <Component {...pageProps} />
            </AFLayout>
        </>
    );
  }
}

export default MyApp;
