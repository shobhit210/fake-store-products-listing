import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    productDetailParent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 64px)'
    },
    innerProductDetailParent: {
        width: '80%',
        height: '80vh',
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '4px 4px 32px 4px rgba(105, 108, 180, 0.16)',
        display: 'flex',
        // overflowY: 'auto'
    },
    backButtonParent: {
        position: 'relative',
        left: '20px',
        top: '10px'
    },
    imageParent: {
        width: '50%',
        padding: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    productImage: {
        bgcolor: 'orange',
        width: '100% !important',
        height: '100% !important'
    },
    productDetails: {
        width: '50%',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    headerHR: {
        width: '70px',
        backgroundColor: '#9c27b0',
        height: '4px',
        marginBottom: '25px'
    },
    cardParent: {
        boxShadow: '4px 4px 32px 4px rgba(105, 108, 180, 0.16) !important',
        borderRadius: '15px !important'
    },
    cardActionArea: {
        padding: '20px',
        height: '100%'
    },
    cardMediaImage: {
        padding: '20px',
        height: '400px !important',
        width: '100% !important'
    }
}))

export default useStyles