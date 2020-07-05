import { makeStyles, Theme, createStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    overflow: 'auto'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  marginTop24: {
    marginTop: '24px'
  },
  flexColFull: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  flexStart: {
    alignItems: 'flex-start'
  },
  fullWidth: {
    width: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    color: '#fff',
    backgroundColor: '#45d0c1',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    color: '#fff',
    backgroundColor: '#45d0c1',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  adventureList: {
    height: '186px !important',
    width: '130px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    cursor: 'pointer'
  },

  adventureCard: {
    height: '186px !important',
    margin: '6px 10px !important',
    padding: '0px !important',
    cursor: 'pointer'
  },
  card: {
    height: '50px !important',
    width: '50px !important',
    margin: '6px 10px !important',
    padding: '0px !important',
    cursor: 'pointer',
    backgroundColor: '#FFF335',
    color: '#1A89A4 !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardDescription: {
    height: '50px !important',
    width: '100% !important',
    margin: '6px 10px !important',
    padding: '16px !important',
    cursor: 'pointer',
    backgroundColor: 'rgba(196, 196, 196, 0.25) !important',
    color: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  adventureInside: {
    height: '100% !important',
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    cursor: 'pointer'
  },
  adventure: {
    height: '415px !important',
    margin: '6px 10px !important',
    padding: '0px !important',
    cursor: 'pointer'
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  cardNumberTimeline: {
    height: 24,
    width: 24,
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardAdd: {
    height: '50px !important',
    width: '50px !important',
    margin: '6px 10px !important',
    padding: '0px !important',
    cursor: 'pointer',
    backgroundColor: '#38C1B7'
  },
  cardInside: {
    width: '100%',
    cursor: 'pointer',
    height: '100% !important',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '3px',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  paper: {
    position: 'absolute',
    width: '68vw !important',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5px',
  },
  paper2: {
    position: 'absolute',
    width: '65vw !important',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5px',
  },
  groupQuestions: {
    borderRadius: 4,
    border: '1px solid #d2d2d2',
    margin: 8,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  paperTimeline: {
    padding: '6px 16px',
    cursor: 'pointer'
  },
  dialog: {
    width: 300,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  contentLoader: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  
}),
);