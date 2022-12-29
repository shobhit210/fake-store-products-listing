import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerLogo: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    },
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
        display: 'flex'
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
    cardTitle: {
        fontSize: '20px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    cardActionArea: {
        padding: '20px',
        height: '100%'
    },
    cardMediaImage: {
        padding: '20px',
        height: '400px !important',
        width: '100% !important'
    },
    filtersParent: {
        width: '100%',
        backgroundColor: '#fff',
        padding: '25px 15px',
        marginBottom: '20px',
        boxShadow: '4px 4px 32px 4px rgba(105, 108, 180, 0.16)',
        borderRadius: '10px'
    },
    loadingParent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 64px)'
    },
    detailsLoadingParent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    productDetailsTitle: {
        fontFamily: 'Montserrat',
        fontSize: '34px',
        marginBottom: '20px'
    },
    productDetailsDetail: {
        color: '#d500f9',
        fontFamily: 'Montserrat',
        marginBottom: '13px'
    },
    rating: {
        display: 'flex',
        alignItems: 'center'
    },
    paginationParent: {
        display: 'flex',
        justifyContent: 'center'
    },
    footerParent: {
        width: '100%',
        height: '50px',
        backgroundColor: '#9c27b0',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export default useStyles