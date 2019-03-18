import Header from '../components/layoutComponents/Header/header'
import Footer from '../components/layoutComponents/Footer/footer'
import './default.scss'

export default ({ children }) => (
    <div className={'layout-default'}>
        <Header />
        <div className={'default'}>
            { children }
        </div>
        <Footer />
    </div>
)